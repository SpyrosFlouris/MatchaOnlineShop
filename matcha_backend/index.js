const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const bulkInsert = require('./scripts/bulkInsert')

app.use(express.json())
app.use(cors())

//Routers
const usersRouter = require('./routes/Users')
app.use("/users", usersRouter)

const productsRouter = require('./routes/Products')
app.use("/products", productsRouter)

const loginRouter = require('./routes/Login')
app.use("/login", loginRouter)

const cartRouter = require('./routes/Cart')
app.use("/cart", cartRouter)

db.sequelize.sync().then(() => {

    bulkInsert()

    app.listen(3001, () => {
        console.log("server running")
    })

})
