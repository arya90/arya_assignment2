const express =require('express');
const authorRouter= express.Router();
function router(nav){
    var authors = [{ 
        author:'Joseph Barbera',
        img:'joseph.jpg'
    },
    { 
        author:'J K Rowling', 
        img:'rk.jfif'
    },
    {
        author:'APJ Abdul Kalam',
         img:'abdul.jpg' 
     },
     {
        author:'Sudha Murthy',
         img:'sudha.jpg' 
     }
    ]
    
    authorRouter.get('/',function(req,res){
        res.render('authors',{
       nav,
        title:'Library',
        authors
     
    });
    });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
         res.render('author',{
         nav,
         title:'Library',
         author:authors[id]
     
         });
     });
     return authorRouter;
}





module.exports = router;