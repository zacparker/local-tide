Template.interfaceHult.helpers({
  templateGestures: {
    'tap .trigger': function(event, templateInstance) {
      event.preventDefault(); // when the user taps, don't follow the src link
      var artist = "hult";
      var actionType = event.type; // what type of event?
       var terminalOfOrigin = "interface";
      // remove all events from database
      Meteor.call('removeActions', artist, function() { // clear all contents of the database and then
        // save latest event to database
        Actions.insert({
          actionType: actionType,
          artist: artist,
          terminalOfOrigin: terminalOfOrigin,
          createdAt: new Date() // current time
        });
      });
    },
    'tap .info-modal-open': function(event, templateInstance) {
      AntiModals.overlay('modal-hult', { // when the user taps the 'T', open the modal
        modal: true
      });
    }
  }
});

Template.interfaceHult.rendered = function () {
  var query = Actions.find();
  query.observeChanges({ // listen to changes to the collection
    added: function(id, fields) { // if anything is added to the collection
      hisci = typeof hisci !== "undefined" ? hisci : 0; // hisci = hultInterfaceSlideshowCreatedIndex
      var startSlideshow = function() {
        $('.slideshow-outer-wrapper .hult-slide-show-' + hisci).clone().appendTo('.clone-container');
        $('.slideshow-outer-wrapper .hult-slide-show-' + hisci).remove();
        hisci++;
        $('.clone-container div').removeClass();
        $('.clone-container div').addClass('hult-slide-show-' + hisci);
        $('.clone-container div').clone().appendTo('.slideshow-outer-wrapper');
        $('.clone-container div').remove();
        var hultInterfaceStartSlideShowOptions = {
          timer: 8000,
          carousel: true,
          views: [{
            wrapper: $('.slideshow-outer-wrapper .hult-slide-show-' + hisci).get(0),
            slides: $('.slideshow-outer-wrapper .hult-slide-show-' + hisci + ' .slide').toArray()
          }]
        };
        new Slidr( hultInterfaceStartSlideShowOptions );
      };

      if (fields.artist === "hult" && fields.terminalOfOrigin === "display") {
        var slideShow = startSlideshow();
      }
    }
  });
};
