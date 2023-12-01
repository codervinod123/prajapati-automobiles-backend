const asyncHandler=(reqestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqestHandler(req,res,next))
        .catch((error)=> next(error)
        )
    }
}

export {asyncHandler};



// The same above function using try catch


// const asyncHandler= (fun) => async (req,res,next) => {
//        try {
//           await fun(req,res,next);
//        } catch (error) {
//           res.status(res.code || 500).json({
//              success:false,
//              message:error.message
//           });
//        }
// }