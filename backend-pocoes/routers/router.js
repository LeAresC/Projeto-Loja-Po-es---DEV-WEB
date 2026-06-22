import ControllerPocoes from "../controllers/controller.js"
import express from "express"

const router = express.Router()

router.get("/pocoes", ControllerPocoes.findAll)
router.post("/pocoes", ControllerPocoes.create)
router.delete("/pocoes/:id", ControllerPocoes.delete)

export default router