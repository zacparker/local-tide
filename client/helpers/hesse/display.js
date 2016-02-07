Template.displayHesse.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    hesseDisplayCount = 0;
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "hesse") { // if the added item matches this artist
          var $videos = $('video');
          var $hiddenVideos = $('video.hidden');
          var thisVideo = $videos.get(hesseDisplayCount);
          var $thisVideo = $('thisVideo');
          var isVideoVisible = $thisVideo.hasClass('hidden');
          if (isVideoVisible) {
            $thisVideo.addClass('hidden');
            if (hesseDisplayCount >= 2) {
              hesseDisplayCount = 0;
            } else {
              hesseDisplayCount++;
            }
          } else if (!isVideoVisible) {
            $thisVideo.removeClass('hidden');
          }
        }
      }
    });
    return query;
  }
});
