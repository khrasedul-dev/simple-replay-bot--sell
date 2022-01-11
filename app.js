const {Composer} = require('micro-bot')

const bot = new Composer()


bot.start(ctx=>{
    ctx.reply("The bot only available in the group")
})

bot.command('price',ctx=>{
    ctx.replyWithHTML(`

    Price List: \n
    🇺🇸: $20-$60 Ftid/Ftid v3/Ftidna/LIT/Private
    🇨🇦: $20-$60 Ftid/Ftid v3/Ftidna/Private
    🇬🇧: $30-$65 Ftid/Ftid v3/Ftidna/Private
    🇷🇪 All of EU :$30-$65 Ftid/Ftid v3/Ftidna/Private
    🇦🇺: $30-$65 Ftid/Ftid v3/Ftidna/Private

    🇺🇸: UPS/USPS/FedEx
    🇨🇦: UPS/Canada Post/FedEx/Purolator
    🇬🇧: UPS/Royal Mail/Hermes/Parcelforce/DPD/Collect+
    🇷🇪: UPS/Hermes/DHL/Bpost/Chronopost/Colissimo
    🇦🇺: AusPost
    

    `,{

        parse_mode: "HTML"

    }).catch((e)=>ctx.reply("Something is wrong"))

})

bot.hears('price',ctx=>{
    ctx.replyWithHTML(`

    Price List:\n
    🇺🇸: $20-$60 Ftid/Ftid v3/Ftidna/LIT/Private
    🇨🇦: $20-$60 Ftid/Ftid v3/Ftidna/Private
    🇬🇧: $30-$65 Ftid/Ftid v3/Ftidna/Private
    🇷🇪 All of EU :$30-$65 Ftid/Ftid v3/Ftidna/Private
    🇦🇺: $30-$65 Ftid/Ftid v3/Ftidna/Private

    🇺🇸: UPS/USPS/FedEx
    🇨🇦: UPS/Canada Post/FedEx/Purolator
    🇬🇧: UPS/Royal Mail/Hermes/Parcelforce/DPD/Collect+
    🇷🇪: UPS/Hermes/DHL/Bpost/Chronopost/Colissimo
    🇦🇺: AusPost
    

    `,{

        parse_mode: "HTML"

    }).catch((e)=>ctx.reply("Something is wrong"))

})

bot.command('faq',ctx=>{
    ctx.replyWithHTML(`
    FAQ:\n
    <b><u>How fast do we drop?</u></b>
    We always drop your labels within the day or the next business day. Scan will usually take 24 hours after drop.

    <b><u>What kind of stores can we FTID?</u></b>
    You can FTID all kinds of stores that accept returns

    <b><u>Different FTIDS explained</u></b>
    FTID - FTID V3 - Packages gets delivered but their warehouse cant find it. Company will think they received it but they didnt.
    LIT (Lost in transit) - Package gets scanned and gets lost during transit. Package will never get delivered.
    Only use if you are certain a shop works with LIT
    FTIDNA - Reroute your incoming or outgoing package somewhere else

    <b><u>Only send your labels to @refundagent</u></b>
    Contact us for redrop if label has not moved for 4 days
    Payment always come first

    `,
    {
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Somthing is wrong"))
})

bot.hears('faq',ctx=>{
    ctx.replyWithHTML(`
    FAQ:\n
    <b><u>How fast do we drop?</u></b>
    We always drop your labels within the day or the next business day. Scan will usually take 24 hours after drop.

    <b><u>What kind of stores can we FTID?</u></b>
    You can FTID all kinds of stores that accept returns

    <b><u>Different FTIDS explained</u></b>
    FTID - FTID V3 - Packages gets delivered but their warehouse cant find it. Company will think they received it but they didnt.
    LIT (Lost in transit) - Package gets scanned and gets lost during transit. Package will never get delivered.
    Only use if you are certain a shop works with LIT
    FTIDNA - Reroute your incoming or outgoing package somewhere else

    <b><u>Only send your labels to @refundagent</u></b>
    Contact us for redrop if label has not moved for 4 days
    Payment always come first

    `,
    {
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Somthing is wrong"))
})

bot.command('stores',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    <b><u>Stores and Limits</u></b>
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit#gid=0
    Do not follow our limits as we use different methods sometimes
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})

bot.hears('stores',ctx=>{
    ctx.replyWithHTML(`
    Stores: \n
    <b><u>Stores and Limits</u></b>
    https://docs.google.com/spreadsheets/d/1QqlggC72AZS37ti_Zn1skrw-EUUXuyGS-qmN5-XO5nM/edit#gid=0
    Do not follow our limits as we use different methods sometimes
    `,{
        parse_mode: "HTML"
    }).catch((e)=>ctx.reply("Something is wrong"))
})

bot.command('help',ctx=>{
    ctx.reply(`
    Help:\n
    Step 1 - Get your return label ready
    Step 2 - Contact @refundagent with your label
    Step 3 - Make Payment
    Step 4 - Wait for your label to scan
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.hears('help',ctx=>{
    ctx.reply(`
    Help:\n
    Step 1 - Get your return label ready
    Step 2 - Contact @refundagent with your label
    Step 3 - Make Payment
    Step 4 - Wait for your label to scan
`).catch((e)=>ctx.reply("Somthing is wrong"))

})

bot.command('contact',ctx=>{
    ctx.reply("@refundagent")
})

bot.hears('contact',ctx=>{
    ctx.reply("@refundagent")
})


module.exports = bot
