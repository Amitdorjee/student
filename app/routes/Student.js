var express = require('express');
var router = express.Router();
var Student = require('../Controller/StudentController');

// Get all employees
router.get('/', function(req, res) {
  Student.list(req, res);
});

// Get single employee by id
router.get('/show/', function(req, res) {
  Student.list(req, res);
});

// Create employee
router.get('/create', function(req, res) {
  Sudent.create(req, res);
});

// Save employee
router.post('/save', function(req, res) {
  Student.save(req, res);
});

// Edit employee
router.get('/edit/:id', function(req, res) {
  Student.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  Student.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  Student.delete(req, res);
});

module.exports = router;