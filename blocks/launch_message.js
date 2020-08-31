module.exports = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text:
        "Hello, I'm Sales Deck Bot. I can build a customized Google Slides :googleslides: sales deck with just a few clicks.",
    },
  },
  {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Let's get started!",
          emoji: true,
        },
        style: "primary",
        action_id: "launch",
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Never mind!",
          emoji: true,
        },
        action_id: "close",
      },
    ],
  },
];
