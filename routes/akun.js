exports.post = function (req,res) {
  res.render('tambah',
  {
    title: 'Simple Crud Mysql Nodejs',
    title1: 'Tambah Akun'
  });
};

exports.save = function(req,res){
  var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
      var data = {
          username        : input.nama,
          password        : input.sandi,
          email           : input.email,
          tanggal_lahir   : input.tgl
      };
      var query = connection.query("INSERT INTO akun set ? ",data, function(err, rows)
      {

        if (err)
            console.log("Error inserting : %s ",err );
        res.redirect('/akun');
      });
    console.log(query.sql);
  });
};

exports.data_akun = function(req, res){
  req.getConnection(function(err,connection){
        var query = connection.query('SELECT * FROM akun',function(err,rows)
    {
        if(err)
            console.log("Error Selecting : %s ",err );
        res.render('akun',
        {
          title1:"Data Akun",
          title: 'Simple Crud Mysql Nodejs',
          data:rows
        });
     });
    console.log(query.sql);
  });
};

exports.get_data = function(req, res){
  var id = req.params.id;
    req.getConnection(function(err,connection){
      var query = connection.query('SELECT * FROM akun WHERE id_akun = ?',[id],function(err,rows)
      {
          if(err)
          console.log("Error Selecting : %s ",err );
          res.render('ubah',
          {
            title: 'Simple Crud Mysql Nodejs',
            title1: 'Ubah Akun',
            data:rows
          });
      });
    console.log(query.sql);
  });
};

exports.put = function(req,res){
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
    req.getConnection(function (err, connection) {
        var data = {
          username        : input.nama,
          password        : input.sandi,
          email           : input.email,
          tanggal_lahir   : input.tgl
        };
        connection.query("UPDATE akun set ? WHERE id_akun = ? ",[data,id], function(err, rows)
        {
          if (err)
          console.log("Error Updating : %s ",err );
          res.redirect('/akun');
        });
  });
};

exports.hapus_akun = function(req,res){
  var id = req.params.id;
    req.getConnection(function (err, connection) {
      connection.query("DELETE FROM akun  WHERE id_akun = ? ",[id], function(err, rows)
      {
           if(err)
           console.log("Error deleting : %s ",err );
           res.redirect('/akun');
      });
  });
};
