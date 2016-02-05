Template.displaySalazar.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    salazarDisplayCount = 0;
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "salazar") { // if the added item matches this artist
          var $bgVideo = $('#display-salazar-video-1');
          var $videos = $('.pop-up');
          var $hiddenVideos = $('.pop-up.hidden');
          var thisVideo = $videos.get(salazarDisplayCount);
          var $thisVideo = $(thisVideo);
          var isVideoVisible = $hiddenVideos.length !== 2 ? true : false;
          if (isVideoVisible) {
            $thisVideo.addClass('hidden');
            $bgVideo.removeClass('opacity-zero');
            if (salazarDisplayCount >= 1) {
              salazarDisplayCount = 0;
            } else {
              salazarDisplayCount++;
            }
          } else if (!isVideoVisible) {
            $thisVideo.removeClass('hidden');
            $bgVideo.addClass('opacity-zero');
          }
        }
      }
    });
    return query;
  }

});
