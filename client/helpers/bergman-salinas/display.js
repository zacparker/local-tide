Template.displayBergmanSalinas.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "bergman-salinas") { // if the added item matches this artist
          $('#display-bergman-salinas-video').toggleClass('hidden');
          $('#display-bergman-salinas-video-selected').toggleClass('hidden');
        }
      }
    });
    return query;
  }
});
