var Job = require('./models/job');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/jobs', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.find({}, 'title company', function(err, jobs) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(jobs); // return all nerds in JSON format
        });
    });

    app.get('/api/jobs/:job_id', function(req, res) {
        // use mongoose to get all nerds in the database
        Job.findOne({_id : req.params.job_id}, 'title company', function(err, job) {

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
            title: req.body.title,
            company: req.body.company
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

    app.delete('/api/jobs/:job_id', function(req, res) {
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
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    app.post('/charge/postajob', function(req, res) {
        var stripe = require("stripe")("sk_test_JtBzD7bMqZzOGZlzl3vdyBKf");

        // (Assuming you're using express - expressjs.com)
        // Get the credit card details submitted by the form
        var stripeToken = req.body.stripeToken;

        var charge = stripe.charges.create({
          amount: 1000, // amount in cents, again
          currency: "usd",
          source: stripeToken,
          description: "Example charge"
        }, function(err, charge) {
          if (err && err.type === 'StripeCardError') {
            // The card has been declined
            res.send(err);
          }
          else {
            res.send(charge);
          }
        });
    })

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};