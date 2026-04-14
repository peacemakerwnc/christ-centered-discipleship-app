#!/usr/bin/env python3
"""Generate missing sampleEntries for Phase 4; print JS fragment to stdout."""
import calendar
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = str(Path(__file__).resolve().parents[1])
JS_PATH = ROOT + "/daily-content-2026.js"

# After edits, collect refs via JSC
def collect_refs_from_js(js_text: str) -> set:
    refs = set(re.findall(r'scripturePrimaryRef:\s*"([^"]+)"', js_text))
    refs.discard("ref")
    return refs


def month_theme(m: int, d: int) -> str:
    if m == 5 and 25 <= d <= 30:
        return "Ordinary Faithfulness — small acts done with great love"
    return {
        1: "Abide in Christ",
        2: "Daily Conversion for Fathers – Turning Again to Christ in the Ordinary",
        3: "The Way of the Cross — Lenten sacrifice, repentance, dying to self",
        4: "Resurrection and Mission — the risen Christ sends fathers on mission",
        5: "Mary, Model of Discipleship",
        6: "The Sacred Heart — love, mercy, the interior life, burning for souls",
        7: "Courage and Fortitude — the virtuous father who does not shrink",
        8: "Mary — Assumption, Queenship, leading family to her",
        9: "Back to Basics — the Creed, the Our Father, fundamentals",
        10: "The Rosary and Spiritual Warfare — praying men, guarding the home",
        11: "Last Things — death, judgment, purgatory, heaven",
        12: "Advent and Incarnation — waiting, longing, the Word made flesh",
    }[m]


