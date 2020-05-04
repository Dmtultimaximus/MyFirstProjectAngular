const mongoose = require('mongoose');


const NewsCompanySchema = mongoose.Schema({
    idUser:{
        type:String,
    },
    idCompany:{
        type:String,
        require:true
    },
    titleNews:{
        type:String,
        require:true
    },
    textNews: {
        type:String,
        require:true
    },
    image:{
        type:String,
    }
});


const NewsCompany = module.exports = mongoose.model('NewsCompany', NewsCompanySchema);

module.exports.addUserCompany = function(newCompanyNews, callback){
    newCompanyNews.save(callback);
};

module.exports.getAllNewsCompany = function(idCompany,callback){
    NewsCompany.find({idCompany},callback);
};

module.exports.editNews = function(news,callback){
    
    NewsCompany.findOneAndUpdate({_id:news.id},{titleNews: news.titleNews, textNews:news.textNews},callback);
};
module.exports.deleteNews = function(idNews,callback){
    
    NewsCompany.findOneAndRemove({_id:idNews.id},callback);
};





