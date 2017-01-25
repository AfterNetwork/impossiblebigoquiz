(function() {

  var config = require('../config/config.js');
  var jwt = require('jsonwebtoken');
  var mongoose = require('mongoose');

  module.exports = {
    bananaPudding : function(req, res){
      res.json('bananas');
    },

    firstQuestions : function(req, res){
      var question;
      mongoose.model('questions').find(function(err,ques){
        res.json(ques);
      })
    },

    jsQuestions : function(req, res){
      mongoose.model('jsquestions').find(function(err,ques){
        res.json(ques);
      })
    },

    interviewQuestions: function(req, res){
      mongoose.model('interviewquestions').find(function(err,ques){
        res.json(ques);
      })
    }

  }

})();