var express = require('express');
var router = express.Router();
var Student = require('../Models/student');
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


router.post('/tutor/try2', function (req, res) {

    Tutor2.update({
        _id: req.body._id
    }, {
        $set: {
            profile_length: req.body.profile.length,
        }
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })







})

router.post('/stat', function (req, res, next) {
    var newStat = new Stat(req.body);
    console.log(req.body);
    console.log(newStat);

    console.log('ss');

    newStat.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});





router.patch('/student/update', function (req, res) {
    console.log(req.body);

    Student.findOne({
        _id: req.body._id
    }).update(req.body).then((users) => {
        res.send(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.patch('/update2', function (req, res) {
    Student.findOne({
        _id: req.body._id
    }).update(req.body).then(() => {
        Student.findOne({
            _id: req.body._id
        }).then((users) => {
            res.send(users)
        }).catch((err) => {
            res.send(err)
        })

    })

})

router.patch('/update', function (req, res) {
    Student.findOne({
        name: req.body.name
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

// router.get('/tutor/all', function (req, res) {
//     Tutor2.find({}).sort({
//         createdAt: 'descending'
//     }).exec(function (err, posts) {

//         res.json(posts)
//     })
// })


// Post.find({})
//     .sort({'data.start_date.year': 1,
//            'data.start_date.month': 1,
//            'data.start_date.day': 1,
//            'data.start_date.hour': 1,
//            'data.start_date.minute': 1
//           })
//      .exec(function(err, result){
// });








router.post('/student/profile', function (req, res) {
    Student.findOne({
        name: req.body.name
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})



module.exports = router;
