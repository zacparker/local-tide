Template.interfaceHult.helpers({
  templateGestures: {
    'tap .trigger': function(event, templateInstance) {
      event.preventDefault(); // when the user taps, don't follow the src link
      var artist = "hult";
      var actionType = event.type; // what type of event?
       var terminalOfOrigin = "interface";
      // remove all events from database
      Meteor.call('removeActions', artist, function() { // clear all contents of the database and then
        logActions(); // log to the console
        // console.log(actionType + ' performed via interface');
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
  },
});

Template.interfaceHult.onRendered(function () {
  var self = this;
  var query = Actions.find();
  query.observeChanges({ // listen to changes to the collection
    added: function(id, fields) { // if anything is added to the collection
      if (fields.artist === "hult" && fields.terminalOfOrigin === "display" && fields.count <= 0) {

        new Slidr({
          timer: 8000,
          carousel: true,
          views: [{
            wrapper: $('.hult-slide-show').get(0),
            slides: $('.hult-slide-show .slide').toArray(),
          }]
        });
      } else if (fields.count >= 0 ) {
        console.log("tried again" )
      }
    }
  });
});
