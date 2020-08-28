const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

// initialize environment variables
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  // start app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Midas Touch is running!");
})();
