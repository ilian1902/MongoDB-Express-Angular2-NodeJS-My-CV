let express = require('express');
let router = express.Router();
let mongojs = require('mongojs');
const db = mongojs('mongodb://ilian82:limp0000@ds161028.mlab.com:61028/web_cv', ['skills']);

// Get all skills
router.get('/skills', function(req, res, next) {
    db.skills.find(function(err, skills) {
        if (err) {
            res.send(err);
        }
        res.json(skills);
    });
});

// Get single skill 
router.get('/skill/:id', function(req, res, next) {
    db.skills.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, skill) {
        if (err) {
            res.send(err);
        }
        res.json(skill);
    });
});

// Save skill

router.post('/skill', function(req, res, next) {
    let skill = req.body;
    if (!skill.title || !(skill.rate + '')) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.skills.save(skill, function(err, skill) {
            if (err) {
                res.send(err);
            }
            res.json(skill);
        });
    }
});

// Delete skill
router.delete('/skill/:id', function(req, res, next) {
    db.skills.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, skill) {
        if (err) {
            res.send(err);
        }
        res.json(skill);
    });
});

// Update skill
router.put('/skill/:id', function(req, res, next) {
    let skill = req.body;
    let updateSkill = {};

    if (skill.title) {
        updateSkill.title = skill.title;
    }
    if (skill.rate) {
        updateSkill.rate = skill.rate;
    }
    if (!updateSkill) {
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    } else {
        db.skills.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, skill) {
            if (err) {
                res.send(err);
            }
            res.json(skill);
        });
    }


});

module.exports = router;