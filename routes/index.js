var express=require('express'),
    router=express.Router(),
    Item=require('../models/item'),
    User=require('../models/user'),
    Men=require('../models/menitem'),
    Women=require('../models/womenitem');
    const keys = require('../config/keys');

 const stripe=require('stripe')(keys.stripeSecretKey);


router.get('/',function(req,res){
    res.redirect('home');
});

router.get('/home',function(req,res){
    //console.log(req.user);
    Item.find({},function(err,allitems){
        if(err){
            console.log(err);
        }else{
            res.render('home',{allitems:allitems});
        }
    });
});

router.get('/home/:id',function(req,res){
    Item.findById(req.params.id).populate('comments').exec(function(err,foundItem){
        if(err){
            console.log(err);
        }else{
            res.render('show',{item: foundItem});
        }
    });
});

router.get('/men',function(req,res){
    //console.log(req.user);
    Men.find({},function(err,menitems){
        if(err){
            console.log(err);
        }else{
            res.render('menitems',{menitems:menitems});
        }
    });
});

router.get('/men/:id',function(req,res){
    Men.findById(req.params.id).populate('comments').exec(function(err,foundMenItem){
        if(err){
            console.log(err);
        }else{
            res.render('showmen',{men: foundMenItem});
        }
    });
});

router.get('/women',function(req,res){
    //console.log(req.user);
    Women.find({},function(err,womenitems){
        if(err){
            console.log(err);
        }else{
            res.render('womenitems',{womenitems:womenitems});
        }
    });
});

router.get('/women/:id',function(req,res){
    Women.findById(req.params.id).populate('comments').exec(function(err,foundWomenItem){
        if(err){
            console.log(err);
        }else{
            res.render('showwomen',{women: foundWomenItem});
        }
    });
});

router.post('/charge',(req,res)=>{
    const amount=1580;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount,
        description:'Trend-Shoppe',
        currency:'usd',
        customer:customer.id
    }))
    .then(charge => res.render('success'));
});

router.get('/signup',function(req,res){
    res.render('signup');
});

router.post('/signup',function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render('signup');
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/home')
        });
    });
  });

router.get('/login',function(req,res){
    res.render('login');
});

router.post('/login',passport.authenticate('local',
{ 
    successRedirect:'/home',
    failureredirect:'/login'
}),    function(req,res){
});

function isLoggedin(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports=router;
