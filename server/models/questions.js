(function() {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  module.exports = mongoose.model('questions', {questionnumber: Number,
                                                question: String,
                                                answer: String
                                                });

})();
