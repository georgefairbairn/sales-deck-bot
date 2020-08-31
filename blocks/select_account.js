module.exports = {
  title: {
    type: "plain_text",
    text: "Sales Deck Bot",
    emoji: true,
  },
  callback_id: "submit",
  submit: {
    type: "plain_text",
    text: "Submit",
  },
  type: "modal",
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [
    {
      type: "input",
      block_id: "account_input",
      element: {
        type: "plain_text_input",
        action_id: "account_name",
        placeholder: {
          type: "plain_text",
          text: "Select an account",
        },
      },
      label: {
        type: "plain_text",
        text: "Account or Opportunity Name",
        emoji: true,
      },
    },
  ],
};
