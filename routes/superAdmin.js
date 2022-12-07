import express from "express"
import { createToken } from "../controllers/superAdmin.js"

const router = express.Router()

router.post("/createToken", createToken)

export default router