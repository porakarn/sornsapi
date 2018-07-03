var express = require('express');
var router = express.Router();
var Agent = require('../Models/agent');

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

router.patch('/update', function (req, res) {
    Agent.findOne({
        username: req.body.username
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})





module.exports = router;
