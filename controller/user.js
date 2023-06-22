const register=(req,res)=>{
    res.send({
        msg:"Registered successfully"
    })
}

const login=(req,res)=>{
    res.send({
        msg:"Login successfully"
    })
}

const aboutus=(req,res)=>{
    res.send({
        msg:"Abouts us"
    })
}

const contactus=(req,res)=>{
    res.send({
        msg:"contact us"
    })
}

module.exports ={register,login,aboutus,contactus}