const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const Mailchimp = require('mailchimp-api-v3');

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3001));

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  app.use(express.static('client/build'));
}

const LIST_ID = '4438d3a335';
const MAILCHIMP_API_KEY = 'f2ebb8fc2538ba08120ea0da070fa8c7-us15';
const LIST_MEMBERS_PATH = `lists/${LIST_ID}/members`;

const mailApi = new Mailchimp(MAILCHIMP_API_KEY);

app.post('/api/join', (req, res) => {
  const { email = '', name = '' } = req.body;
  if (!name.length || email.split('@').length !== 2) {
    res.status(400).send({ status: 400 });
    return;
  }
  const parts = name.split('');
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts[1] : '';
  const body = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
  };

  if (isProd) {
    mailApi.post(LIST_MEMBERS_PATH, body).then(() => {
      console.log('Success');
    }).catch((e) => {
      console.error('Failed');
    });
  }

  const resp = {};
  res.json(resp);
});

app.listen(app.get('port'), () => {
  console.log(`Server started at http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
