Template.displayStephens.helpers({
  actionPerformed: function() {
    stephensCount = 0;
    videoIsPlaying = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "5" && stephensCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "stephens" && stephensCount) { // if the added item matches this artist
          var v = $('#display-stephens-video').get(0);
          if (videoIsPlaying) {
            $(v).addClass('hidden');
            v.pause();
          } else {
            $(v).removeClass('hidden');
            v.play();
          }
          videoIsPlaying = !videoIsPlaying ? true : false;
        } else if (fields.artist === "stephens" && stephensCount === 0) {
          stephensCount++;
        }
      }
    });
    return query;
  }
});
