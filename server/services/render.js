const axios=require('axios');



exports.homeRoutes=(req,res)=>{
// Make a get request to /api/uers
    axios.get('http://localhost:3080/api/users')
    .then(function(response){
        res.render('index',{users:response.data});
        console.log(`${process.env.HOST}:${process.env.PORT}/api/categories`)
    })
    .catch(err=>{
        console.log(" axios catch error ")
        res.send(err);
    })
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

exports.update_user=(req,res)=>{
    axios.get('http://localhost:3080/api/users',{params:{id:req.query.id}})
      .then(function(userdata){
          res.render("update_user",{user:userdata.data})
      })
    .catch(err=>{
        res.send(err);
    })
}