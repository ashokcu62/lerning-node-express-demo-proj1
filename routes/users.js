var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
  {
  name:"iphone",
  catagory:"mobile",
  price:"56000",
  description:"this is a goodphone",
  image:"https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg"
},
{
  name:"minote10s",
  catagory:"mobile",
  price:"56000",
  description:"this is a goodphone",
  image:"https://images-eu.ssl-images-amazon.com/images/I/41NNWAx-XQL._SX300_SY300_QL70_FMwebp_.jpg"
},
{
  name:"oneplus",
  catagory:"mobile",
  price:"56000",
  description:"this is a goodphone",
  image:"https://m.media-amazon.com/images/I/810Rscvmd4L._SX679_.jpg"
},
{
  name:"samsung",
  catagory:"mobile",
  price:"56000",
  description:"this is a goodphone",
  image:"https://images.indianexpress.com/2022/05/Samsung-Galaxy-M33-5G-review-1.jpg"
},
]

  res.render('index', {products,admin:false});
});

module.exports = router;
