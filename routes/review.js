var express = require('express');
var router = express.Router();
var Review = require('../Models/review');
var Tutor2 = require('../Models/tutor2');

/* GET home page. */


router.post('/review', function (req, res, next) {
    
    var newreview = new Review(req.body);
   


// we need to find tutor to refer to which tutor 
Tutor2.findOne(name: req.body.name).then((res1) => {
res1.reviewscore.push(req.body.rating)    
res1._review.push(newreview)
 res1.save()
 newreview.save()
}).then((newTest) =>{
    res.json(newTest)

  }).catch((err) => {
      res.send(err)
  })

// }).then((newTest) => {
//       res.json(newTest)
//     }).catch((err) => {
//         res.send(err)
//     })

    //  res.Review.push(newreview)
    //  newreview.save()
    //  res.save()
    
    // .then((newTest) => {
    //     res.json(newTest)

    // }).catch((err) => {
    //     res.send(err)
    // })

});

router.patch('/update', function (req, res) {
    Agent.findOne({
        name: req.body.name
    }).update(req.body).then((users) => {
        res.json(users)
    }).catch((err) => {
        res.send(err)
    })

})





module.exports = router;
