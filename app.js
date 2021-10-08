const express =require('express');
const app =express();
const port = process.env.PORT || 2000;
const nav=[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors' },
    {link:'/register',name:'Sign UP'},
    {link:'/login',name:'Login'},
    {link:'/admin',name:'ADD BOOK'}
    
];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const formRouter = require('./src/routes/formRoutes')(nav);
const userRouter = require('./src/routes/userRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','C:/Users/hp/OneDrive/Documents/aryaslib/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/register',formRouter);
app.use('/admin',adminRouter);
app.use('/login',userRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library'
        });
});

app.listen(port,()=>{console.log("Server is ready at"+port)});