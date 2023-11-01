const router = require("express").Router();
const user = require("../models/user");

//REGISTER
router.post("/register", async (req, res) ={
try {
                }, catch (err) {
        res.status(500).json(err)
    }
})
//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username});
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
