var express = require('express');
var router = express.Router();
var Tutor2 = require('../Models/tutor2');
var Stat = require('../Models/stat');
var Track = require('../Models/track');

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
   
Tutor2.update({_id : req.body._id}, {  $set: {
            profile_length: req.body.profile.length,
    }}).then((users) => {
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


router.post('/findtutorbyid', function (req, res) {
    Tutor2.findOne({
        _id: req.body.tutorid
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.post('/findtutorbyidpop', function (req, res) {
    Tutor2.findOne({
        _id: req.body.tutorid
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.patch('/update', function (req, res) {
    console.log(req.body);
    
    Tutor2.findOne({
        _id: req.body._id
    }).update(req.body).then((users) => {
        res.send(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.patch('/update2', function (req, res) {
    Tutor2.findOne({
        _id: req.body._id
    }).update(req.body).then(() => {
        Tutor2.findOne({
            _id: req.body._id
        }).then((users)=> {
        res.send(users)
    }).catch((err) => {
        res.send(err)
    })

})

})

router.patch('/update', function (req, res) {
    Tutor2.findOne({
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

router.get('/tutor/all', function (req, res) {
    Tutor2.find({}).sort({
            "reviewscore": -1,
            "profile_length": -1,
        }).exec(function (err, posts) {

        res.json(posts)
    })
})


// Post.find({})
//     .sort({'data.start_date.year': 1,
//            'data.start_date.month': 1,
//            'data.start_date.day': 1,
//            'data.start_date.hour': 1,
//            'data.start_date.minute': 1
//           })
//      .exec(function(err, result){
// });



router.get('/tutor/allsort', function(req, res){
    Tutor2.find().sort({"reviewscore":-1}).limit(40).exec(function (err, posts) {

        res.json(posts)
    })
  
})


router.post('/tutor/filter', function (req, res) {
    Tutor2.find({ tag: { $in: req.body.subject } }).sort({
            "reviewscore": -1,
            "profile_length": -1,
        }).exec(function (err, posts) {

        res.json(posts)
    })
})


router.post('/user/profile', function (req, res) {
    Tutor2.findOne({
        name: req.body.name
    }).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})

router.post('/user/profile2', function (req, res) {
    Tutor2.findById(req.body.tutorid).populate({
            path: '_review',
            populate: {
                path: 'studentid'
                
            
            }
        }).then((users) => {
            console.log(users);
            
        res.json(users)

        
    }).catch((err) => {
        res.send(err)
    })

})


router.post('/user/profile3', function (req, res) {
console.log(req.body.tutorid);

Tutor2.update(
   { _id: req.body.tutorid },
   { $inc: { view: 1 } }
).then((users) => {
    console.log(users);

    res.json(users)


}).catch((err) => {
    res.send(err)
})



})


router.post('/track', function (req, res, next) {
    var newTrack = new Track(req.body);
    console.log(req.body);
    console.log(newTrack);

    console.log('ss');

    newTrack.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});




module.exports = router;
