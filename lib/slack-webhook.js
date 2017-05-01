'use strict';

var argv = require('minimist')(process.argv.slice(2));
var request = require('request');

var text = '';

function showAsCodeBlock (text) {
  return '```' + text + '```';
}

function postToSlack () {
  if (argv['verbose']) console.log(text);

  var payload = JSON.stringify({
    channel: argv['to'],
    username: argv['from'] || 'node-slack-webhook',
    text: (argv['codeblock']) ? showAsCodeBlock(text) : text
  });

  var options = {
    url: argv['hook'],
    method: 'POST',
    form: {
      payload: payload
    },
    headers: {
      Accept: '*/*'
    }
  };

  request(options, function (error, response, body) {
    if (error) throw error;

    if (response.statusCode !== 200) {
      console.log('Status code: ', response.statusCode);
      console.log('Body: ', body);
    }
  });
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();

  if (chunk !== null) text += chunk;
});

process.stdin.on('end', postToSlack);
