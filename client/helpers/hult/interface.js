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