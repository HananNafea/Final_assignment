app.use("/customer/auth/*", function auth(req,res,next){
    if(req.session.authorization) {
        token = req.session.authorization['accessToken'];
        jwt.verify(token, "access",(err,user)=>{
            if(!err){
                req.user = user;
                next();
            }
            else{
                return res.status(403).json({message: "User not authenticated"})
            }
         });
     } else {
         return res.status(403).json({message: "User not logged in"})
     }
 });

// Get the book list available in the shop
public_users.get('/',function (req, res) {
        res.send(JSON.stringify(books,null,4));
     return res.status(300).json({message: "Yet to be implemented"});
});
