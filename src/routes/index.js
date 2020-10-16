const express = require('express');
const router = express.Router();
const db = require('../models/index');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const stus = await db.Student.findAll();
  res.render('index', { title: '大洗女子学園戦車道履修者名簿', stus });
});

module.exports = router;
