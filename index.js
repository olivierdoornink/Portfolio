const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const {engine} = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: path.join(__dirname, '/views/partials'),
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('main')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}`);
});