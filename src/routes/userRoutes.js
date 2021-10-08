const { render } = require('ejs');
const express =require('express');
const userRouter= express.Router();

const { check, validationResult } = require('express-validator');
userRouter.use(express.urlencoded({extended: true}));
userRouter.use(express.static('./public'));
function router(nav){
    userRouter.get('/',function(req,res){
        res.render('login',{ 
        nav
        
    });
});

userRouter.post('/add', 
 [
    check('email', 'Email inavalid').isEmail(),
    check('pass', 'Password invalid').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/),
],
 (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {    
        const alert = errors.array();
        res.render('login', {
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

return userRouter;
}


module.exports = router;