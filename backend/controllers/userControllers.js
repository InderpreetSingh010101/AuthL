const asyncHandler = require("express-async-handler") ;
const genrateToken = require("../../utils/genrateToken");
const User = require("../models/userModel") ;


const registerUser =  asyncHandler( async(req , res) => {
    const{name , email , password , pic} = req.body ;
    const userExists = await User.findOne({ email }) ;

    if(userExists){
        res.status(400) ;
        throw new Error("User Already Exists") ;
    }

    const user = await User.create({
        name ,
        email ,
        password ,
        pic ,
    })

    if(user){                         // after user is created in db
        res.status(201).json({
            _id:user._id ,
            name:user.name ,
            email:user.eamil ,
            isAdmin : user.isAdmin,
            pic:user.pic ,
            token:genrateToken(user._id)

        });
    }else{  
        res.status(400);
        throw new Error("Error Occured in Controllers in new user");
    }


    

    // res.json({
    //     name ,
    //     email,
    // }) ;
});

const authUser = asyncHandler(async(req,res)=>{
    const{email , password } = req.body ;

    const user = await User.findOne({email}) ;
    if(user && await user.matchPassword(password)){
        res.json({
            _id:user._id ,
        name:user.name ,
        email:user.eamil ,
        isAdmin : user.isAdmin,
        pic:user.pic ,
        token:genrateToken(user._id)
        });
    }else {
        res.status(400) ;
        throw new Error("Invalid Email Or Password") ;
    }
});

module.exports = {registerUser , authUser } ;