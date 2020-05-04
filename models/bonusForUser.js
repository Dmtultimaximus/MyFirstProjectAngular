const mongoose = require('mongoose');


const BonusForUser = mongoose.Schema({
    idUser:{
        type:String,
    },
    nameBonus: {
        type:String,
        
    },
    priceBonus: {
        type:Number,
       
    }
});


const UserBonus = module.exports = mongoose.model('userBonus', BonusForUser);

module.exports.addBonusForUser = function(newBonus, callback){
    
    newBonus.save(callback);
};

module.exports.getUserBonus = function(id,callback){
    UserBonus.find({'idUser':id},callback);
};



