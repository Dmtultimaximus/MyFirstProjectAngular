const mongoose = require('mongoose');


const BonusCompanySchema = mongoose.Schema({
    idUser:{
        type:String,
    },
    idCompany:{
        type:String,
    },
    nameBonus: {
        type:String,
        require:true
    },
    priceBonus: {
        type:Number,
        require:true
    }
});


const BonusCompany = module.exports = mongoose.model('BonusCompany', BonusCompanySchema);

module.exports.addBonusCompany = function(newBonus, callback){
   newBonus.save(callback);
};

module.exports.getAllBonusCompany = function(idCompany,callback){
    BonusCompany.find({'idCompany':idCompany},callback);
};

// module.exports.getUserCompany = function(idUser,callback){
//     console.log(UserCompany.find({'idUser':idUser},callback ))
// };
module.exports.getUserBonus = function(idUser,callback){
   
    BonusCompany.find({idUser},callback )
};

module.exports.editBonus = function(Bonus,callback){
   
    BonusCompany.findOneAndUpdate({_id:Bonus.id},{nameBonus: Bonus.nameBonus, priceBonus:Bonus.priceBonus},callback);
};
module.exports.deleteBonus = function(idBonus,callback){
    
    BonusCompany.findOneAndRemove({_id:idBonus.id},callback);
};


