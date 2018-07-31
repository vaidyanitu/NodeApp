const mongoose=require('mongoose');
mongoose.Promise=require('blueBird');
const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');

const Category=require('./models/category');
var user={};

router.use(bodyParser.json());
router.route('/')
.get((req,res,next)=>{
    Category.find()
    .then((cat)=>{
        console.log(cat);
       res.render('category.ejs',{category:cat});
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    console.log(req.body);
    Category.create(req.body)
    .then((promo) => {
        console.log('Category Created ', promo); 
        res.redirect('/category');
    }, (err) =>{ console.log(err);
        next(err)})
    .catch((err) => next(err));
})


router.route('/delete/:catId')
.get((req,res,next)=>{
    Category.findByIdAndRemove(req.params.catId)
    .exec()
    .then(resp=>{
                    console.log(resp);
                    res.redirect('/category');
                    }
        ,(err)=>next(err))
    .catch((err)=>next(err));
});

module.exports=router;


