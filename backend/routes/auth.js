const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        Name: 'Auth'
    }
    res.send(obj);
})

module.exports = router;