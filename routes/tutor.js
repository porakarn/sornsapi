var express = require('express');
var router = express.Router();
var Tutor2 = require('../Models/tutor2');

/* GET home page. */
// router.get('/c', function (req, res, next) {
//     res.send('hi');
// });

// router.post('/create', function (req, res, next) {
//     var newAgent = new Agent(req.body);

//     newAgent.save().then((newTest) => {
//         res.json(newTest)

//     }).catch((err) => {
//         res.send(err)
//     })

// });

router.patch('/update', function (req, res) {
    Tutor2.findOne({
        name: req.body.name
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.get('/tutor/all', function (req, res) {
    Tutor2.find({}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})


router.get('/user/profile', function (req, res) {
    Tutor2.findOne({
        name: req.body.name
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})


module.exports = router;