# Unique verses for generated days (ref, full NRSV-CE style text) — not used elsewhere
VERSE_POOL = [
    ("Isaiah 53:5", "But he was wounded for our transgressions, crushed for our iniquities; upon him was the punishment that made us whole, and by his bruises we are healed."),
    ("Matthew 16:24", "Then Jesus told his disciples, \"If any want to become my followers, let them deny themselves and take up their cross and follow me.\""),
    ("Luke 9:23", "Then he said to them all, \"If any want to become my followers, let them deny themselves and take up their cross daily and follow me.\""),
    ("Philippians 2:8", "he humbled himself and became obedient to the point of death— even death on a cross."),
    ("Romans 12:12", "Rejoice in hope, be patient in suffering, persevere in prayer."),
    ("1 Corinthians 16:13", "Keep alert, stand firm in your faith, be courageous, be strong."),
    ("2 Timothy 4:7", "I have fought the good fight, I have finished the race, I have kept the faith."),
    ("Joshua 1:9", "I hereby command you: Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go.\""),
    ("Psalm 31:24", "Be strong, and let your heart take courage, all you who wait for the Lord."),
    ("Deuteronomy 31:6", "Be strong and bold; have no fear or dread of them, because it is the Lord your God who goes with you; he will not fail you or forsake you.\""),
    ("Sirach 2:10", "Consider the generations of old and see: has anyone trusted in the Lord and been disappointed? Or has anyone persevered in the fear of the Lord and been forsaken? Or has anyone called upon him and been neglected?"),
    ("Wisdom 3:1-3", "But the souls of the righteous are in the hand of God, and no torment will ever touch them. In the eyes of the foolish they seemed to have died, and their departure was thought to be a disaster, and their going from us to be their destruction; but they are at peace."),
    ("Romans 14:8", "If we live, we live to the Lord, and if we die, we die to the Lord; so then, whether we live or whether we die, we are the Lord's."),
    ("1 Corinthians 15:54-55", "When this perishable body puts on imperishability, and this mortal body puts on immortality, then the saying that is written will be fulfilled: \"Death has been swallowed up in victory.\" \"Where, O death, is your victory? Where, O death, is your sting?\""),
    ("Revelation 21:4", "he will wipe every tear from their eyes. Death will be no more; mourning and crying and pain will be no more, for the first things have passed away.\""),
    ("Matthew 25:13", "Keep awake therefore, for you know neither the day nor the hour.\""),
    ("Luke 12:40", "You also must be ready, for the Son of Man is coming at an unexpected hour.\""),
    ("Hebrews 9:27", "And just as it is appointed for mortals to die once, and after that the judgment,"),
    ("1 John 3:2", "Beloved, we are God's children now; what we will be has not yet been revealed. What we do know is this: when he is revealed, we will be like him, for we will see him as he is."),
    ("Romans 8:38-39", "For I am convinced that neither death, nor life, nor angels, nor rulers, nor things present, nor things to come, nor powers, nor height, nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord."),
    ("Isaiah 7:14", "Therefore the Lord himself will give you a sign. Look, the young woman is with child and shall bear a son, and shall name him Immanuel."),
    ("Luke 2:10-11", "But the angel said to them, \"Do not be afraid; for see—I am bringing you good news of great joy for all the people: to you is born this day in the city of David a Savior, who is the Messiah, the Lord.\""),
    ("John 1:14", "And the Word became flesh and lived among us, and we have seen his glory, the glory as of a father's only son, full of grace and truth."),
    ("Romans 10:9", "because if you confess with your lips that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved."),
    ("Matthew 6:9-10", "\"Pray then in this way: Our Father in heaven, hallowed be your name. Your kingdom come. Your will be done, on earth as it is in heaven.\""),
    ("Ephesians 6:10-11", "Finally, be strong in the Lord and in the strength of his power. Put on the whole armor of God, so that you may be able to stand against the wiles of the devil."),
    ("1 Peter 5:8-9", "Discipline yourselves, keep alert. Like a roaring lion your adversary the devil prowls around, looking for someone to devour. Resist him, steadfast in your faith, for you know that your brothers and sisters in all the world are undergoing the same kinds of suffering."),
    ("Luke 1:46-47", "And Mary said, \"My soul magnifies the Lord, and my spirit rejoices in God my Savior,\""),
    ("Song of Solomon 8:6-7", "Set me as a seal upon your heart, as a seal upon your arm; for love is strong as death, passion fierce as the grave. Its flashes are flashes of fire, a raging flame. Many waters cannot quench love, neither can floods drown it."),
    ("John 19:25-27", "Meanwhile, standing near the cross of Jesus were his mother, and his mother's sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother and the disciple whom he loved standing beside her, he said to his mother, \"Woman, here is your son.\""),
    ("Revelation 12:1", "A great portent appeared in heaven: a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars."),
    ("Luke 2:51", "Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her heart."),
    ("John 2:5", "His mother said to the servants, \"Do whatever he tells you.\""),
    ("Acts 1:14", "All these were constantly devoting themselves to prayer, together with certain women, including Mary the mother of Jesus, as well as his brothers."),
    ("Colossians 1:15-16", "He is the image of the invisible God, the firstborn of all creation; for in him all things in heaven and on earth were created, things visible and invisible, whether thrones or dominions or rulers or powers—all things have been created through him and for him."),
    ("1 Timothy 2:5", "For there is one God; there is also one mediator between God and humankind, Christ Jesus, himself human,"),
    ("Mark 1:15", "and saying, \"The time is fulfilled, and the kingdom of God has come near; repent, and believe in the good news.\""),
    ("Matthew 28:19-20", "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything that I have commanded you. And remember, I am with you always, to the end of the age.\""),
    ("Mark 16:15", "And he said to them, \"Go into all the world and proclaim the good news to the whole creation.\""),
    ("Romans 10:14-15", "But how are they to call on one in whom they have not believed? And how are they to believe in one of whom they have never heard? And how are they to hear without someone to proclaim him? And how are they to proclaim him unless they are sent? As it is written, \"How beautiful are the feet of those who bring good news!\""),
    ("Psalm 91:1-2", "You who live in the shelter of the Most High, who abide in the shadow of the Almighty, will say to the Lord, \"My refuge and my fortress; my God, in whom I trust.\""),
    ("Ephesians 6:18", "Pray in the Spirit at all times in every prayer and supplication. To that end keep alert and always persevere in supplication for all the saints."),
    ("James 4:7", "Submit yourselves therefore to God. Resist the devil, and he will flee from you."),
    ("1 John 4:4", "Little children, you are from God, and have conquered them; for the one who is in you is greater than the one who is in the world."),
    ("Luke 11:2-4", "He said to them, \"When you pray, say: Father, hallowed be your name. Your kingdom come. Give us each day our daily bread. And forgive us our sins, for we ourselves forgive everyone indebted to us. And do not bring us to the time of trial.\""),
    ("Philippians 4:6", "Do not worry about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."),
    ("Hebrews 11:1", "Now faith is the assurance of things hoped for, the conviction of things not seen."),
    ("Romans 5:8", "But God proves his love for us in that while we still were sinners Christ died for us."),
    ("Galatians 5:6", "For in Christ Jesus neither circumcision nor uncircumcision counts for anything; the only thing that counts is faith working through love."),
    ("John 6:51", "I am the living bread that came down from heaven. Whoever eats of this bread will live forever; and the bread that I will give for the life of the world is my flesh.\""),
    ("1 Corinthians 11:26", "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes."),
    ("Psalm 116:15", "Precious in the sight of the Lord is the death of his faithful ones."),
    ("2 Maccabees 12:45", "But if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to pray for the dead."),
    ("1 Corinthians 3:15", "If the work is burned up, the builder will suffer loss; the builder will be saved, but only as through fire."),
    ("Matthew 24:42", "Keep awake therefore, for you do not know on what day your Lord is coming."),
    ("Luke 12:32", "Do not be afraid, little flock, for it is your Father's good pleasure to give you the kingdom."),
    ("Titus 2:11-12", "For the grace of God has appeared, bringing salvation to all, training us to renounce impiety and worldly passions, and in the present age to live lives that are self-controlled, upright, and godly,"),
    ("Romans 13:11-12", "Besides this, you know what time it is, how it is now the moment for you to wake from sleep. For salvation is nearer to us now than when we became believers; the night is far gone, the day is near. Let us then lay aside the works of darkness and put on the armor of light;"),
    ("Isaiah 9:6", "For a child has been born for us, a son given to us; authority rests upon his shoulders; and he is named Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace."),
    ("Micah 5:2", "But you, O Bethlehem of Ephrathah, who are one of the little clans of Judah, from you shall come forth for me one who is to rule in Israel, whose origin is from of old, from ancient days."),
    ("Romans 15:13", "May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit."),
    ("Baruch 5:5", "Arise, O Jerusalem, stand upon the height; look toward the east, and see your children gathered from west and east at the word of the Holy One, rejoicing that God has remembered them."),
    ("Zechariah 9:9", "Rejoice greatly, O daughter Zion! Shout aloud, O daughter Jerusalem! Lo, your king comes to you; triumphant and victorious is he, humble and riding on a donkey, on a colt, the foal of a donkey."),
    ("John 10:27", "My sheep hear my voice. I know them, and they follow me."),
    ("John 6:35", "Jesus said to them, \"I am the bread of life. Whoever comes to me will never be hungry, and whoever believes in me will never be thirsty.\""),
    ("Acts 17:28", "For 'In him we live and move and have our being'; as even some of your own poets have said, 'For we too are his offspring.'"),
    ("Colossians 3:17", "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him."),
    ("1 Thessalonians 5:11", "Therefore encourage one another and build up each other, as indeed you are doing."),
    ("Hebrews 13:16", "Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God."),
    ("Proverbs 27:17", "Iron sharpens iron, and one person sharpens the wits of another."),
    ("Sirach 6:14", "Faithful friends are a sturdy shelter: whoever finds one has found a treasure."),
    ("Psalm 133:1", "How very good and pleasant it is when kindred live together in unity!"),
    ("James 1:19", "You must understand this, my beloved: let everyone be quick to listen, slow to speak, slow to anger;"),
    ("Proverbs 15:23", "To make an apt answer is a joy to anyone, and a word spoken at the right moment—how good it is!"),
    ("Luke 24:45", "Then he opened their minds to understand the scriptures,"),
    ("Acts 8:30-31", "So Philip ran up to it and heard him reading the prophet Isaiah. He asked, \"Do you understand what you are reading?\" He replied, \"How can I, unless someone guides me?\""),
    ("2 Timothy 3:16-17", "All scripture is inspired by God and is useful for teaching, for reproof, for correction, and for training in righteousness, so that everyone who belongs to God may be proficient, equipped for every good work."),
    ("Psalm 119:105", "Your word is a lamp to my feet and a light to my path."),
    ("Deuteronomy 6:6-7", "Keep these words that I am commanding you today in your heart. Recite them to your children and talk about them when you are at home and when you are away, when you lie down and when you rise."),
    ("Proverbs 4:4", "he taught me, and said to me, \"Let your heart hold fast my words; keep my commandments, and live.\""),
    ("Sirach 39:1", "Wise persons will seek out the wisdom of all the ancients, and will be concerned with prophecies;"),
    ("Wisdom 7:14", "For she is a breath of the power of God, and a pure emanation of the glory of the Almighty; therefore nothing defiled gains entrance into her."),
    ("Romans 1:16", "For I am not ashamed of the gospel; it is the power of God for salvation to everyone who has faith, to the Jew first and also to the Greek."),
    ("1 Corinthians 2:2", "For I decided to know nothing among you except Jesus Christ, and him crucified."),
    ("Galatians 6:9", "So let us not grow weary in doing what is right, for we will reap at harvest time, if we do not give up."),
    ("Philippians 1:6", "I am confident of this, that the one who began a good work among you will bring it to completion by the day of Jesus Christ."),
    ("Colossians 4:2", "Devote yourselves to prayer, keeping alert in it with thanksgiving."),
    ("1 Thessalonians 5:17", "pray without ceasing,"),
    ("Philemon 1:6", "I pray that the sharing of your faith may become effective when you perceive all the good that we may do for Christ."),
    ("Hebrews 4:16", "Let us therefore approach the throne of grace with boldness, so that we may receive mercy and find grace to help in time of need."),
    ("James 5:16", "Therefore confess your sins to one another, and pray for one another, so that you may be healed. The prayer of the righteous is powerful and effective."),
    ("1 Peter 4:8", "Above all, maintain constant love for one another, for love covers a multitude of sins."),
    ("1 John 5:14", "And this is the boldness we have in him, that if we ask anything according to his will, he hears us."),
    ("Jude 1:20", "But you, beloved, build yourselves up on your most holy faith; pray in the Holy Spirit;"),
    ("Matthew 5:3", "\"Blessed are the poor in spirit, for theirs is the kingdom of heaven.\""),
    ("Matthew 5:7", "\"Blessed are the merciful, for they will receive mercy.\""),
    ("Matthew 5:9", "\"Blessed are the peacemakers, for they will be called children of God.\""),
    ("Luke 6:36", "Be merciful, just as your Father is merciful."),
    ("John 13:34", "I give you a new commandment, that you love one another. Just as I have loved you, you also should love one another."),
    ("Romans 12:10", "love one another with mutual affection; outdo one another in showing honor."),
    ("1 Corinthians 13:4-5", "Love is patient; love is kind; love is not envious or boastful or arrogant or rude. It does not insist on its own way; it is not irritable or resentful;"),
    ("Ephesians 4:32", "and be kind to one another, tenderhearted, forgiving one another, as God in Christ has forgiven you."),
    ("Philippians 2:4", "Let each of you look not to your own interests, but to the interests of others."),
    ("Colossians 3:13", "Bear with one another and, if anyone has a complaint against another, forgive each other; just as the Lord has forgiven you, so you also must forgive."),
    ("1 Thessalonians 5:15", "See that none of you repays evil for evil, but always seek to do good to one another and to all."),
    ("Hebrews 10:24", "And let us consider how to provoke one another to love and good deeds,"),
    ("1 Peter 3:8", "Finally, all of you, have unity of spirit, sympathy, love for one another, a tender heart, and a humble mind."),
    ("1 John 3:18", "Little children, let us love, not in word or speech, but in truth and action."),
    ("Daniel 3:17", "If our God whom we serve is able to deliver us from the furnace of blazing fire and out of your hand, O king, let him deliver us."),
    ("Esther 4:14", "Perhaps you have come into royal dignity for such a time as this."),
    ("Nehemiah 8:10", "Then he said to them, \"Go your way, eat the fat and drink sweet wine and send portions of them to those for whom nothing is prepared, for this day is holy to our Lord; and do not be grieved, for the joy of the Lord is your strength.\""),
    ("Psalm 46:10", "Be still, and know that I am God! I am exalted among the nations, I am exalted in the earth."),
    ("Psalm 62:5", "For God alone my soul waits in silence, for my hope is from him."),
    ("Psalm 121:1-2", "I lift up my eyes to the hills— from where will my help come? My help comes from the Lord, who made heaven and earth."),
    ("Proverbs 3:11-12", "My child, do not despise the Lord's discipline or be weary of his reproof, for the Lord reproves the one he loves, as a father the son in whom he delights."),
    ("Isaiah 40:29", "He gives power to the faint, and strengthens the powerless."),
    ("Isaiah 41:10", "Do not fear, for I am with you, do not be afraid, for I am your God; I will strengthen you, I will help you, I will uphold you with my victorious right hand."),
    ("Jeremiah 29:12", "Then when you call upon me and come and pray to me, I will hear you."),
    ("Lamentations 3:22-23", "The steadfast love of the Lord never ceases, his mercies never come to an end; they are new every morning; great is your faithfulness."),
    ("Ezekiel 36:26", "A new heart I will give you, and a new spirit I will put within you; and I will remove from your body the heart of stone and give you a heart of flesh."),
    ("Hosea 6:1", "Come, let us return to the Lord; for it is he who has torn, and he will heal us; he has struck down, and he will bind us up."),
    ("Joel 2:13", "Return to the Lord, your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love, and relents from punishing."),
    ("Jonah 2:2", "saying, \"I called to the Lord out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.\""),
    ("Nahum 1:7", "The Lord is good, a stronghold on a day of trouble; he protects those who take refuge in him,"),
    ("Habakkuk 3:18-19", "yet I will rejoice in the Lord; I will exult in the God of my salvation. God, the Lord, is my strength; he makes my feet like the feet of a deer, and makes me tread upon the heights."),
    ("Zephaniah 3:17", "The Lord, your God, is in your midst, a warrior who gives victory; he will rejoice over you with gladness, he will renew you in his love; he will exult over you with loud singing"),
    ("Malachi 3:10", "Bring the full tithe into the storehouse, so that there may be food in my house, and thus put me to the test, says the Lord of hosts; see if I will not open the windows of heaven for you and pour down for you an overflowing blessing."),
    ("Matthew 5:16", "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father in heaven."),
    ("Matthew 7:7", "\"Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you.\""),
    ("Matthew 11:28", "\"Come to me, all you that are weary and are carrying heavy burdens, and I will give you rest.\""),
    ("Matthew 18:20", "For where two or three are gathered in my name, I am there among them.\""),
    ("Mark 10:45", "For the Son of Man came not to be served but to serve, and to give his life a ransom for many.\""),
    ("Luke 6:38", "give, and it will be given to you. A good measure, pressed down, shaken together, running over, will be put into your lap; for the measure you give will be the measure you get back.\""),
    ("Luke 10:27", "He answered, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your strength, and with all your mind; and your neighbor as yourself.\""),
    ("John 3:16", "For God so loved the world that he gave his only Son, so that everyone who believes in him may not perish but may have eternal life."),
    ("John 8:12", "Again Jesus spoke to them, saying, \"I am the light of the world. Whoever follows me will never walk in darkness but will have the light of life.\""),
    ("John 13:14", "So if I, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet."),
    ("John 15:13", "No one has greater love than this, to lay down one's life for one's friends."),
    ("Acts 4:12", "There is salvation in no one else, for there is no other name under heaven given among mortals by which we must be saved.\""),
    ("Acts 20:35", "In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Jesus, for he himself said, 'It is more blessed to give than to receive.'\""),
    ("Romans 5:3-5", "And not only that, but we also boast in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not disappoint us, because God's love has been poured into our hearts through the Holy Spirit that has been given to us."),
    ("Romans 8:1", "There is therefore now no condemnation for those who are in Christ Jesus."),
    ("Romans 12:21", "Do not be overcome by evil, but overcome evil with good."),
    ("1 Corinthians 10:13", "No testing has overtaken you that is not common to everyone. God is faithful, and he will not let you be tested beyond your strength, but with the testing he will also provide the way out so that you may be able to endure it."),
    ("2 Corinthians 1:3-4", "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all consolation, who consoles us in all our affliction, so that we may be able to console those who are in any affliction with the consolation with which we ourselves are consoled by God."),
    ("2 Corinthians 9:7", "Each of you must give as you have made up your mind, not reluctantly or under compulsion, for God loves a cheerful giver."),
    ("Galatians 6:2", "Bear one another's burdens, and in this way you will fulfill the law of Christ."),
    ("Ephesians 2:8-9", "For by grace you have been saved through faith, and this is not your own doing; it is the gift of God— not the result of works, so that no one may boast."),
    ("Ephesians 5:25", "Husbands, love your wives, just as Christ loved the church and gave himself up for her,"),
    ("Philippians 2:5", "Let the same mind be in you that was in Christ Jesus,"),
    ("Philippians 4:13", "I can do all things through him who strengthens me."),
    ("Colossians 3:23", "Whatever your task, put yourselves into it, as done for the Lord and not for your masters,"),
    ("1 Thessalonians 4:11", "and to aspire to live quietly, to mind your own affairs, and to work with your hands, as we directed you,"),
    ("2 Thessalonians 3:13", "Brothers and sisters, do not be weary in doing what is right."),
    ("1 Timothy 6:11", "But as for you, man of God, shun all this; pursue righteousness, godliness, faith, love, endurance, gentleness."),
    ("2 Timothy 2:1", "You then, my child, be strong in the grace that is in Christ Jesus;"),
    ("Titus 2:2", "Tell the older men to be temperate, serious, prudent, and sound in faith, in love, and in endurance."),
    ("Philemon 1:20", "Yes, brother, let me have this benefit from you in the Lord! Refresh my heart in Christ."),
    ("Hebrews 12:1", "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight and the sin that clings so closely, and let us run with perseverance the race that is set before us,"),
    ("James 1:12", "Blessed is anyone who endures temptation. Such a one has stood the test and will receive the crown of life that the Lord has promised to those who love him."),
    ("1 Peter 5:6-7", "Humble yourselves therefore under the mighty hand of God, so that he may exalt you in due time. Cast all your anxiety on him, because he cares for you."),
    ("2 Peter 1:5-7", "For this very reason, you must make every effort to support your faith with goodness, and goodness with knowledge, and knowledge with self-control, and self-control with endurance, and endurance with godliness, and godliness with mutual affection, and mutual affection with love."),
    ("1 John 1:9", "If we confess our sins, he who is faithful and just will forgive us our sins and cleanse us from all unrighteousness."),
    ("3 John 1:11", "Beloved, do not imitate what is evil but imitate what is good. Whoever does good is from God; whoever does evil has not seen God."),
    ("Revelation 3:20", "Listen! I am standing at the door, knocking; if you hear my voice and open the door, I will come in to you and eat with you, and you with me."),
    ("Sirach 1:14", "To fear the Lord is the beginning of wisdom; she is created with the faithful in the womb."),
    ("Wisdom 1:13", "God did not make death, and he does not delight in the death of the living."),
    ("Baruch 4:28", "As your children have endured the punishment that came from God upon the righteous nation, so now you also will receive mercy from God."),
    ("Judith 8:27", "Listen closely, my children, to my words; do not disregard what I say."),
    ("Tobit 12:12", "So, when you and Sarah prayed, I brought a reminder of your prayer before the Glory of the Lord; and likewise whenever you buried the dead."),
    ("Genesis 22:12", "He said, \"Do not lay your hand on the boy or do anything to him; for now I know that you fear God, since you have not withheld your son, your only son, from me.\""),
    ("Exodus 20:12", "Honor your father and your mother, so that your days may be long in the land that the Lord your God is giving you."),
    ("Leviticus 19:18", "You shall not take vengeance or bear a grudge against any of your people, but you shall love your neighbor as yourself: I am the Lord."),
    ("Numbers 6:24-26", "The Lord bless you and keep you; the Lord make his face to shine upon you, and be gracious to you; the Lord lift up his countenance upon you, and give you peace."),
    ("Deuteronomy 4:9", "But take care and watch yourselves closely, so as not to forget the things that your eyes have seen or to let them slip from your mind all the days of your life; make them known to your children and your children's children,"),
    ("Joshua 24:15", "And if it is evil in your eyes to serve the Lord, choose this day whom you will serve, whether the gods your ancestors served in the region beyond the River or the gods of the Amorites in whose land you are living; but as for me and my household, we will serve the Lord.\""),
    ("1 Samuel 12:24", "Only fear the Lord, and serve him faithfully with all your heart; for consider what great things he has done for you."),
    ("2 Samuel 22:31", "This God—his way is perfect; the promise of the Lord proves true; he is a shield for all who take refuge in him."),
    ("1 Kings 8:61", "Let your hearts therefore be wholly true to the Lord our God, walking in his statutes and keeping his commandments, as at this day.\""),
    ("2 Chronicles 7:14", "if my people who are called by my name humble themselves, pray, seek my face, and turn from their wicked ways, then I will hear from heaven, and will forgive their sin and heal their land."),
    ("Ezra 8:23", "So we fasted and petitioned our God for this, and he listened to our entreaty."),
    ("Nehemiah 4:14", "Do not be afraid of them. Remember the Lord, who is great and awesome, and fight for your kin, your sons, your daughters, your wives, and your homes.\""),
    ("Job 19:25", "For I know that my Redeemer lives, and that at the last he will stand upon the earth;"),
    ("Psalm 4:8", "I will both lie down and sleep in peace; for you alone, O Lord, make me lie down in safety."),
    ("Psalm 19:14", "Let the words of my mouth and the meditation of my heart be acceptable to you, O Lord, my rock and my redeemer."),
    ("Psalm 37:5", "Commit your way to the Lord; trust in him, and he will act."),
    ("Psalm 51:17", "The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, you will not despise."),
    ("Psalm 90:12", "So teach us to count our days that we may gain a wise heart."),
    ("Psalm 103:13", "As a father has compassion for his children, so the Lord has compassion for those who fear him."),
    ("Psalm 127:1", "Unless the Lord builds the house, those who build it labor in vain. Unless the Lord guards the city, the guard keeps watch in vain."),
    ("Psalm 139:23-24", "Search me, O God, and know my heart; test me and know my thoughts. See if there is any wicked way in me, and lead me in the way everlasting."),
    ("Proverbs 16:3", "Commit your work to the Lord, and your plans will be established."),
    ("Proverbs 22:6", "Train children in the right way, and when old, they will not stray."),
    ("Ecclesiastes 12:1", "Remember your creator in the days of your youth, before the days of trouble come and the years draw near when you will say, \"I have no pleasure in them\";\""),
    ("Isaiah 1:18", "Come now, let us argue it out, says the Lord: though your sins are like scarlet, they shall be like snow; though they are red like crimson, they shall become like wool."),
    ("Isaiah 26:12", "O Lord, you will ordain peace for us, for indeed, all that we have done you have done for us."),
    ("Isaiah 35:4", "Say to those who are of a fearful heart, \"Be strong, do not fear! Here is your God. He will come with vengeance, with terrible recompense. He will come and save you.\""),
    ("Isaiah 55:6", "Seek the Lord while he may be found, call upon him while he is near;"),
    ("Jeremiah 17:7", "Blessed are those who trust in the Lord, whose trust is the Lord."),
    ("Daniel 12:3", "Those who are wise shall shine like the brightness of the sky, and those who lead many to righteousness, like the stars forever and ever."),
    ("Matthew 5:44", "But I say to you, Love your enemies and pray for those who persecute you,"),
    ("Matthew 6:33", "But strive first for the kingdom of God and his righteousness, and all these things will be given to you as well."),
    ("Matthew 22:37-38", "He said to him, \"You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.\" This is the greatest and first commandment."),
    ("Mark 12:30", "you shall love the Lord your God with all your heart, and with all your soul, and with all your mind, and with all your strength.\""),
    ("Luke 1:37", "For nothing will be impossible with God.\""),
    ("John 4:24", "God is spirit, and those who worship him must worship in spirit and truth.\""),
    ("John 14:6", "Jesus said to him, \"I am the way, and the truth, and the life. No one comes to the Father except through me.\""),
    ("John 17:3", "And this is eternal life, that they may know you, the only true God, and Jesus Christ whom you have sent."),
    ("Acts 2:38", "Peter said to them, \"Repent, and be baptized every one of you in the name of Jesus Christ so that your sins may be forgiven; and you will receive the gift of the Holy Spirit.\""),
    ("Acts 16:31", "They answered, \"Believe on the Lord Jesus, and you will be saved, you and your household.\""),
    ("Romans 3:23-24", "since all have sinned and fall short of the glory of God; they are now justified by his grace as a gift, through the redemption that is in Christ Jesus,"),
    ("Romans 6:23", "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord."),
    ("Romans 10:17", "So faith comes from what is heard, and what is heard comes through the word of Christ."),
    ("Romans 15:1", "We who are strong ought to put up with the failings of the weak, and not to please ourselves."),
    ("1 Corinthians 13:13", "And now faith, hope, and love abide, these three; and the greatest of these is love."),
    ("2 Corinthians 5:21", "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God."),
    ("Galatians 5:14", "For the whole law is summed up in a single commandment, \"You shall love your neighbor as yourself.\""),
    ("Ephesians 4:29", "Let no evil talk come out of your mouths, but only what is useful for building up, as there is need, so that your words may give grace to those who hear."),
    ("Philippians 4:8", "Finally, beloved, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is pleasing, whatever is commendable, if there is any excellence and if there is anything worthy of praise, think about these things."),
    ("Colossians 3:14", "Above all, clothe yourselves with love, which binds everything together in perfect harmony."),
    ("1 Thessalonians 5:23", "May the God of peace himself sanctify you entirely; and may your spirit and soul and body be kept sound and blameless at the coming of our Lord Jesus Christ."),
    ("2 Timothy 1:9", "who saved us and called us with a holy calling, not according to our works but according to his own purpose and grace, which was given to us in Christ Jesus before the ages began,"),
    ("Hebrews 11:6", "And without faith it is impossible to please God, for whoever would approach him must believe that he exists and that he rewards those who seek him."),
    ("James 4:10", "Humble yourselves before the Lord, and he will exalt you."),
    ("1 Peter 1:22", "Now that you have purified your souls by your obedience to the truth through the Spirit so that you have genuine mutual love, love one another deeply from the heart."),
    ("2 Peter 3:18", "But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity. Amen."),
    ("1 John 4:19", "We love because he first loved us."),
    ("Revelation 22:20", "The one who testifies to these things says, \"Surely I am coming soon.\" Amen. Come, Lord Jesus!"),
]

