Template.displayAlper.helpers({
  actionPerformed: function() {
    alperDisplayCount = -1;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "alper") { // if the added item matches this artist
          var $videos = $('video');
          var $hiddenVideos = $('video.hidden');
          var thisVideo = $videos.get(alperDisplayCount);
          var $thisVideo = $(thisVideo);
          var isVideoVisible = !$thisVideo.hasClass('hidden');
          if (isVideoVisible) {
            $thisVideo.addClass('hidden');
            if (alperDisplayCount >= 16) {
              alperDisplayCount = 0;
            } else {
              alperDisplayCount++;
            }
          } else if (!isVideoVisible && alperDisplayCount >= 0) {
            $thisVideo.removeClass('hidden');
          } else if (!isVideoVisible && alperDisplayCount === -1) {
            alperDisplayCount++;
          }

        }
      }
    });
    return query;
  }
});
