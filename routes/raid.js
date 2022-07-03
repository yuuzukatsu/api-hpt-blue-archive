// import required essentials
const e = require('express');
const express = require('express');

// create new router
const router = express.Router();

//import database
var connection = require('../database');

//READ
router.get('/', function (req, res) {
    //res.status(200).json(data);
    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            res.send('Raid API for https://hpt-blue-archive.netlify.app/ <br> If you see this, you need the correct API KEY');
        }else{
            if(rows.length>0){
                //BEGIN READ
                connection.query('SELECT * FROM raid', (err, rows, field) => {
                    if (err){
                        return res.status(500).json({ message: 'Error', error: err });
                    }else{
                        if(rows.length>0){
                            res.status(200).json(rows);
                        }else{
                            res.status(200).json({ message: 'Empty'})
                        }
                    }
                })
            }else{
                res.status(200).json({ "code": "2", "message":"Wrong Key"})
            }
        }
    })
});

//READ SPECIFIC ID
router.get('/:id', function (req, res) {
    //res.status(200).json(data);
    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            res.send('Raid API for https://hpt-blue-archive.netlify.app/ <br> If you see this, you need the correct API KEY');
        }else{
            if(rows.length>0){
                //BEGIN READ
                connection.query('SELECT * FROM raid where id = ?',req.params.id, (err, rows, field) => {
                    if (err){
                        return res.status(500).json({ message: 'Error', error: err });
                    }else{
                        if(rows.length>0){
                            res.status(200).json(rows);
                        }else{
                            res.status(200).json({ message: 'Empty'})
                        }
                    }
                })
            }else{
                res.status(200).json({ "code": "2", "message":"Wrong Key"})
            }
        }
    })
});


//INSERT NEW RAID LOG
router.post('/', function (req,res){
    
    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            return res.status(500).json({ "code": "1", error:err });
        }else{
            if(rows.length>0){
                /* JSON BODY FORMAT
                {
                    "raid_boss": "",
                    "rank": "",
                    "point": "",
                    "lineup": "",
                    "member": ""
                }
                BEGIN INSERT*/

                connection.query('INSERT INTO raid SET ?', {...req.body}, (err, rows, field) => {
                    if(err){
                        return res.status(500).json({ "code": "1", error:err });
                    }else{
                        res.status(201).json({ "code":"0", message: 'OK' });
                    }
                })

            }else{
                //return key not found (code 2)
                res.status(200).json({ "code": "2", "message":"Wrong Key"})
            }
        }
    })
});

//UPDATE RAID LOG
router.patch('/', function (req,res){
    
    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            return res.status(500).json({ "code": "1", error:err });
        }else{
            if(rows.length>0){
                /* JSON BODY FORMAT
                {
                    "raid_boss": "",
                    "rank": "",
                    "point": "",
                    "lineup": ""
                }
                BEGIN UPDATE*/
                connection.query('UPDATE raid SET ? WHERE id = ?', [{...req.body}, req.body.id], (err, rows, field) => {
                    if (err){
                        return res.status(500).json({ "code": "1", error:err });
                    }else{
                        res.status(200).json({ "code": "0", "message":"OK"})
                    }
                });
            }else{
                //return key not found (code 2)
                res.status(200).json({ "code": "2", "message":"Wrong Key"})
            }
        }
    })
});

//DELETE RAID LOG
router.delete('/', function (req,res){
    
    //CHECK API KEY
    connection.query('SELECT * FROM authkey WHERE authkey = ?', req.headers.key, (err, rows, field) => {
        if (err){
            return res.status(500).json({ "code": "1", error:err });
        }else{
            if(rows.length>0){ 
                /* JSON BODY FORMAT
                {
                    "id" : ""
                }
                BEGIN DELETE*/
                connection.query('DELETE FROM raid WHERE id = ?', req.body.id, (err, rows, field) => {
                    if (err){
                        return res.status(500).json({ "code": "1", error:err });
                    }else{
                        res.status(200).json({ "code": "0", "message":"OK"})
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