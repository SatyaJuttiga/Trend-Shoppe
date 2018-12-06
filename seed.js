var mongoose=require('mongoose');
var Item=require('./models/item');
var Comment=require('./models/comment');


var data=[
    {
        name:'Mens Buttondown Collar Check Shirt',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/EC84BAA8E19A46E2A04D62B35C27F0F9/204448945_9212_EC84BAA8E19A46E2A04D62B35C27F0F9.jpg',
        price:'₹1799'
    },
    {
        name:'Women Printed Boxy Dress',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/A9670E20FA704974B75C509F03534B99/203287265_9303_A9670E20FA704974B75C509F03534B99.jpg',
        price:'₹1,580'
    },
    {
        name:'Mens Band Collar Solid Bikers Jacket',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/0AE09C1AE24A41A0B49223149B60EFB5/204568190_9212_0AE09C1AE24A41A0B49223149B60EFB5.jpg',
        price:'₹4999'
    },
    {
        name:' Cotton Kurti',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/C3369CCE702B4C46A5F6E602DD2770DD/203737851_9463_C3369CCE702B4C46A5F6E602DD2770DD.jpg',
        price:'₹1,500'
    },
    {
        name:' Mens Regular Fit Solid Polo T-Shirt',
        image:'https://sslimages.shoppersstop.com/sys-master/images/h50/h58/10044267036702/202462564_9212.jpg_1088Wx1632H',
        price:'₹1999'
    },
    {
        name:'Womens Round Neck Check Midi Dress',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/F3F36ECE9918405BBE531625FDBABEF6/203680422_9102_F3F36ECE9918405BBE531625FDBABEF6.jpg',
        price:'₹1749'
    },
    {
        name:'Womens Embroidered Front Slit Tunic',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/0869D3BC79EB43A9894EC11A562F2A44/202887098_9212_0869D3BC79EB43A9894EC11A562F2A44.jpg',
        price:'₹1,110'
    },
    {
        name:'Womens Checked Casual Shirt',
        image:'https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/DB92C733A82B4578813C769985E129AE/203971659_9100_DB92C733A82B4578813C769985E129AE.jpg',
        price:'₹999'
    }                                             
]


function seedDB(){
    Item.remove({},function(err){
        if(err){
            console.log(err);
        }
        //console.log('removed items!!');
        data.forEach(function(seed){
            Item.create(seed,function(err,item){
              if(err){
                  console.log(err)
              }else{
                  //console.log('added a item');
                  //create a comment
                  Comment.create(
                      {
                      text:'Nice color!!!!!!',
                      author:'satya'
                  },function(err,comment){
                      if(err){
                          console.log(err);
                      }else{
                        item.comments.push(comment);
                        item.save();
                          //console.log('created new comment');
                      }
                  });
              }
          });
      });          
    });
}
    

module.exports=seedDB;