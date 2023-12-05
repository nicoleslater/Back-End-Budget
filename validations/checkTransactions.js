const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("Name is okay")
        next()
    } else {
        res.status(400).json({error: "Name is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    if (req.body.is_priority === true || req.body.is_priority === false){
        next()
    } else {
        res.status(400).json({error: "is_priority must be a boolean value"})
    }
}

module.exports = {
    checkName, 
    checkBoolean
}