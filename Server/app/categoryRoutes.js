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
       //res.render('category.ejs',{category:cat});
       res.statusCode=200;
       res.setHeader('Content-Type','application/json');
       res.json(cat);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    console.log(req.body);
    Category.create(req.body)
    .then((cat) => {
        console.log('Category Created ', cat); 
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(cat);        
    }, (err) =>{ console.log(err);
        next(err)})
    .catch((err) => next(err));
})


 router.route('/:catId')
 .get((req,res,next)=>{
     Category.findById(req.params.catId)
     .then((cat)=>{
         console.log(cat);
         res.statusCode=200;
         res.setHeader('Content-Type','application/json');
         res.json(cat);  
     }, (err) =>{
          error = new Error('Category ' + req.params.catId + ' not found');
          error.status = 404;
          return next(error);
    })
    .catch((err) => next(err));
})
.put((req,res,next)=>{
    Category.findByIdAndUpdate(req.params.catId,
        {$set:req.body},{new:true})
    .then((cat)=>{
        console.log(cat);
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(cat);  
    }, (err) =>{
         error = new Error('Category ' + req.params.catId + ' not found');
         error.status = 404;
         return next(error);
   })
   .catch((err) => next(err));
})
.delete((req,res,next)=>{
    Category.findByIdAndRemove(req.params.catId)
    .exec()
    .then(resp=>{
                    console.log(resp);
                    res.statusCode=200;
                    res.setHeader('Content-Type','application/json');
                    res.json(resp);
                    }
        ,(err)=>{
            err = new Error('Category ' + req.params.catId + ' not found');
            err.status = 404;
            return next(err);
            })
    .catch((err)=>next(err));
});

module.exports=router;


