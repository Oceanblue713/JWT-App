const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    //1. destructure the req.body 

    //2. check if user exist

    //3. Bcrypt the user password

    //4. enter the new user

    //5. generate jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;