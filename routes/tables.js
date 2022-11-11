import express from "express"
import { recent } from "../controllers/tables.js"
import { message } from "../controllers/tables.js"
import { projects } from "../controllers/tables.js"

const router = express.Router();

router.get("/recent", recent);
router.get("/message", message);
router.get("/project", projects);
  
export default router  