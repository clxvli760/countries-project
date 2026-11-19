
var express = require('express');
var router = express.Router();

// Данные стран из моей базы MongoDB
var countries = [
  {
    slug: 'japan',
    name: 'Япония',
    region: 'Азия',
    population: 124000000,
    capital: 'Токио',
    languages: ['японский'],
    cities: ['Токио', 'Осака', 'Кобе'],
    vaccinated: true
  },
  {
    slug: 'france',
    name: 'Франция',
    region: 'Европа',
    population: 68000000,
    capital: 'Париж',
    languages: ['французский'],
    cities: ['Париж'],
    vaccinated: true
  },
  {
    slug: 'brazil',
    name: 'Бразилия',
    region: 'Америка',
    population: 215000000,
    capital: 'Бразилиа',
    languages: ['португальский'],
    cities: ['Рио', 'Сан-Паулу'],
    vaccinated: true
  },
  {
    slug: 'egypt',
    name: 'Египет',
    region: 'Африка',
    population: 110000000,
    capital: 'Каир',
    languages: ['арабский'],
    cities: ['Каир', 'Александрия'],
    vaccinated: false
  },
  {
    slug: 'australia',
    name: 'Австралия',
    region: 'Океания',
    population: 52000000,
    capital: 'Канберра',
    languages: ['английский'],
    cities: ['Сидней', 'Мельбурн']
  },
  {
    slug: 'canada',
    name: 'Канада',
    region: 'Америка',
    population: 38000000,
    capital: 'Оттава',
    languages: ['английский', 'французский'],
    cities: ['Торонто', 'Ванкувер'],
    vaccinated: true
  },
  {
    slug: 'india',
    name: 'Индия',
    region: 'Азия',
    population: 1405000000,
    capital: 'Нью-Дели',
    languages: ['хинди', 'английский'],
    cities: ['Мумбаи', 'Дели']
  },
  {
    slug: 'norway',
    name: 'Норвегия',
    region: 'Европа',
    population: 5500000,
    capital: 'Осло',
    languages: ['норвежский'],
    cities: ['Осло', 'Берген'],
    vaccinated: true
  },
  {
    slug: 'iceland',
    name: 'Исландия',
    region: 'Европа',
    population: 380000,
    capital: 'Рейкьявик',
    languages: ['исландский'],
    cities: ['Рейкьявик']
  },
  {
    slug: 'china',
    name: 'Китай',
    region: 'Азия',
    population: 1400000000,
    capital: 'Пекин',
    languages: ['китайский'],
    cities: ['Пекин', 'Шанхай'],
    vaccinated: true
  },
  {
    slug: 'mexico',
    name: 'Мексика',
    region: 'Америка',
    population: 128000000,
    capital: 'Мехико',
    languages: ['испанский'],
    cities: ['Мехико', 'Гвадалахара']
  },
  {
    slug: 'south-africa',
    name: 'ЮАР',
    region: 'Африка',
    population: 60000000,
    capital: 'Претория',
    languages: ['английский', 'африкаанс'],
    cities: ['Йоханнесбург', 'Кейптаун'],
    vaccinated: false
  }
];

// Главная страница
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Страны мира',
    countries: countries
  });
});

// Страница отдельной страны
router.get('/:slug', function (req, res, next) {

  // Ищем страну по адресу
  var country = countries.find(function (item) {
    return item.slug === req.params.slug;
  });

  // Если страна не найдена
  if (!country) {
    return next();
  }

  // Передаём данные в шаблон
  res.render('country', {
    country: country
  });
});

module.exports = router;
