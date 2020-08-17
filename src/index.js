const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.bo@dy === "!cek") {
      client.sendText(msg.from, "_👋 Hello! @zakuradev in here ..._");
      client;
    } else if (msg.mimetype) {
      if (msg.caption === "!sticker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
