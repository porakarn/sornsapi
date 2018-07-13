  
  
  
  
  
  
  router.post('/multi', function (req, res) {    


const buildQuery = (req.body) => {
    const query = {};

    // req.body.subject = criteria.subject
    if (req.body.subject) {
        query.subject = req.body.subject

    }

    if (req.body.day) {
        query.day = req.body.day

    }

    return query;
};



Job2.find(buildQuery(req.body)).then((newTest) => {
      res.json(newTest)

  }).catch((err) => {
      res.send(err)
  })

    } )
  



router.post('/multi', function (req, res) {   

    var contWithRegCallback = function (err, user) {
        console.log(user);
        res.json(user)
    }

    if (req.body.subject.length == 0) {
        Job2.find({ day: req.body.day }, contWithRegCallback);
    } else if (req.body.day.length == 0) {
        Job2.find({ email: req.body.subject }, contWithRegCallback);
    } else {
        Job2.find({ $and: [{ subject: req.body.subject }, { day: req.body.day }] }, contWithRegCallback);
    }   







    