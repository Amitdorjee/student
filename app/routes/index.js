var express = require('express');
var router = express.Router();
var Student = require('../Controller/StudentController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Student/index', { title: 'Student', Student: [ 'John' ,  'Mike' , 'Samantha' ]});
});

router.get('/create',function(req,res){
  Student.create(req, res);
});
/*router.get('/show/:id', function(req, res) {
  Student.show(req, res);
});*/

router.post('/save', function(req, res) {
  console.log(req)
  Student.save(req, res);
});

module.exports = router;