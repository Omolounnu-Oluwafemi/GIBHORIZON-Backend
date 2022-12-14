import express from "express"
import { recent, viewProfile } from "../controllers/tables.js"
import { message } from "../controllers/tables.js"
import { projects } from "../controllers/tables.js"
import { users } from "../controllers/tables.js"

const router = express.Router();

router.get("/recent", recent);
router.get("/message", message);
router.get("/project", projects);   
router.get("/users", users)
router.get("/viewProfile/:id", viewProfile)
  
export default router  