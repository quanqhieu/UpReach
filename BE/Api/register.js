exports.register = async function(req, res) {
    try {  
        const hashedPassword = await bycrypt.hash(req.body.password,10)
        users.push({
            id : uuidv4(),
            email : req.body.email,
            password: hashedPassword,
        })
        console.log(users);
        res.redirect("/login"); 
    } catch (err) {  
        console.log(e)
        res.redirect('/register');
    } 
};