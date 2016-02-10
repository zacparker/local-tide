Template.displayHult.helpers({
  actionPerformed: function() {
    hultCount = 0;
    var query = Actions.find(); // find all data in Actions collection, assign it to 'query'
    query.observeChanges({ // listen to changes to the collection
      added: function(id, fields) { // if anything is added to the collection
        if (fields.sender === "4" && hultCount) {
          location.href = "/" + fields.artist + "/display";
        } else if (!fields.sender && fields.artist === "hult" && fields.terminalOfOrigin === "interface" && hultCount) { // if the added item matches this artist
          $('.slide-show-before').toggleClass('hidden');
          $('.slide-show-after').toggleClass('hidden');
          setTimeout(function() {
            $('.slide-show-before').toggleClass('hidden');
            $('.slide-show-after').toggleClass('hidden');
          }, 8000);
        } else if (fields.artist === "hult" && hultCount === 0) {
          hultCount++;
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
  var slideShowOptions = {
    timer: 16000,
    carousel: true,
    views: [{
      wrapper: $('.slide-show-before').get(0),
      slides: $('.slide-show-before .slide').toArray()
    },{
      wrapper: $('.slide-show-after').get(0),
      slides: $('.slide-show-after .slide').toArray()
    }]
  };

  var slideShow = new Slidr( slideShowOptions );
}