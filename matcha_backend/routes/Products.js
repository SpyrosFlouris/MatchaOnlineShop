const express = require("express")
const router = express.Router()
const { Products } = require("../models")

router.get("/", async (req, res) => {
    const listOfProducts = await Products.findAll()
    res.json(listOfProducts)
})

module.exports = router