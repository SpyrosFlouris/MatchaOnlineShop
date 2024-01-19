const express = require('express')
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
      const user = await Users.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router