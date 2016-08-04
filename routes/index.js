exports.index = function(req, res){
  res.render('index',
  {
    title: 'Simple Crud Mysql Nodejs',
    title1: 'Belajar CRUD',
    isinya: 'Jangan bully saya :( saya masih newbie belajar nodejs nya juga :)'
  });
};
