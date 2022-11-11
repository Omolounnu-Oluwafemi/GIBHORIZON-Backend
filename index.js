import express from "express"
import authRoutes from "./routes/auth.js"
import tableRoutes from "./routes/tables.js"

const app = express()   

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/tables", tableRoutes);

app.listen(8800, ()=>{
console.log ("connected!")
})