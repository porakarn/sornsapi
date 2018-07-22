var express = require('express');
var router = express.Router();
var Sheet = require('../Models/sheet');
// var Tutor2 = require('../Models/tutor2');

/* GET home page. */

router.get('/sheet/all', function (req, res) {
    Sheet.find({}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})

router.post('/sheet/seedetails', function (req, res) {
    console.log(req.body._id);
    
    Sheet.findOne({_id:req.body._id}).then((posts) => {
        res.json(posts)
        console.log(posts);
        
    }).catch((err) => {
        res.send(err)
    })
})


router.post('/sheet/create', function (req, res, next) {
    var newSheet = new Sheet(req.body);
    console.log(req.body);
    console.log(newSheet);

    console.log('ss');

    newSheet.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});

router.post('/sheet/tutorown', function (req, res) {

    Sheet.find({
        tutorid: req.body.tutorid
    }).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})


router.patch('/sheet/update', function (req, res) {
    Sheet.findOne({
        _id: req.body._id
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.post('/sheet/delete', function (req, res) {

    Sheet.remove({
        _id: req.body._id
    }).then(() => {
        res.json('succeed')
    }).catch((err) => {
        res.send(err)
    })
});



module.exports = router;
