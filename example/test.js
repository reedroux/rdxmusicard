(async () => {
    const { rdxmusicard } = require("rdxmusicard");
    const fs = require("fs");

    const card = new mewcard()
        .setName("Bunga Hati")
        .setAuthor("Salma Salsabil")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://cdn.discordapp.com/attachments/1194410866209206412/1196152611594838026/mewwme.png")
        .setRequester("twodawg")

    const cardBuffer = await card.build();

    fs.writeFileSync(`reedroux.png`, cardBuffer);
    console.log("Done!");
})()
