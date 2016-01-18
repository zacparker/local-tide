Meteor.startup(function () {
  // code to run on client at startup
  toggleFullScreen();
});

Template.interface.helpers({
  templateGestures: {
    'tap .trigger': function (event, templateInstance) {
      // remove all events from database
      Meteor.call('removeActions', logActions());
      console.log('tap occured');
      // save latest event to database
      Actions.insert({
        action: event.type,
        triggerAction: true,
        createdAt: new Date() // current time
      });
    }
  }
});