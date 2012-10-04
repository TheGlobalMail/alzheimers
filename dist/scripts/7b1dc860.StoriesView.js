define(['jquery', 'lodash', 'Models', 'ViewHelper'], function($, _, models, helper) {

  var StoriesView = function(){};

  StoriesView.prototype.renderIntro = function(){
    var storiesPage = models.storiesPage;
    return '<td class="txt reader">' +
      '<h1 id="stories-title">' + storiesPage.title + '</h1>' +
      '<p id="stories-content">' + storiesPage.excerpt + '</p>' +
      '<a href="#share-your-story" rel="modal" class="btn"></a>' +
      '</td>'
  };

  StoriesView.prototype.renderShare = function(){
    var html = '<h2>Would you like to share your experiences with Alzheimers, either via audio or words?</h2><a ' +
         'href="#share-your-story" rel="modal" class="btn"></a></td></tr>';
    if (models.stories.length % 2 === 1){
      return '</tr><tr><td class="reader txt" colspan="2">' + html;
    }else{
      return '<td class="reader txt">' + html;
    }
  };

  StoriesView.prototype.render = function(){

    var $modals = $('#modals');

    this.renderNav();

    var grid = '<tr>' + this.renderIntro();

    _.each(models.stories, function(story, index){
      if (index % 2 === 1){
        grid += '</tr><tr>';
      }
     grid +=  '<td class="reader">' + 
        '<h2>' + story.title + '</h2>' + 
        '<p class="author">' + story.byline + '</p>' +
        '<p class="quote">' + story.excerpt + '</p>' + 
        '<a href="#more-' + story.id + '" rel="modal">Read more</a>' +
        '</td>';
      $modals.before(
        '<div class="modal" id="more-' + story.id + '">' +
        '<a rel="close-modal">&times;</a>' +
        '<h2>' + story.title + '</h2>' +
        story.content +
        '</div>'
      );
    });

    grid += this.renderShare(); 

    $('#stories table.grid').html(grid);
  };

  StoriesView.prototype.renderNav = function(){
    var $storiesNav = $('#stories-nav-item')
    var storiesPage = models.storiesPage;
    $storiesNav.find('a').html(storiesPage.title);
  };

  return new StoriesView();

});
