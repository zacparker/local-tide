Meteor.startup(function () {
  // code to run on client at startup
  toggleFullScreen();
});

Template.interface.helpers({
  templateGestures: {
    'tap .trigger': function (event, templateInstance) {
      var actionType = event.type;
      // remove all events from database
      Meteor.call('removeActions', function() {
        logActions();
        console.log(actionType + ' performed via interface');
        // save latest event to database
        Actions.insert({
          action: actionType,
          triggerAction: true,
          createdAt: new Date() // current time
        });
      });
    }
  }
});