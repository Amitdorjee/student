var mongoose = require("mongoose");
var Student = require('../models/Student');
var StudentController = {};


// Show list of employees
StudentController.list = function(req, res) {
  Student.find({}).exec(function (err, student) {
    
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Student/show", {student: student});
    }
  });
};

// Show employee by id
StudentController.show = function(req, res) {
  Student.findOne({name: req.params.name}).exec(function (err, Student) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Student/show", {student: Student});
    }
  });
};

// Create new employee
StudentController.create = function(req, res) {
  res.render("../views/Student/create");
};

// Save new employee
StudentController.save = function(req, res) {
  var student = new Student(req.body);
  
  student.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/Student/create");
    } else {
      console.log("Successfully created an student.");
      res.redirect("/Student/show/");
    }
  });
};

// Edit an employee
StudentController.edit = function(req, res) {
  Student.findOne({_id: req.params.id}).exec(function (err, Student) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Student/edit", {Student: Student});
    }
  });
};

// Update an employee
StudentController.update = function(req, res) {
  Student.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
    if (err) {
      console.log(err);
      res.render("../views/Student/edit", {Student: req.body});
    }
    res.redirect("/Student/show/"+Student._id);
  });
};

// Delete an employee
StudentController.delete = function(req, res) {
  Student.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Student deleted!");
      res.redirect("/Student");
    }
  });
};

module.exports = StudentController;
