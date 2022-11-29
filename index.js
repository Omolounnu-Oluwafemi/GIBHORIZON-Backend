import express from "express"
import authRoutes from "./routes/auth.js"
import tableRoutes from "./routes/tables.js"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";


const app = express(); 

app.use(express.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60 * 60 * 24,
//     },
// }))

// app.get("/login", (req, res)=>{
// if(req.session.user){
//     res.send({loggedIn: true, user: req.session.user})
// }   else{
//     res.send({loggedIn: false})
// }
// });

app.use("/api/auth", authRoutes)
app.use("/api/tables", tableRoutes); 

app.listen(8800, ()=>{
console.log ("connected!")
})