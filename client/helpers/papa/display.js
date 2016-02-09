Template.displayPapa.helpers({
  actionPerformed: function() {
    initializing = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "papa" && !initializing) { // if the added item matches this artist
          var $video = $('#display-papa-video');
          var isVideoVisible = $video.hasClass('hidden');
          var $bgImg = $('img');
          if (isVideoVisible) {
            $video.removeClass('hidden');
            $video.get(0).play();
            $bgImg.addClass('opacity-zero');
          } else {
            $video.addClass('hidden');
            $video.get(0).pause();
            $bgImg.removeClass('opacity-zero');
          }
        }
      }
    });
    initializing = false;
    return query;
  }
});
