import {db} from "../db.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";


export const signup = (req, res)=>{

    // Create the password 
    const password = ("GIB" + Math.random().toString(36).slice(2));


    //CHECKING EXISTING USER    
    const q = "SELECT * FROM users WHERE email = ?";

    db.query(q, [req.body.email], (err, data)=>{

        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User already exists!");

        const p = "INSERT INTO users(firstname, lastname, email, phone, password) VALUES (?)";

        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.phone,
            password
        ];

        db.query(p, [values], (err,data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created")
        });
    });
   
    //Send password to user's email
// const transporter = createTransport({
//     host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: "oluwafemiomolounnu@gmail.com",
//     pass: "adumsdmnnozmzoal"
//     }
// });

//  const message = {
//     from: "Oluwafemi",
//     to: req.body.email,
//     subject: "Your Password",
//     text: "Your password is " + password
// };

// transporter.sendMail(message, function(err, info) {
//         if (err){
//     console.log(err)
//         } else
//         console.log( "sent:" + info);
// }); 

};




export const login = (req, res)=>{

    //CHECK USER

    const q = "SELECT * FROM users WHERE email = ? AND password = ?"

    db.query(q, [req.body.email, req.body.password], (err, data)=> {
        if(err) return res.json(err)
        if(data.length === 0) 
        return res.status(404).json("User not found!");
 
        //CHECK PASSWORD
        const isPasswordCorrect =
            req.body.password;

            if (isPasswordCorrect) {
                 return res.send('Sign In successfully');
             }
        if (!isPasswordCorrect) 
            return res.status(400).json("Wrong Email or Password!");
      
const token = jwt.sign({id:data[0].id}, "jwtkey");
const {password, ...other}= data[0]

res.cookie("access_token", token, {
httpOnly:true,
})
.status(200)
.json(other);
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };