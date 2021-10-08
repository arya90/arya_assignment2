const express =require('express');
//const {body,validationResult}=require('express-validator');
const { check, validationResult } = require('express-validator');
const formRouter= express.Router();
formRouter.use(express.json());
formRouter.use(express.urlencoded({extended:false}));
formRouter.use(express.static('./public'));

function router(nav){
  formRouter.get('/',function(req,res){
    res.render('register',{
      nav      
  });
});
formRouter.post('/add', 
 [
    check('username','Name Invalid').matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/),
    check('email', 'Email inavalid').isEmail(),
     check('password','Password Must Contain Uppercase,Lowercase,Minimum 8 characters and Special Characters').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/),
    check('password1').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Password and confirm password does not match');
        }
else
{
        return true;
}
    }),
 ],
 (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {    
        const alert = errors.array();
        res.render('register', {
            nav,
            alert
        });
    }
    else{
           
      res.render('index', {
        nav,
    title:'Library'
    });
        
        }
            
    
});
return formRouter;
}




module.exports =router;