exports.govukConfig = {
  'assetPath': '/public/',
  'headerClass': 'with-proposition',
  'propositionHeader': '<div class="header-proposition">' +
                    '<div class="content">' +
                      '<a href="#proposition-links" class="js-header-toggle menu">Menu</a>' +
                      '<nav id="proposition-menu">' +
                        '<a href="/" id="proposition-name">CloudStore <span class="alpha-tag">Alpha</span></a>' +
                        '<ul id="proposition-links">' +
                          '<li><a href="url-to-page-1" class="active">Home</a></li>' +
                          '<li><a href="url-to-page-2">Login</a></li>' +
                        '</ul>' +
                      '</nav>' +
                    '</div>' +
                  '</div>',
  'afterHeader': '<div id="phase-notice">' +
                    '<p><strong>Alpha:</strong> This is a new service - your <a href="">feedback</a> will help us to improve it</p>' +
                  '</div>'
};
