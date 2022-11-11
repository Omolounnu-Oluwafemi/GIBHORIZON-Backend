import {db} from "../db.js"

export const signup = (req, res)=>{

    //CHECKING EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR firstname = ?"

    db.query(q,[req.body.email, req.body.name, req.body.name, req.body.phone], (err, data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!");

        //create a User

        const q = "INSERT INTO users(firstname, lastname, email, phone, password) VALUES (?)"
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.email,
            req.body.phone,
            "GIB" + Math.random().toString(36).slice(2)
        ]

        db.query(q, [values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created")
        })
    }) 
}