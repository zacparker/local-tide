Template.interfaceBarryStone.helpers({
  templateGestures: {
    'tap .trigger': function (event, templateInstance) {
      event.preventDefault();
      var artist = "barry-stone";
      var actionType = event.type;
      var selectedImageNumber = event.target.id;
      // remove all events from database
      Meteor.call('removeActions', function() {
        logActions();
        console.log(actionType + ' performed via interface');
        // save latest event to database
        Actions.insert({
          actionType: actionType,
          artist: artist,
          selectedImageNumber: selectedImageNumber,
          removeBeforeInsert: true,
          createdAt: new Date() // current time
        });
      });
    }
  }
});