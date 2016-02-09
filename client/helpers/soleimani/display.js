Template.displaySoleimani.helpers({
  actionPerformed: function() {
    soleimaniCount = 0;
    videoIsPlaying = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "soleimani" && soleimaniCount >= 1) { // if the added item matches this artist
          $('img').remove();
          var v = $('#display-soleimani-video').get(0);
          if ($(v).hasClass('hidden')) {
            $(v).removeClass('hidden')
          }
          if (videoIsPlaying) {
            v.pause();
          } else {
            v.play();
          }
          videoIsPlaying = !videoIsPlaying ? true : false;
        } else if (fields.artist === "soleimani" && soleimaniCount === 0) {
          soleimaniCount++;
        }
      }
    });
    return query;
  }
});
