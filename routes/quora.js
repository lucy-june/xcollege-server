var obj=[
    {id:1, username: 'admin', question:'计算机专业下设几个子专业？',answers:[{username: 'user1',answer:'一共5个子专业'},{username: 'user3',answer:'我所知道的包括：嵌入式，图像处理，分布式等'}]},
    {id:2, username: 'user1', question:'软件工程专业男女比例是多少？',answers:[{username: 'admin',answer:'10:1'},{username: 'user3',answer:'应该是10:1'}]},
    {id:3, username: 'user2', question:'今年高考软件工程录取分数如何？',answers:[{username: 'user1',answer:'603'},{username: 'admin',answer:'603分'},{username: 'user3',answer:'今年比去年分数低 603分'}]},
    {id:4, username: 'user3', question:'软件工程专业就业去向如何？',answers:[{username: 'user2',answer:'Google Facebook Microsoft Linkedin'},{username: 'admin',answer:'BAT 华为 滴滴 小米'}]}
]

exports.getQuestions = function (req, res, next) {
    var username=req.query.username;
    if(!username)
        res.send(obj);
    else{
        var result=[];
        for(var k=0;k<obj.length;k++){
            if(obj[k].username==username){
                result.push(obj[k]);
            }
        }
        res.send(result);
    }

};

exports.getQuestion = function(req, res, next){
    var id=req.query.id;
    res.send(obj[Number(id)-1])
}

exports.addQuestion = function(req,res,next){
    var username=req.query.username;
    var question=req.query.question;

    if(username && question)
    obj.push({id:obj.length+1, username:username, question:question, answers:[]});

    res.send(obj);
}

exports.addAnswer=function(req,res,next){
    var id=req.query.id;
    var username=req.query.username;
    var answer=req.query.answer;

    if(id &&　username && answer)
    obj[Number(id)-1].answers.push({username:username,answer:answer});

    res.send(obj[Number(id)-1])
}