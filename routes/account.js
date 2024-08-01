const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/account', (req, res) => {
  res.sendFile(path.join(__dirname, '../www/account.html'));
});

router.post('/account', (req, res) => {
  const users = [
    { email: 'kristalsapkota@gmail.com', password: "123" },
    { email: 'abc@abc.com', password: "123" },
    { email: '123@123.com', password: "123" }
  ];

  if (!req.body) {
    return res.sendStatus(400);
  }

  const customer = {
    email: req.body.email,
    password: req.body.password,
    valid: false
  };

  for (let i = 0; i < users.length; i++) {
    if (customer.email === users[i].email && customer.password === users[i].password) {
      customer.valid = true;
      break;
    }
  }

  res.send(customer);
});

module.exports = router;
