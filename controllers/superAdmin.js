import {db} from "../db.js"


export const createToken = (req, res)=>{

    //CHECKING EXISTING USER    
    const q = "SELECT * FROM users WHERE email = ?";

    db.query(q, [req.body.email], (err, data)=>{

        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User already exists!");

         // Create the token 
    const token = ("GIB" + Math.random().toString(36).slice(2));

        const p = "INSERT INTO users(firstname, lastname, email, phone, token) VALUES (?)";

        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.phone,
            token
        ];

        db.query(p, [values], (err,data)=>{
            if (err) return res.status(500).json(err);
            return res.status(200).json("Token has been created")
        });
    });
   
}
