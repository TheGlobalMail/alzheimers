define(['jquery', 'lodash', 'Models', 'ViewHelper'], function($, _, models, helper) {

  var StoriesView = function(){};

  StoriesView.prototype.renderIntro = function(){
    var storiesPage = models.storiesPage;
    return '<h1 id="stories-title">' + storiesPage.title + '</h1>' +
      '<p id="stories-content">' + storiesPage.excerpt + '</p>' +
      '<a href="#share-your-story" rel="modal" class="btn"></a>';
  };

  StoriesView.prototype.renderShare = function(){
    return '<h2>Would you like to share your experiences with dementia, either via audio or words?</h2><a ' +
      'href="#share-your-story" rel="modal" class="btn"></a>';
  };

  StoriesView.prototype.render = function(){

    var $modals = $('#modals');

    this.renderNav();

    var grid = [this.renderIntro()]

    _.each(models.stories, function(story, index){
      grid.push('<h2>' + story.title + '</h2>' + 
        '<p class="author">' + story.byline + '</p>' +
        '<p class="quote">' + story.excerpt + '</p>' + 
        '<a href="#more-' + story.id + '" rel="modal">Read more</a>'
      );
      $modals.before(
        '<div class="modal" id="more-' + story.id + '">' +
        '<a rel="close-modal">&times;</a>' +
        '<h2>' + story.title + '</h2>' +
        story.content +
        '</div>'
      );
    });

    grid.push(this.renderShare()); 

    $('#stories table.grid').html(helper.renderTable(grid, 'reader'));
  };

  StoriesView.prototype.renderNav = function(){
    var $storiesNav = $('#stories-nav-item')
    var storiesPage = models.storiesPage;
    $storiesNav.find('a').html(storiesPage.title);
  };

  return new StoriesView();

});
