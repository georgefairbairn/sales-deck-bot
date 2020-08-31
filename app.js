const { App, LogLevel } = require("@slack/bolt");
const dotenv = require("dotenv");

// import blocks
const launch_message = require("./blocks/launch_message");
const select_account_view = require("./blocks/select_account");

// initialize environment variables
dotenv.config();

// initialize app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// listen for slash command
app.command("/salesdeck", async ({ ack, body, context }) => {
  await ack();
  try {
    // post helper message
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: body.channel_id,
      blocks: launch_message,
    });
  } catch (error) {
    console.error(error);
  }
});

// listen for 'Never mind!' button click
app.action("close", async ({ ack, body, context }) => {
  await ack();
  try {
    await app.client.chat.delete({
      token: context.botToken,
      channel: body.channel.id,
      ts: body.message.ts,
    });
  } catch (error) {
    console.error(error);
  }
});

// listen for 'Let's get started!' button click
app.action("launch", async ({ ack, body, context }) => {
  await ack();
  try {
    await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: select_account_view,
    });
  } catch (error) {
    console.error(error);
  }
});

let accountName;

// listen for modal submission
app.view("submit", async ({ ack, body, context, view }) => {
  await ack();
  try {
    accountName = view.state.values.account_input.account_name.value;
    // post loading message
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: body.user.id,
      text: `Hooray! I'm working on your slides for *${accountName}*. I'll send you a DM when they are ready! It should only take a few minutes...`,
    });

    // simulate delay of slide generation
    setTimeout(async () => {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: body.user.id,
        text: "Slides generated!",
      });
    }, 3000);
  } catch (error) {
    console.error(error);
  }
});

(async () => {
  // start app
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Sales Deck Bot is running!");
})();
