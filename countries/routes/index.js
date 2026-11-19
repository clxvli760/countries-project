var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Японии */
router.get('/japan', function (req, res, next) {
  res.send("<h1>Страница Японии</h1>");
});

/* Страница Франции */
router.get('/france', function (req, res, next) {
  res.send("<h1>Страница Франции</h1>");
});

/* Страница Бразилии */
router.get('/brazil', function (req, res, next) {
  res.send("<h1>Страница Бразилии</h1>");
});

/* Страница Египта */
router.get('/egypt', function (req, res, next) {
  res.send("<h1>Страница Египта</h1>");
});

/* Страница Австралии */
router.get('/australia', function (req, res, next) {
  res.send("<h1>Страница Австралии</h1>");
});

/* Страница Канады */
router.get('/canada', function (req, res, next) {
  res.send("<h1>Страница Канады</h1>");
});

/* Страница Индии */
router.get('/india', function (req, res, next) {
  res.send("<h1>Страница Индии</h1>");
});

/* Страница Норвегии */
router.get('/norway', function (req, res, next) {
  res.send("<h1>Страница Норвегии</h1>");
});

/* Страница Исландии */
router.get('/iceland', function (req, res, next) {
  res.send("<h1>Страница Исландии</h1>");
});

/* Страница Китая */
router.get('/china', function (req, res, next) {
  res.send("<h1>Страница Китая</h1>");
});

/* Страница Мексики */
router.get('/mexico', function (req, res, next) {
  res.send("<h1>Страница Мексики</h1>");
});

/* Страница ЮАР */
router.get('/south-africa', function (req, res, next) {
  res.send("<h1>Страница ЮАР</h1>");
});

module.exports = router;
