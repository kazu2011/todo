const express = require('express');
const app = express();

app.get('https://kazu2011.github.io/todo/js_practice/views/top.ejs',(req,res) => {
  res.render('top.ejs');
});

app.listen('kazu2011');

