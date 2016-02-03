Template.displayHult.helpers({
  actionPerformed: function() {
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.artist === "hult" && fields.terminalOfOrigin === "interface") { // if the added item matches this artist
          $('.slide-show-before').toggleClass('hidden');
          $('.slide-show-after').toggleClass('hidden');
          setTimeout(function() {
            $('.slide-show-before').toggleClass('hidden');
            $('.slide-show-after').toggleClass('hidden');
          }, 4000);
        }
      }
    });
    return query;
  }
});


Template.displayHult.rendered = function () {
  var artist = "hult";
  var terminalOfOrigin = "display";
  var count = 0;
  setTimeout(function() {
    Meteor.call('removeActions', artist, function() { // clear all contents of the database and then
      var slideShowOptions = {
        timer: 8000,
        carousel: true,
        views: [{
          wrapper: $('.slide-show-before').get(0),
          slides: $('.slide-show-before .slide').toArray()
        },{
          wrapper: $('.slide-show-after').get(0),
          slides: $('.slide-show-after .slide').toArray()
        }]
      };
      Actions.insert({
        artist: artist,
        terminalOfOrigin: terminalOfOrigin,
        count: count,
        createdAt: new Date() // current time
      }, count++);

      var slideShow = (count === 1) ? new Slidr( slideShowOptions ) : null;;
    });
  }, 5000);
}