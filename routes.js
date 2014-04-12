module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});
      
    });

    app.get('/sample', function (req, res) {
      
      res.render('sample',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello_world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page_level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    app.get('/examples/template-partial-areas', function (req, res) {

      res.render('examples/template_partial_areas',
                {'assetPath' : assetPath});
      
    });

    app.get('/cache-control-1', function (req, res) {
      dataObj = {'assetPath' : assetPath};

      for (var prop in req.session) {
        dataObj[prop] = req.session[prop];
      }
      res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
      res.render('cache-control-1.html', dataObj);
    });

    app.post('/cache-control-2', function (req, res) {
      dataObj = {'assetPath' : assetPath};

      if (req.param('firstName')) {
        req.session.firstName = req.param('firstName');
      }
      if (req.param('lastName')) {
        req.session.lastName = req.param('lastName');
      }
      if (req.param('age')) {
        req.session.age = req.param('age');
      }
      for (var prop in req.session) {
        dataObj[prop] = req.session[prop];
      }
      res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
      res.render('cache-control-2.html', dataObj);
    });

    app.post('/cache-control-final', function (req, res) {
      dataObj = {'assetPath' : assetPath};

      if (req.param('dogName')) {
        req.session.dogName = req.param('dogName');
      }
      if (req.param('dogAge')) {
        req.session.dogAge = req.param('dogAge');
      }
      for (var prop in req.session) {
        dataObj[prop] = req.session[prop];
      }
      res.header('Cache-Control', 'no-cache, max-age=0, must-revalidate, no-store');
      res.render('cache-control-final.html', dataObj);
    });

    /* Elements example pages */

    app.get('/examples/elements/grid-layout', function (req, res) {
      res.render('examples/elements/grid_layout', {'assetPath' : assetPath });    
    });

    app.get('/examples/elements/typography', function (req, res) {
      res.render('examples/elements/typography', {'assetPath' : assetPath });    
    });
    
    app.get('/examples/elements/forms', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });    
    });

  }
};
