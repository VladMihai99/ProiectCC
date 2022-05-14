const express = require('express')
const router = express.Router()

//Login page
//GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

//Dashboard
//GET /dashboards
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router