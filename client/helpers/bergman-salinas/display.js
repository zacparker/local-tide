Template.displayBergmanSalinas.helpers({
  actionPerformed: function() {
    bergmanSalinasCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        var $videos = $('[id^="display-bergman-salinas-video"]');
        if (fields.sender === "4" && bergmanSalinasCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "bergman-salinas" && bergmanSalinasCount) { // if the added item matches this artist
          var togglePlay = function(video) {
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }
          $videos.toggleClass('hidden');
          togglePlay($videos.get(0));
        } else if (fields.artist === "bergman-salinas" && bergmanSalinasCount === 0) {
          bergmanSalinasCount++;
        }
      }
    });
    return query;
  }
});
