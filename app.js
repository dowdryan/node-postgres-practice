const express = require("express")
const app = express()
const ExpressError = require('./ExpressError')
const uRoutes = require('./routes/users')

app.use(express.json())
app.use("/users", uRoutes)

app.get('/', (req, res) => {
    return res.send("Welcome to the root path!");
});

app.use(function(req, res, next) {
    throw new ExpressError("Page Not Found.", 404)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    return res.json({
      error: err.message
    })
})

app.listen(3000, function() {
    console.log("Server starting on port 3000!")
})