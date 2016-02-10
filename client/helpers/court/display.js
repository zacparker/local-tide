Template.displayCourt.helpers({
  actionPerformed: function() {
    var initializing = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "2") {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "court" && !initializing) { // if the added item matches this artist
          $('#court-video-display').toggleClass('hidden');
          $('#court-video-selected').toggleClass('hidden');
        }
      }
    });
    initializing = false;
    return query;
  }
});
