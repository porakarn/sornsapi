var express = require('express');
var router = express.Router();
var Agent = require('../Models/agent');
var Tutor2 = require('../Models/tutor2');


const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(user, 'secretkey', {
        expiresIn: Math.floor(new Date().getTime() / 1000) + (7 * 24 * 60 * 60)
    })
}


router.post('/signup', function (req, res, next) {

    const agent = new Agent({
        username: req.body.username,
    
    });

     Agent.findOne({
        username: req.body.username
    }, (err, existingUser) => {
        if (err) {
            return next(err);
        }
        // Check if email is avaible
        if (existingUser) {
            // Save error message
            // const errors = [];
            // errors.push({
            //     error: 'Email exists'
            // });

            // return res.status(400).send({ errors });
            console.log('login')
            return res.send({
                user: existingUser.toJSON(),
                token: generateToken(existingUser.toJSON())
            });
            // user.update(req.body)
        }
        agent.save((err) => {
            if (err) {
                return next(err);
            }
            // Registred successfully
            return res.send({
                user: agent.toJSON(),
                token: generateToken(agent.toJSON())
            });
        });
    });

})


//FOR TUTOR FB LOGIN

router.post('/tutor/signup', function (req, res, next) {

    const tutor2 = new Tutor2({
        name: req.body.name,
        picture: req.body.picture,
        email: req.body.email

    });

    Tutor2.findOne({
        name: req.body.name
    }, (err, existingUser) => {
        if (err) {
            return next(err);
        }
        // Check if email is avaible
        if (existingUser) {
            // Save error message
            // const errors = [];
            // errors.push({
            //     error: 'Email exists'
            // });

            // return res.status(400).send({ errors });
            console.log('login')
            return res.send({
                user: existingUser.toJSON(),
                token: generateToken(existingUser.toJSON())
            });
            // user.update(req.body)
        }
        tutor2.save((err) => {
            if (err) {
                return next(err);
            }
            // Registred successfully
            return res.send({
                user: tutor2.toJSON(),
                token: generateToken(tutor2.toJSON())
            });
        });
    });

})


module.exports = router
