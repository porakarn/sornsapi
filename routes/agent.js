var express = require('express');
var router = express.Router();
var Agent = require('../Models/agent');
var Job2 = require('../Models/job2');

/* GET home page. */
router.get('/c', function(req, res, next) {
  res.send('hi');
});

router.post('/create', function (req, res, next) {
 var newAgent = new Agent(req.body);

 newAgent.save().then((newTest) => {
     res.json(newTest)

 }).catch((err) => {
     res.send(err)
 })

});



router.get('/findagent2', function (req, res) {
    Agent.find().then((users) => {
        res.json('dddd')
    }).catch((err) => {
        res.send(err)
    })

})


router.post('/findagent', function (req, res) {
    Agent.findOne({_id: req.body.agentid}).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.post('/findagentjob', function (req, res) {
    Job2.find({_id: req.body.agentid}).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})


router.patch('/update', function (req, res) {
    console.log(req.body);
    
    Agent.findOne({
        name: req.body.name
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})





module.exports = router;
