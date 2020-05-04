const mongoose = require('mongoose');


const CompanySchema = mongoose.Schema({
    idUser:{
        type:String,
    },
    nameCompany: {
        type:String,
        require:true
    },
    tegsCompany: {
        type:String,
        require:true
    },
    aboutCompany: {
        type:String,
        require:true
    },
    parentDonat:{
        type:String,
    },
    donateGoal:{
        type:String,
        require:true
    },
    dateEnd:{
        type:String,
        require:true
    },
    UserScore:{
        type:Number,
    },
    image:{
        type:String,
    },
    srcVideo:{
        type:String,
    },
    // companyBonus:[{
    //     nameBonus:{
    //        type: String,
    //     },
    //     priceBonus:{
    //         type: String,
    //      }
    // }]
});


const UserCompany = module.exports = mongoose.model('UserCompany', CompanySchema);

module.exports.addUserCompany = function(newUser, callback){
//    newUser.save(callback);
   console.log(newUser.save(callback))
};

module.exports.getAllUserCompany = function(callback){
    UserCompany.find({},callback);
};


module.exports.getUserCompany = function(idUser,callback){
   (UserCompany.find({'idUser':idUser},callback ))
};

module.exports.getCompanyFromHome = function(idCompany,callback){
    (UserCompany.find({'_id':idCompany},callback ))
 };

 module.exports.guardOwner = function(chekData,callback){
    console.log(chekData,'пришло с фронта для проверки владельца')
    UserCompany.findOne(chekData,callback);
};
module.exports.redactUserCompany = function(redact,callback){
    
    UserCompany.findOneAndUpdate({_id: redact.idCompany},
                                {
                                nameCompany: redact.nameCompany, 
                                tegsCompany: redact.tegsCompany,
                                aboutCompany: redact.aboutCompany,
                                donateGoal: redact.donateGoal,
                                dateEnd: redact.dateEnd,
                                srcVideo: redact.srcVideo,
                                },callback);
};
module.exports.deleteCompany = function(idCompany,callback){
    
    UserCompany.findOneAndRemove({_id:idCompany},callback);
};


