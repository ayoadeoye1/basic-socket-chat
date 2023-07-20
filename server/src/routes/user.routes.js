// import express from 'express';
// import Users from '../models/user.model.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = express.Router();


// router.post('/sign-up', async(req, res) =>{
//     const { username, email, password } = req.body;
    

    
//     // console.log(username, email, password)
//     try {
//         if(!username || !email || !password){
//             res.status(400).json('all input fields are required');
//         }

//         const user = await Users.findOne({username: username})
//         console.log(user || 'no user')
//         if(user.username){
//             res.status(400).json('user with username already exist');           
//         }
//         // else if(user.email){
//         //     res.status(400).json('user with email already exist');           
//         // }else{
//             const hashedPass = await bcrypt.hash(password, 20);

//             const newUser = new Users({
//                 username: username,
//                 email: email,
//                 password: hashedPass
//             })

//             const saved = await newUser.save();
//             console.log(saved);
//             res.status(201).json('Your registration is successful!');
//         // } 
//     } catch (error) {
//         res.status(400).json({error: error.message}) 
//         console.log(error.message)
//     }
// })

// // sign ............ in

// const JWT_SECRET = process.env.JWT_SECRET

// router.post('/sign-in', async(req, res) =>{
//     const { username, password } = req.body;

//     if(!username || !password){
//         res.status(400).json('all input fields are required');
//     }

//     try {
//         const user = await Users.findOne({username: username})

//         if(!username){
//             res.status(400).json('user with username does not exist');           
//         }

//         const confirmPass = await bcrypt.compare(password, user.password);

//         if(!confirmPass){
//             res.status(400).json('invalid password');
//         }

//         const token = await jwt.sign({_id: user._id}, JWT_SECRET, { expiresin: '12h' })
//         console.log(token);
//         res.status(201).json({token: token});
//     } catch (error) {
//         res.status(400).json(`exception occured: ${error}`);      
//     }
// })


// export default router;