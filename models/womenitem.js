var mongoose=require('mongoose');

var WomenSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:String,
});
var Women=module.exports=mongoose.model('Women',WomenSchema);
/*
Women.create({
    name:"Womens Round Neck Solid T-Shirt",
    image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/5FE6FE05FD8E4E5E9B9CF43EECDCDF01/203864966_8278_5FE6FE05FD8E4E5E9B9CF43EECDCDF01.jpg',
    price:'₹799',
});
*/
