var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */

router.get('/', function(req, res,next){
  res.render('index', {
    messages: messages,
    title: "Mini Messageboard",
  });
});
router.get('/new', function (req, res, next) {
  console.log('GET /new');
  res.render('form', {
    title: "Mini Messageboard",
  });
});
router.post('/new', function (req, res, next) {
  const newMessage = req.body.messageText
  const newauthor = req.body.author
  messages.push({ text: newMessage, user: newauthor, added: new Date() });
  res.redirect('/');
})
module.exports = router;
