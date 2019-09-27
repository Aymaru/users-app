const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/users',(req, res) => {
    User.find({},(err, users) => {
        res.json(users)
    });
});

router.post('/users',(req, res) => {
    delete req.body._id;
    User.create(req.body, (err,user) => {
        if (err) {
            res.json(err)
        } 
        else {
            res.json(user)
        }  
    })

});

router.put('/users/:id',(req, res) => {
    delete req.body._id;
    User.update({_id: req.params.id}, req.body, (err, user) => {
        if (err) {
            res.json(err)
        } 
        else {
            res.json(user)
        }
    });

});

router.delete('/users/:id',(req, res) => {
    User.deleteOne({_id: req.params.id}, (err, user) => {
        if (err) {
            res.json(err)
        } 
        else {
            res.json(user)
        }
    });
});

module.exports = router;