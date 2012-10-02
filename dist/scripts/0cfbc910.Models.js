define(['jquery', 'lodash', 'Vent'], function($, _, vent){

  var Models = function(){
    this.usingLiveData = location.href.match(/live=1/i);
  };

  var inCategory = function(post, category){
    return _.find(post.categories, function(cat){
      return cat === category;
    });
  }

  Models.prototype.load = function(callback){
    var _this = this;

    $.ajax({
      url: this.usingLiveData ? 'http://alzheimers-cms.theglobalfail.com/?feed=json' : 'data/data.json',
      dataType: this.usingLiveData ? 'jsonp' : 'json',
      success: function(posts){
        _this.loadFromJSON(posts);
        vent.trigger('models:loaded');
      }
    });
  };

  Models.prototype.loadFromJSON = function(posts){

    var _this = this;

    // stores posts on this.videos, this.stories and this.clips
    _.each(['videos', 'stories', 'clips'], function(category){

      _this[category] = _.chain(posts)
        .select(function(post){ return inCategory(post, category); })
        .sortBy(function(post){ return post.order; })
        .value();

    });

    this.storiesPage = _.find(posts, function(post){
      return inCategory(post, 'story');
    });

    this.audioPage = _.find(posts, function(post){
      return inCategory(post, 'audio');
    });

  };

  return new Models();

});
