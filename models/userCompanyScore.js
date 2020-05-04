const mongoose = require('mongoose');


const ScoreCompanyShema = mongoose.Schema({
    idUser:{
        type:String,
    },
    idCompany:{
        type:String,
    },

});


const ScoreCompany = module.exports = mongoose.model('ScoreCompany', ScoreCompanyShema);

module.exports.addScoreCompany = function(newScore, callback){
    newScore.save(callback);
};

module.exports.guardScore = function(chekData,callback){
    
    ScoreCompany.findOne(chekData,callback);
};




