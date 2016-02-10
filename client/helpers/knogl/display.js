Template.displayKnogl.rendered = function() {
  var knoglCount = 0;
  var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
  query.observeChanges({ // listen to changes to the collection
    added: function(id, fields) { // if anything is added to the collection
      if (fields.sender === "5") {
        location.href = "/" + fields.artist + "/display";
      } else if (!fields.sender && fields.artist === "knogl" && knoglCount >= 1) { // if the added item matches this artist
        $('#knogl-video-display-overlay').toggleClass('opacity-zero');
      } else if (fields.artist === "knogl" && knoglCount === 0) {
        knoglCount++;
      }
    }
  });
};