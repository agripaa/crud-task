const express = require('express')
const router = express.Router();
const Profile = require('../model/Profile.model')

router.get('/', (req, res) => {
    Profile.playerProfile(res)
})

router.post('/update', (req,res) => {
    const data = {
        "id": req.body.id,
        "nama": req.body.name,
        "role-fav": req.body.role-fav,
        "description": req.body.description
    }
    Profile.updateProfileById(data,res)
})

module.exports = router