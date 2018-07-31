var mongoose= require('mongoose');

var SubCategorySchema=new mongoose.Schema({
    categoryId:mongoose.Schema.Types.ObjectId,
    name:String
})
module.exports=mongoose.model('SubCategory', SubCategorySchema)