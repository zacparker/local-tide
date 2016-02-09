Template.displayBergmanSalinas.helpers({
  actionPerformed: function() {
    bergmanSalinasCount =0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "bergman-salinas" && bergmanSalinasCount >= 1) { // if the added item matches this artist
          var togglePlay = function(video) {
            if (video.paused) {
              video.play();
            } else {
              video.pause();
            }
          }
          $('#display-bergman-salinas-video').toggleClass('hidden');
          $('#display-bergman-salinas-video-selected').toggleClass('hidden');
          togglePlay($('#display-bergman-salinas-video').get(0));
          togglePlay($('#display-bergman-salinas-video-selected').get(0));
        }
      } else if (fields.artist === "bergman-salinas" && bergmanSalinasCount === 0) {
        bergmanSalinasCount++;
      }
    });
    return query;
  }
});
