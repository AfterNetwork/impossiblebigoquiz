(function() {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  module.exports = mongoose.model('interviewquestions', {questionnumber: Number,
                                                         question: String,
                                                         answer: String
                                                        });

})();