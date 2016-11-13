var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model('jsquestions', {questionnumber: Number,
                             question: String,
                             answer: String
                            });