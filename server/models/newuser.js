(function() {

   var mongoose = require('mongoose');
   var Schema = mongoose.Schema;

   module.exports = mongoose.model('Users', new Schema ({
                                    username: {
                                    type: String,
                                    require: true,
                                    unique: true
                                    },
                                    password: {
                                    type: String,
                                    require: true
                                    },
                                    email: {
                                    type: String,
                                    require: true,
                                    unique: true
                                    },
                                    medals: [String],
                                    token: String
                                    }));

})();