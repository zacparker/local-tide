Template.displayStephens.helpers({
  actionPerformed: function() {
    initializing = true;
    videoIsPlaying = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "stephens" && !initializing) { // if the added item matches this artist
          var v = $('#display-stephens-video').get(0);
          if (videoIsPlaying) { v.pause() } else {  v.play() }
          videoIsPlaying = !videoIsPlaying ? true : false;
        }
      }
    });
    initializing = false;
    return query;
  }
});
