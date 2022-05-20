const db = require('../config')

exports.playerProfile = (res) => {
    const sql = `SELECT * FROM profile`
    db.query(sql, ((err, result) => {
        if(err) return console.log('error => ', err);

        const profile = {
            title: "Personal Data",
            data: JSON.parse(JSON.stringify(result))
        }
        
        res.render('profile', {profile})
        res.end()
    }))
}

exports.updateProfileById = (data, res) => {
    const id = data.id
    const nickname = data.nickname
    const roleFav = data.roleFav
    const description = data.description

    const sql = `UPDATE profile SET nickname = '${nickname}', roleFav = '${roleFav}', description = '${description}' WHERE id = '${id}'`
    db.query(sql, (err, result) => {
        if(err) return console.log('error => ', err)

        res.redirect('/profile')
        res.end()
    })
}