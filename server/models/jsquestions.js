(function(){

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  module.exports = mongoose.model('jsquestions', {questionnumber: Number,
                                                  question: String,
                                                  answer: String
                                                  });

})();