const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

// initialize environment variables
dotenv.config();

// initialize app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// listen for slash command
app.command("/midas", async ({ ack, say }) => {
  await ack();
  try {
    await say("Loading Midas Touch...");
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  // start app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Midas Touch is running!");
})();
