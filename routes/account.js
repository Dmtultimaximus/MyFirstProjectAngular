const express = require('express');
const router = express.Router();
const User = require('../models/user')
const UserCompany = require('../models/userCompany')
const UserCompanyBonus = require('../models/userCompanyBonus')
const UserCompanyScore = require('../models/userCompanyScore')
const UserCompanyNews = require('../models/userCompanyNews')
const BonusForUser = require('../models/bonusForUser')
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');
const cloudinaryService = require('../cloudinaryService');
// router.get('/reg', (req,res) => {
//     res.send('registr');
// });

router.post('/dashboard', async (req,res) => {
    let image ="";
    try{
        const{url} = await cloudinaryService.uploadImage(req.body.image);
        image = url;
    } catch(e){}

    let = newUserCompany = new UserCompany({
        idUser: req.body.idUser,
        nameCompany: req.body.nameCompany,
        tegsCompany: req.body.tegsCompany,
        aboutCompany: req.body.aboutCompany,
        parentDonat: req.body.parentDonat,
        donateGoal: req.body.donateGoal,
        dateEnd: req.body.dateEnd,
        UserScore: req.body.UserScore,
        srcVideo: req.body.srcVideo,
        image: image,
        
    });
  
    UserCompany.addUserCompany(newUserCompany, (err,userCompany) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else
            res.json({success: true, msg: userCompany._id});
    });
    
});

router.post('/bonus', (req,res) => {
    let = newBonusCompany = new UserCompanyBonus({
        idUser: req.body.idUser,
        nameBonus: req.body.nameBonus,
        priceBonus: req.body.priceBonus,
        idCompany: req.body.idCompany
    });
    
    UserCompanyBonus.addBonusCompany(newBonusCompany, (err,userCompanyBonus) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else
            res.json({success: true, msg:" added"});
    });
    
});

router.post('/addNews', async (req,res) => {

    let image ="";
    try{
        const{url} = await cloudinaryService.uploadImage(req.body.image);
        image = url;
    } catch(e){}
    let = newCompanyNews = new UserCompanyNews({
        idUser: req.body.idUser,
        idCompany: req.body.idCompany,
        titleNews: req.body.titleNews,
        textNews: req.body.textNews,
        image:image
    });
    
  
    UserCompanyNews.addUserCompany(newCompanyNews, (err,newCompanyNews) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else
            res.json({success: true, msg: newCompanyNews._id});
    });
});

router.get('/findAll',  (req,res) => {
    UserCompany.getAllUserCompany((err,company) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else
            res.json({company});
    })
});

router.get('/getAllNews',  (req,res) => {
    UserCompanyNews.getAllNewsCompany(req.query.idCompany,(err,companyNews) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(companyNews);        
        }           
    })
});

router.get('/dashboard',  (req,res) => {
    UserCompany.getUserCompany(req.query.id,(err,company) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(company);        
        }           
    })
});

router.get('/getFromHome',  (req,res) => {
    UserCompany.getCompanyFromHome(req.query.idCompany,(err,company) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(company);        
        }           
    })
});

router.get('/getBonusCompany',  (req,res) => {
    UserCompanyBonus.getAllBonusCompany(req.query.idCompany,(err,bonus) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(bonus);        
        }           
    })
});

router.get('/getUserBonus',  (req,res) => {
    const idUser = req.query.idUser;
   
    BonusForUser.getUserBonus(idUser,(err,bonusUser) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(bonusUser);    
        }           
    })
});

router.post('/addDonate', async (req,res) =>{
   
    const {body:{idCompany,count}}=req;
    const {parentDonat:old} = await UserCompany.findOne({_id:idCompany})
    await UserCompany.findOneAndUpdate({_id:idCompany}, {parentDonat:parseFloat(old)+ count})  
})

router.post('/addScore', async (req,res) =>{
    const {body:{idCompany,UserScore}}=req;
    const {UserScore:old} = await UserCompany.findOne({_id:idCompany})
    await UserCompany.findOneAndUpdate({_id:idCompany}, {UserScore:(parseFloat(old)+ UserScore)/2})  
})

