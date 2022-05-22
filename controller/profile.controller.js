const express = require('express');
const router = express.Router();
const Profile = require('../model/Profile.model')

router.get('/', (req, res) => {
    Profile.playerProfile(res)
})

router.post('/update', (req,res) => {
    const data = {
        "id": req.body.id,
        "profile_image": req.body.profile_image,
        "nickname": req.body.nickname,
        "description": req.body.description
    }
    Profile.updateProfileById(data,res)
})

module.exports = router