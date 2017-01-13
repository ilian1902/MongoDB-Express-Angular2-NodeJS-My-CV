let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
const db = mongojs('mongodb://ilian82:limp0000@ds161028.mlab.com:61028/web_cv', ['users']);

// Get all users
router.get('/users', function(req, res, next) {
    db.users.find(function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

// Get single user 
router.get('/user/:id', function(req, res, next) {
    db.users.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

// Save user

router.post('/user', function(req, res, next) {
    let user = req.body;
    if (!user.name || !(user.password + '')) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.users.save(user, function(err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
});

module.exports = router;