var mongoose=require('mongoose');

var MenSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:String,
});
var Men=module.exports=mongoose.model('Men',MenSchema);
/*
Men.create({
    name:"Veirdo Men's Cotton Regular Fit Hooded Cardigan",
    image:'https://images-na.ssl-images-amazon.com/images/I/71ll7%2BUmFLL._UX425_.jpg',
    price:'₹837',
});
*/
