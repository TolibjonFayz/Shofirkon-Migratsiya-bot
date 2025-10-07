const { bot } = require("../core/bot");

bot.help((ctx) => {
  let text = "Migratsiya botiga xush kelibsiz!";
  try {
    ctx.replyWithHTML(text);
  } catch (err) {
    console.log(err);
  }
});