router.post('/addScoreData', (req,res) => {
    let = newScoreCompany = new UserCompanyScore({
        idUser: req.body.idUser,
        idCompany: req.body.idCompany
    });
    UserCompanyScore.addScoreCompany(newScoreCompany, (err,newScoreCompany) => {

    });
});
router.post('/chekUser', (req,res) => {
    const chekData = {
        idUser: req.body.idUser,
        idCompany: req.body.idCompany
    };
    UserCompanyScore.guardScore(chekData, (err,find) => {
        if (err) 
            res.json({success: false, msg: " not find"});
        else
            res.json(find);
    });
});
router.post('/chekOwner', (req,res) => {
    const chekData = {
        idUser: req.body.idUser,
        _id: req.body.idCompany,
    };
    UserCompany.guardOwner(chekData, (err,find) => {
        if (err) 
            res.json({success: false, msg: " not find"});
        else
            res.json(find);
    });
});
router.post('/reg', (req,res) => {
    let = newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });
    User.getUserByEmail(newUser.email, (err,user) => {
        if(err) throw err;
        if(user)
            return res.json({success: false, msg: "Email занят" });
    User.getUserByLogin(newUser.login, (err,user) => {
        if(err) throw err;
        if(user)
            return res.json({success: false, msg: "Логин Занят" });
    User.addUser(newUser, (err,user) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json({success: true, msg:"user added"});
    });
})})});



router.post('/findCompanyById',(req,res) =>{
    const idUser = req.body.idUser;
    UserCompany.getUserCompany(idUser, (err,UserCompany) =>{
        if(err) throw err;
        if(!UserCompany)
            return res.json({success: false, msg: "company not found" });
    })
})

router.post('/redactNews', (req,res) => {
    const editNews = {
        id: req.body.id,
        titleNews: req.body.titleNews,
        textNews: req.body.textNews,
    };
    UserCompanyNews.editNews(editNews, (err,News) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json(News);
    });
});

router.post('/deleteNews', (req,res) => {
  
    const idNews ={
        id: req.body.id
    }
   
    UserCompanyNews.deleteNews(idNews, (err,News) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json(News);
    });
});

router.post('/deleteBonus', (req,res) => {
  
    const idBonus ={
        id: req.body.id
    }
    UserCompanyBonus.deleteBonus(idBonus, (err,Bonus) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json(Bonus);
    });
});

router.post('/redactBonus', (req,res) => {
    const editBonus = {
        id: req.body.id,
        nameBonus: req.body.nameBonus,
        priceBonus: req.body.priceBonus,
    };
    UserCompanyBonus.editBonus(editBonus, (err,Bonus) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json(Bonus);
    });
});

router.post('/addBonusForUser', (req,res) => {
    const addBonusForUser = new BonusForUser ({
        idUser: req.body.idUser,
        nameBonus: req.body.nameBonus,
        priceBonus: req.body.priceBonus,
    });
    BonusForUser.addBonusForUser(addBonusForUser, (err,Bonus) => {
        if (err) 
            res.json({success: false, msg: "user not added"});
        else
            res.json(Bonus);
    });
});

router.post('/redactCompany', (req,res) => {
    let  redactUserCompany = {
        idCompany: req.body.idCompany,
        nameCompany: req.body.nameCompany,
        tegsCompany: req.body.tegsCompany,
        aboutCompany: req.body.aboutCompany,
        donateGoal: req.body.donateGoal,
        dateEnd: req.body.dateEnd,
        srcVideo: req.body.srcVideo,
    };

    UserCompany.redactUserCompany(redactUserCompany, (err,userCompany) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else
            res.json(userCompany);
    });
    
});

router.get('/deleteCompany',  (req,res) => {
    const idCompany = req.query.idCompany;
   
    UserCompany.deleteCompany(idCompany,(err,company) => {
        if (err) 
            res.json({success: false, msg: " not added"});
        else{
            res.json(company);    
        }           
    })
});

router.post('/chekLogin',  (req,res) => {
    const login = req.body.login
    User.getUserByLogin(login,(err,user) => {
        if(err) throw err;
        if(user)
            return res.json({success: false, msg: "find"});        
    });
});

router.post('/chekEmail',  (req,res) => {
    const email = req.body.email
    User.getUserByLogin(email,(err,user) => {
        if(err) throw err;
        if(user)
        
            return res.json({success: true, msg: " find"});
    })
});

router.post('/auth', (req,res) => {
    const login = req.body.login;
    const password = req.body.password;
    User.getUserByLogin(login, (err,user) => {
        if(err) throw err;
        if(!user)
            return res.json({success: false, msg: "User not found" });

        User.comparePass(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                //
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 3600*24  
                });
                res.json({
                    success: true,
                    token: 'JWT'+token,
                    user: {
                        id:user._id,
                        name:user.name,
                        login:user.login,
                        email:user.email,
                    }
                });
            } else
                return res.json({success: false, msg: "Password not correct" });
        });
   });
});

router.get('/cabinet', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.send('cabinet');
});

module.exports = router;