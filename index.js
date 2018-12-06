var express=require('express');
    bodyparser=require('body-parser'),
    mongoose=require('mongoose'),
    expressSession=require('express-session'),
    seedDB=require('./seed'),
    passport=require('passport'),
    LocalStrategy=require('passport-local'),
    User=require('./models/user');
    const keys = require('./config/keys');
const config=require('./config/config');
   
var app=express();

seedDB();

const port = process.env.PORT || 8080;

var indexRoutes=require('./routes/index');

//mongoose.connect('mongodb://localhost/trend');

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.use(require('express-session')({
    secret:'bhavnajuttiga',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.User;
    next();
});

app.use(indexRoutes);

mongoose.connect(config.mongodb.dbURI,() => {
    console.log('connected to mongo db');
});

app.listen(port,()=>{
    console.log('server started on port' + port);
});

/*
<marquee style="width:700px"> 
    <img src="https://rukminim1.flixcart.com/flap/1400/1400/image/1b0925.jpg?q=50">
    <img src="https://www.dhresource.com/260x260s/f2-albu-g6-M00-F5-1F-rBVaR1rK9HKATwLCAAU1vFOFApw586.jpg/geekthink-hollow-quartz-watch-women-luxury.jpg">
    <img src="https://i.etsystatic.com/18507923/c/2068/1643/443/312/il/0ce8c6/1640669772/il_340x270.1640669772_i0lv.jpg">
    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8833/k2-_5c567ef3-2243-41f4-b15d-9bb43e393f41.v1.jpg?odnWidth=672&odnHeight=672&odnBg=ffffff">
    <img src="https://www.fotoagent.dk/single_picture/10937/43/large/MA18_2_ENG.jpg">
    <img src="https://cdn.shopify.com/s/files/1/2350/3183/products/20042_500x.jpg?v=1538024416">
</marquee>


<marquee behavior="scroll" direction="left" scrollamount="25"><img src="https://rukminim1.flixcart.com/flap/1400/1400/image/1b0925.jpg?q=50" width="94" height="88" alt="Swimming fish" /></marquee>
<marquee behavior="scroll" direction="left" scrollamount="1"><img src="https://www.dhresource.com/260x260s/f2-albu-g6-M00-F5-1F-rBVaR1rK9HKATwLCAAU1vFOFApw586.jpg/geekthink-hollow-quartz-watch-women-luxury.jpg" /></marquee>
<marquee behavior="scroll" direction="left" scrollamount="50"><img src="https://i.etsystatic.com/18507923/c/2068/1643/443/312/il/0ce8c6/1640669772/il_340x270.1640669772_i0lv.jpg" /></marquee>
<marquee behavior="scroll" direction="left" scrollamount="15"><img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8833/k2-_5c567ef3-2243-41f4-b15d-9bb43e393f41.v1.jpg?odnWidth=672&odnHeight=672&odnBg=ffffff"" width="94" height="88" alt="Swimming fish" /></marquee>

*/