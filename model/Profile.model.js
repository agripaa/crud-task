const db = require('../config')

exports.playerProfile = (res) => {
    const sql = `SELECT * FROM profile WHERE id='1'`
    db.query(sql, ((err, rows) => {
        let sampleFile;
        let uploadPath;
        const profile = {
            title: "User Profile",
            data: JSON.parse(JSON.stringify(rows))
        }
        if(!req.files || Object.keys(req.files).length === 0) return res.status(400).send("Tidak ada file yang di upload");
        sampleFile = req.files.sampleFile;
        uploadPath = __dirname + '/upload/' + sampleFile.name;
        console.log(sampleFile);
        sampleFile.mv(uploadPath, (err) => {
            if(err) return res.status(500).send(err);
        });
        if(!err) return res.render('profile', {profile})
        if(err) return console.log('error => ', err);
    }))
}

exports.updateProfileById = (data, res) => {
    const nickname = data.nickname
    const description = data.description
    const sql = `UPDATE profile SET nickname = '${nickname}',description = '${description}' WHERE id = '1'`
    db.query(sql,(err, rows) => {
        if(err) return console.log('error => ', err)
        if(!err) return res.redirect('/profile');    
    });
};
