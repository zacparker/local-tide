Meteor.subscribe('actions');

Template.display.helpers({

  actionPerformed: function() {
    var query = Actions.find();

    query.observeChanges({
      added: function(id, fields) {
        var actionType = fields.action;
        console.log('gesture performed via interface');
        console.log(query.fetch());
        if (actionType === "tap") {
          handleTap();
        }
      },
      changed: function(id, fields) {
        console.log('doc updated');
        console.log(query.fetch());
      },
      removed: function() {
        console.log('previous action removed');
      }
    });
    return query;
  },

  width: function() {
    var w = 800;
    // Do Stuff
    return w;
  },

  height: function() {
    var h = 640;
    // Do Stuff
    return h;
  }

});