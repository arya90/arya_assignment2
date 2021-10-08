const express =require('express');
const booksRouter= express.Router();
function router(nav){
    var books = [{
        title:'Tom and Jerry',
        author:'Joseph Barbera',
        genre:'Cartoon',
        img:'download.png'
    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fantasy',
        img:'harry.jpg'
    },
    {
            title:'Wings of Fire',
            author:'APJ Abdul Kalam',
            genre:'Autobiography',
            img:'kalam.jpeg' 
     },
     {
        title:'Dollar Bahu',
        author:'Sudha Murthy',
        genre:'Fiction',
        img:'dollar.jpg' 
    }]
    booksRouter.get('/',function(req,res){
        res.render("books",{
         nav,
         title:'Library',
         books
     
         });
     });
    booksRouter.get('/:id',function(req,res){
       const id = req.params.id
        res.render('book',{
            nav,
        title:'Library',
        book:books[id]
    
        });
  
    });
 return booksRouter;
}

module.exports =router;