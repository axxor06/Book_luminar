const users = require("../Model/userModel")
const bCrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


//register
exports.registerController = async (req, res) => {

    console.log("Inside registerController");
    const { username, email, password } = req.body

    try {
        //find user in db
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(400).json("User already exist...Please Login")
        }
        else {
            let encryptedPassword = await bCrypt.hash(password, 10)  //saltroutes:number expected
            //creating new user in mongodb
            const newUser = await users.create({
                username, email, password: encryptedPassword
            })
            //status for successfully created
            res.status(201).json(newUser)
        }
    }
    catch (err) {
        res.status(405).json("error")
    }

}


//login
exports.loginController = async (req, res) => {

    console.log("Inside loginController");
    const { email, password } = req.body

    try {
        //find user in db
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            const isPasswordMatch = await bCrypt.compare(password, existingUser.password)
            if (isPasswordMatch) {
                const token = jwt.sign({ userMail: email, role: existingUser.role }, process.env.jwtSecret)
                res.status(200).json({ user: existingUser, token })
            }
            else {
                res.status(409).json("Invalid Password")
            }
        }
        else {
            res.status(409).json("Invalid email")
        }

    }
    catch (err) {
        res.status(405).json("error")
    }

}


//GoogleLoginController
exports.googleLoginController = async (req, res) => {
    console.log("Inside Google Login");
    const { email, username, password, picture } = req.body

    try {
        //find user in db
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            const token = jwt.sign({ userMail: email, role: existingUser.role }, process.env.jwtSecret)
            res.status(200).json({ user: existingUser, token })
        }
        else {

            let encryptedPassword = await bCrypt.hash(password, 10)  //saltroutes:number expected
            //creating new user in mongodb
            const newUser = await users.create({
                username, email, password: encryptedPassword,profilePic:picture
            })

            const token = jwt.sign({ userMail: email, role: existingUser.role }, process.env.jwtSecret)
            res.status(200).json({ newUser,token })
        }
    }
    catch(err) {
        res.status(405).json("error")
    }

}