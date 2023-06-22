const {register,login,aboutus,contactus} = require("../controller/user");
const userRoute = require("express").Router();
const {All, specific}=require('../middleware/auth');

userRoute.use(All);

userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/aboutus',specific,aboutus)
userRoute.get('/contactus',specific,contactus)

module.exports = userRoute;