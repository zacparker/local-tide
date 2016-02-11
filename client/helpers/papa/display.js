Template.displayPapa.helpers({
  actionPerformed: function() {
    var papaCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "3" && papaCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "papa" && papaCount) { // if the added item matches this artist
          var $video = $('#display-papa-video');
          var isVideoVisible = $video.hasClass('hidden');
          var $bgImg = $('img');
          if (isVideoVisible) {
            $video.removeClass('hidden');
            $bgImg.addClass('opacity-zero');
          } else {
            $video.addClass('hidden');
            $bgImg.removeClass('opacity-zero');
          }
        } else if (fields.artist === "papa" && papaCount === 0) {
          papaCount++
        }
      }
    });
    initializing = false;
    return query;
  }
});
