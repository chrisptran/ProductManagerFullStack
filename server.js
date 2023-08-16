//1. import dependencies
const express = require("express")
const app = express()
const cors = require("cors")

//2. config
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}))

require("./config/mongoose.config")

//3. routes (routes --> controllers --> models)
const Routes = require("./routes/product_manager.routes")
Routes(app)


//4. listen to port
app.listen(8000, () => console.log("listening to port 8000"))