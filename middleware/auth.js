const All=(req,res,next)=>{
    console.log("applicable to all routes");
    next()
}

const specific=(req,res,next)=>{
    console.log("applicable to specific routes");
    next()
}

module.exports={All,specific}