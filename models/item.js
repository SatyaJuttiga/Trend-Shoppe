var mongoose=require('mongoose');

var ItemSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
});
var Item=module.exports=mongoose.model('Item',ItemSchema);
/*
Item.create({
    name:'Floral Print Ball Gown Dress',
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcCf9-ZtQdKrmoyG4awNykZF9OcGiQHizo8iA4DvaVyr-eh8TgXkQfYEQOeBbhUlhJDNDTQjfzmui42Blnetwy1HNWdel115AOt0C9RP03jwfepstYrjXh&usqp=CAc',
    price:'₹1,500'
});
*/