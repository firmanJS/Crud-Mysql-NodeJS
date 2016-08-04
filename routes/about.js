exports.about = function (req,res) {
  res.render('about',
  {
    title: 'Simple Crud Mysql Nodejs',
    title1: 'Belajar CRUD',
    isinya: 'Nama : Firman Abdul Hakim'
  });
};
