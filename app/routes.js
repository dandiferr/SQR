var Job = require('./models/job');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/jobs', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.find({}, 'name facebook', function(err, jobs) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(jobs); // return all nerds in JSON format
        });
    });

    app.get('/api/jobs/:job_id', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.findOne({_id : req.params.job_id}, 'name facebook', function(err, job) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(job); // return all nerds in JSON format
        });
    });

    app.get('/api/user/:fb_token', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.findOne({fb_token : req.params.fb_token}, 'name facebook twitter linkedin instagram', function(err, job) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(job); // return all nerds in JSON format
        });
    });

    app.post('/api/jobs', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.create({
            name: req.body.name,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            linkedin: req.body.linkedin,
            instagram: req.body.instagram,
            fb_token: req.body.fb_token
        }, function(err, job) {
            if(err) {
                console.log(err);
                res.status(400);
                res.send(err);
            }else
                Job.find(function(err, jobs) {
                    if(err)
                        res.send(err);
                    res.json(jobs);
                });
        });
    });

    app.post('/api/users', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.findOne({fb_token : req.body.fb_token},{
            
        }, function(err, job) {
            console.log(job);
            if(err) {
                console.log(err);
                res.status(400);
                res.send(err);
            }else
                job.name = req.body.name;
                job.facebook= req.body.facebook;
                job.twitter= req.body.twitter;
                job.linkedin= req.body.linkedin;
                job.instagram= req.body.instagram;
                job.save(function(err, job){

                    Job.find(function(err, jobs) {
                        if(err)
                            res.send(err);
                        res.json(jobs);
                    })
                })
        });
    });

    /*app.delete('/api/jobs/:job_id', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.remove({
            _id : req.params.job_id
        }, function(err,job) {
            if (err)
                res.send(err);
            else
                Job.find(function(err, jobs) {
                    if (err)
                        res.send(err);
                    res.json(jobs);
                });
        });
    });*/

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};