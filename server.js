var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    sessions        = require('./routes/sessions'),
    account        = require('./routes/account'),
    quora        = require('./routes/quora'),
    report        = require('./routes/report'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);
app.get('/test', sessions.getOne);
app.post('/hehe', sessions.postOne);



app.get('/regist', account.regist);
app.get('/login', account.login);
app.get('/getQuestions', quora.getQuestions);
app.get('/getQuestion', quora.getQuestion);
app.get('/addQuestion', quora.addQuestion);
app.get('/addAnswer', quora.addAnswer);
app.get('/report', report.report);


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
