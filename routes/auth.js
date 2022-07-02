// import required essentials
const express = require('express');

// create new router
const router = express.Router();

//import database
var connection = require('../database');



router.get('/', function (req, res) {
    res.send('Auth API for https://hpt-blue-archive.netlify.app/');
});

//search username
router.get('/login/:id', function (req, res) {
    connection.query('SELECT * FROM login WHERE id = ?', req.params.id, (err, rows, field) => {
        if (err){
            return res.status(500).json({ message: 'Error', error: err });
        }else{
            if(rows.length>0){
                res.status(200).json(rows);
            }else{
                res.status(200).json({ message: 'Not Found'})
            }
        }
    })
});


// CHECK LOGIN CREDENTIAL
router.post('/login', function (req, res, next) {

    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            return res.status(500).json({ "code": "1", error:err });
        }else{
            if(rows.length>0){
                
                //Authenticate User/Check User
                connection.query('SELECT * FROM login WHERE username = ?', req.body.username, (err, rows, field) => {
                    if (err){
                        return res.status(500).json({ "code": "1", error:err });
                    }else{
                        if(rows.length>0){
                            
                            //Check Password
                            if(rows[0].password==req.body.password){
                                return res.status(200).json({ "code": "0", "message":"OK", "name": rows[0].name }); //User Authenticated !
                            }else{
                                //return wrong password(code 4)
                                //return res.send(rows.password)
                                return res.status(200).json({ "code": "4", "message":"Wrong Password" });
                            }

                        }else{
                            //return user not found (code 3)
                            return res.status(200).json({ "code": "3", "message":"User not Found" });
                        }
                    }
                });
            }else{
                //return key not found (code 2)
                res.status(200).json({ "code": "2", "message":"Wrong Key"})
            }
        }
    })
});

module.exports = router;