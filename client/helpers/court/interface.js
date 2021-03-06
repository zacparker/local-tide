Template.interfaceCourt.helpers({
  templateGestures: {
    'tap .trigger': function(event, templateInstance) {
      event.preventDefault(); // when the user taps, don't follow the src link
      var artist = "court";
      var actionType = event.type; // what type of event?
      var targetId = event.target.id; // looking for the id of the event target
      // remove all events from database
      Meteor.call('removeActions', artist, function() { // clear all contents of the database and then
        // save latest event to database
        Actions.insert({
          actionType: actionType,
          artist: artist,
          targetId: targetId,
          createdAt: new Date() // current time
        });
      });
    },
    'tap .info-modal-open': function(event, templateInstance) {
      AntiModals.overlay('modal-court', { // when the user taps the 'T', open the modal
        modal: true
      });
    }
  }
});

