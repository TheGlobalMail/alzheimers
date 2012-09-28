(function($, _, app){

  var StoriesView = function(){};

  StoriesView.prototype.render = function(){

    var $modals = $('#modals');

    this.renderNav();

    _.each(app.models.stories, function(story, index){
      $('#stories-share').before(
        '<li class="reader">' + 
        '<h2>' + story.title + '</h2>' + 
        '<p class="author">' + story.byline + '</p>' +
        '<p class="quote">' + story.excerpt + '</p>' + 
        '<a href="#more-' + story.id + '" rel="modal">Read more</a>' +
        '</li>'
      );
      $modals.before(
        '<div class="modal" id="more-' + story.id + '">' +
        '<a rel="close-modal">&times;</a>' +
        '<h2>' + story.title + '</h2>' +
        story.content +
        '</div>'
      );
    });

    app.views.helpers.adjustGridHeights($('#stories'));

  };

  StoriesView.prototype.renderNav = function(){
    var $storiesNav = $('#stories-nav-item')
    var storiesPage = app.models.storiesPage;
    $storiesNav.find('a').html(storiesPage.title);
    $('#stories-title').html(storiesPage.title);
    $('#stories-content').html(storiesPage.excerpt);
  };

  app.views.storiesView = new StoriesView();

})($, _, TGM.alzheimers);
