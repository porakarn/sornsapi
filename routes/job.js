var express = require('express');
var router = express.Router();
var Agent = require('../Models/agent');
var Job2 = require('../Models/job2');


/* GET home page. */

// job populate creator
router.post('/job/create', function (req, res, next) {
    var newJob = new Job2(req.body);

    newJob.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});

router.get('/job/suggest', function (req, res) {
    Job2.find({subject: 'ENG'}).then((posts) => {
        res.json(posts)
        console.log(posts);
        
    }).catch((err) => {
        res.send(err)
    })
})



router.get('/job/all', function (req, res) {
    Job2.find({}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/job/all2', function (req, res) {
    Job2.find({}).populate({
        path: '_creator'


    }).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})

router.get('/job/tutorown', function (req, res) {
    Job2.find({tutorid: req.body.tutorid}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})



module.exports = router;
