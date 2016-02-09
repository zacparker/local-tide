Template.displayCourt.helpers({
  actionPerformed: function() {
    initializing = true;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "court" && !initializing) { // if the added item matches this artist
          $('#court-video-display').toggleClass('hidden');
          $('#court-video-selected').toggleClass('hidden');
        }
      }
    });
    initializing = false;
    return query;
  }
});
