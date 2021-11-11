

var users=[
    {username:'admin',password:'123'},
    {username:'user1',password:'123'},
    {username:'user2',password:'123'},
    {username:'user3',password:'123'}
]

exports.regist =function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;
console.log('regist'+username);
    if(!username || !password){
        res.send({status:false, msg:"注册信息不全"});
        return;
    }

    for(var k=0;k<users.length;k++){
        if(users[k].username==username){
            res.send({status:false, msg:"用户名已存在"})
            return;
        }
    }

    users.push({username:username,password:password});
    res.send({status:true, msg:"注册成功"})
}

exports.login = function(req,res,next){
    var username=req.query.username;
    var password=req.query.password;
    console.log('login:'+username);
    for(var k=0;k<users.length;k++){
        if(users[k].username==username && users[k].password==password){
            res.send({status:true, msg:"登录成功"})
            return;
        }
    }
    res.send({status:false, msg:"登录失败"})
}
