const express =require('express');
const adminRouter= express.Router();
const { check, validationResult } = require('express-validator')
adminRouter.use(express.urlencoded({extended:false}));
adminRouter.use(express.static('./public'));
function router(nav){
  adminRouter.get('/',function(req,res){
    res.render('addbook',{
      nav
          
     })
  });
  adminRouter.post('/add', 
 [
   check('title', 'title invalid').matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/),
  check('author', 'Author Invalid').matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/),
  check('genre', 'genre inavalid').matches(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/),
  check('cover', 'cover can not be empty').notEmpty(),
],
 (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {    
        const alert = errors.array();
        res.render('addbook', {
            nav,
            alert
        });
    }
    else{
           
               res.send('Book Added');
        
        }
            
    
});

  return adminRouter;
}


module.exports =router; 