ORDER = ["prayer", "sacrifice", "service", "study", "conversation"]


def pad2(n):
    return f"{n:02d}"


def key_for(m, d):
    return f"{pad2(m)}-{pad2(d)}"


def build_ct_map():
    m = {}
    prev = prev2 = None
    for month in range(1, 13):
        dim = calendar.monthrange(2026, month)[1]
        for day in range(1, dim + 1):
            seed = month * 40 + day
            idx = seed % 5
            pick = ORDER[idx]
            guard = 0
            while pick == prev and prev == prev2 and guard < 12:
                guard += 1
                idx = (idx + 1) % 5
                pick = ORDER[idx]
            m[key_for(month, day)] = pick
            prev2, prev = prev, pick
    return m


def js_str(s: str) -> str:
    return json.dumps(s)


def main():
    text = open(JS_PATH, encoding="utf-8").read()
    # existing keys in sampleEntries
    start = text.index("var sampleEntries = {")
    sub = text[start:]
    keys = set(re.findall(r'^\s*"(\d{2}-\d{2})"\s*:', sub, re.M))
    have = keys
    missing = []
    for m in range(1, 13):
        dim = calendar.monthrange(2026, m)[1]
        for d in range(1, dim + 1):
            k = key_for(m, d)
            if k not in have:
                missing.append((m, d, k))
    used_refs = collect_refs_from_js(text)
    pool = [p for p in VERSE_POOL if p[0] not in used_refs]
    if len(pool) < len(missing):
        print("NEED MORE VERSES", len(pool), len(missing), file=sys.stderr)
        sys.exit(1)
    ct_map = build_ct_map()
    lines = []
    vi = 0
    for m, d, k in sorted(missing):
        ref, verse = pool[vi]
        vi += 1
        while ref in used_refs:
            ref, verse = pool[vi]
            vi += 1
        used_refs.add(ref)
        theme = month_theme(m, d)
        ctype = ct_map[k]
        idol = ["comfort", "ego", "career", "distraction", "lust", "control"][(m + d) % 6]
        # Exactly 3 sentences reflection
        refl = (
            f"Christ speaks in {ref}—\"{verse[:120]}{'…' if len(verse) > 120 else ''}\"—not to decorate your morning but to name his work before your family hears your voice. "
            f"The idol of {idol} whispers that you can bracket this word off from invoices, desire, and the remote control; the Gospel calls that bluff and offers grace that reorders the whole day. "
            f"This month we hear {theme.split('—')[0].strip()}: let the verse cut where you have been improvising salvation without the cross."
        )
        fn = (
            f"You stand as father between this text and your children's picture of God—will they meet a judge of moods or the Christ who speaks here? "
            f"Tonight choose one concrete act—tone, touch, or time—that proves you heard {ref} with your vocation, not only your intellect."
        )
        chals = {
            "prayer": f"Kneel or sit upright for twelve minutes with {ref} open, read it twice, and offer only silence before you ask anything of God.",
            "sacrifice": f"Renounce one pleasure you use to numb stress today and spend those minutes with {ref} written on paper in your pocket.",
            "service": f"Perform one hidden act of service for a struggling neighbor or coworker while praying {ref} once under your breath.",
            "study": f"Copy {ref} by hand, underline one clause that indicts you, and read your copy aloud to your wife or an accountability brother.",
            "conversation": f"Tell one family member how {ref} challenged you today—one honest paragraph—then ask how they hear Christ in that line.",
        }
        least = f"Buy groceries or gas for someone scraping by and say only that you are acting because {ref} named Christ's mercy to you."
        pray = (
            f"Lord Jesus, you address me in {ref}.\n"
            f"I still negotiate with the idol of {idol}.\n"
            f"Cut through my excuses and stay near my wife and children today.\n"
            f"Let this word be heard in how I speak, spend, and serve.\n"
            f"I turn my heart toward you now—no more delay.\n\n"
            f"Amen"
        )
        jp = (
            f"Where did {ref} actually reorder what I did as a husband and father today?\n\n"
            f"Where did I hide from that word—and what will I confess tonight before God?"
        )
        block = f"""      {js_str(k)}: {{
        scripturePrimaryRef: {js_str(ref)},
        scripturePrimaryText:
          {js_str(verse)},
        reflection:
          {js_str(refl)},
        fatherNote:
          {js_str(fn)},
        challengeType: {js_str(ctype)},
        challenge:
          {js_str(chals[ctype])},
        leastOfThese:
          {js_str(least)},
        prayer:
          {js_str(pray)},
        journalPrompt:
          {js_str(jp)},
      }},"""
        lines.append(block)
    print("\n".join(lines))


if __name__ == "__main__":
    main()
