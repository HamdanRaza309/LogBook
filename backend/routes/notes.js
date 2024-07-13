const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        Name: 'Notes'
    }
    res.send(obj);
})

module.exports = router;