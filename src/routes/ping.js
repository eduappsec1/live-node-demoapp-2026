const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
router.get('/ping', (req, res) => {
  exec(`ping -c 1 ${req.query.host}`, (err, stdout) => {
    if (err) return res.status(500).send('erro');
    res.send(stdout);
  });
});
module.exports = router;
