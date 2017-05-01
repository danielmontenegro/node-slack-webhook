## About node-slack-webhook

**Be sure to log to stdout and stderr.**

Example with mandatory flags:

```
$ [RUN MY SCRIPT] 2>&1 | node path-to-lib-slack-webhook.js --to [#channel or @user] --hook [MY-SLACK-WEBHOOK]
```

Optional flags:

`--from`: Your script name or whatever you want. (default: node-slack-webhook)

`--codeblock`: To post text formatted as a code block.

`--verbose`: To show the text you are posting in the console.

Check Slack info on incoming webhooks: [Slack API Incoming Webhooks](https://api.slack.com/incoming-webhooks)
