(function() {

  var config = require('../config/config.js');
  var jwt = require('jsonwebtoken');
  var mongoose = require('mongoose');
  var questions = require('../models/questions.js');
  var jsquestions = require('../models/jsquestions.js');
  var interviewquestions = require('../models/interviewquestions.js');

  module.exports = {
    bananaPudding : function(req, res){
      res.json('bananas');
    },

    firstQuestions : function(req, res){
      questions.find(function(err,ques){
        res.json(ques);
      })
    },

    jsQuestions : function(req, res){
      jsquestions.find(function(err,ques){
        res.json(ques);
      })
    },

    interviewQuestions: function(req, res){
      interviewquestions.find(function(err,ques){
        res.json(ques);
      })
    }

  }

})();