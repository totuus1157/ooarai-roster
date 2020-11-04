const express = require('express');
const router = express.Router();
const db = require('../models/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  db.Student.findAll().then(stus => {
    const data = {
      title: '大洗女子学園戦車道履修者名簿',
      content: stus
    }
    res.render('index', data);
  });
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

router.get('/edit', (req, res, next) => {
  db.Student.findByPk(req.query.id).then(stus => {
    const data = {
      title: '更新',
      form: stus
    }
    res.render('edit', data);
  });
});

router.post('/edit', (req, res, next) => {
  db.sequelize.sync()
    .then(() => db.Student.update({
      name: req.body.name,
      name_kana: req.body.name_kana,
      year: req.body.year,
      height: req.body.height,
      team: req.body.team,
      role: req.body.role,
      leader: req.body.leader,
      nickname: req.body.nickname
    },
    {
      where:{id:req.body.id}
    }))
    .then(stus => {
      res.redirect('/');
    });
});


module.exports = router;
