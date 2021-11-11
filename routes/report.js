
exports.report = function (req, res, next) {
    var self=req.query.self;
    var username=req.query.username
    var message=req.query.message;
    
    res.send({status:true,msg:'已举报'});
};

