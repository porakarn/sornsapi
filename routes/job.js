var express = require('express');
var router = express.Router();
var Agent = require('../Models/agent');
var Job2 = require('../Models/job2');


/* GET home page. */

// job populate creator

  

router.post('/multi', function (req, res) {   

    if (req.body.subject.length == 0) {
      Job2.find({day: req.body.day
      }).then((posts) => {
          console.log(posts)
          res.json(posts)
      }).catch((err) => {
          res.send(err)
      })
    } else if (req.body.day.length == 0) {
     Job2.find({subject: req.body.subject}).then((posts)=> {
        console.log(posts)
        res.json(posts)
  }).catch((err) => {
        res.send(err)
    })
    } else {
        Job2.find({ $and: [{ subject: req.body.subject }, { day: req.body.day }] }).then((posts) => {
        res.json(posts)
        console.log(posts);
        
    }).catch((err) => {
        res.send(err)
    })
    }   


})


router.post('/multi3', function (req, res) {

    if (req.body.subject.length == 0) {
        console.log(req.body.day);
        
        Job2.find({ day: { $in: req.body.day } }).then((posts) => {
            console.log(posts)
            res.json(posts)
        }).catch((err) => {
            res.send(err)
        })
    } else if (req.body.day.length == 0) {
        Job2.find({ subject: { $in: req.body.subject } }).then((posts) => {
            console.log(posts)
            res.json(posts)
        }).catch((err) => {
            res.send(err)
        })
    } else {
        Job2.find({
            $and: [{
               subject: { $in: req.body.subject }
            }, {
               day: { $in: req.body.day }
            }]
        }).then((posts) => {
            res.json(posts)
            console.log(posts);

        }).catch((err) => {
            res.send(err)
        })
    }


})


router.post('/multi2', function(req,res){
console.log(req.body.subject);

    Job2.find({subject: req.body.subject}).then((res)=> {
 console.log(res)
 res.json(res)
    }).catch((err) => {
        res.send(err)
    })

})



router.post('/job/create', function (req, res, next) {
    var newJob = new Job2(req.body);
    console.log(req.body);
        console.log(newJob);

        console.log('ss');

    newJob.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});

router.post('/job/create2', function (req, res, next) {
    var newJob = new Job2({ job: "journal", subject: "Thai", subjectss: ["blank", "red"] })

    newJob.save().then((newTest) => {
        res.json(newTest)

    }).catch((err) => {
        res.send(err)
    })

});


router.post('/job/nested', function (req, res) {

const por = new Job2({ 
    job: 'ddddjjjdd',
    subjects :[{ subject: 'Thai'},{ subject: 'Thai6'}] 
})

por.save().then((user) => {
        res.json(user)
    }).catch((err) => {
        res.send(err)
    })
});

router.post('/job/nested2', function (req, res) {

Job2.findOne({ 
    job: 'dddddd',
}).then((user)=> { 
    user.subjects.push({subject: 'Thai2'})
   return  user.save()
}).then((user) => {
        res.json(user)
    }).catch((err) => {
        res.send(err)
    })
});



router.post('/job/suggest', function (req, res) {
    console.log(req.body);
    
    Job2.find({ subject: { $in: req.body.tag } }).sort({
            createdAt : 'descending'
        }).exec(function (err, posts) {
                  
        res.json(posts)
    })
})
// ยังไม่เสร็จ


router.post('/agent/checkstatus', function (req, res) {
    Job2.find({_creator: req.body._creator, status: req.body.status}).then((posts) => {
        res.json(posts)
        console.log(posts);
        
    }).catch((err) => {
        res.send(err)
    })
})

//

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

router.post('/job/try', function (req, res) {
Job2.updateMany({
        }, {
    $set: {
        "lastname": "alier",
    }
}).then((users) => {
    res.json(users)
}).catch((err) => {
    res.send(err)
})

})

// router.post('/job/try2', function (req, res) {
   
//    Job2.update({job : req.body.job}, {  $set: {
//         job_length:  req.body.job.length,
//     }}).then((users) => {
//     res.json(users)
// }).catch((err) => {
//     res.send(err)
// })

// // Job2.find(function (err, devices) {
// //     devices.forEach(function (device) {
// //         console.log(device._id);
// //                 console.log(device.job);
// //                 console.log(device);
                
// //         console.log(device.job.length);
// //         Job2.update({}, {  $set: {
// //         job_length: 54,
// //     }})
// //     })
// // })

// })







router.get('/job/all', function (req, res) {
    Job2.find({}).sort({
            createdAt : 'descending'
        }).exec(function (err, posts) {
                  
        res.json(posts)
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

router.post('/job/studentown', function (req, res) {

    Job2.find({
        _creator: req.body.tutorid
    }).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})


router.post('/job/agentown', function (req, res) {
    
    Job2.find({_creator: req.body._creator}).then((posts) => {
        res.json(posts)
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router;
