const express = require('express');
const router = express.Router();
const db = require('../models/index');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const stus = await db.Student.findAll();
  res.render('index', { title: '大洗女子学園戦車道履修者名簿', stus });
});

router.get('/add', (req, res, next) => {
  const data = { title: '新規追加' }
  res.render('add', data);
});

router.post('/add', (req, res, next) => {
  db.sequelize.sync()
    .then(() => db.Student.create({
      name: req.body.name,
      name_kana: req.body.name_kana,
      year: req.body.year,
      height: req.body.height,
      team: req.body.team,
      role: req.body.role,
      leader: req.body.leader,
      nickname: req.body.nickname
    }))
    .then(stus => {
      res.redirect('/');
    });
});


module.exports = router;
