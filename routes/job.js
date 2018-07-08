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

router.post('/job/suggest', function (req, res) {
    Job2.find({subject: req.body.tag}).then((posts) => {
        res.json(posts)
        console.log(posts);
        
    }).catch((err) => {
        res.send(err)
    })
})

router.patch('/job/update', function (req, res) {
    Job2.findOne({
        _id: req.body._id
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.post('/job/delete', function (req, res) {

Job2.remove({ _id: req.body._id }).then(() => {
        res.json('succeed')
    }).catch((err) => {
        res.send(err)
    })
});

 



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

router.post('/job/tutorown', function (req, res) {
    
    Job2.find({tutorid: req.body.tutorid}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})



module.exports = router;
