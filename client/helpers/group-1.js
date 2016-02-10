Template.group1.events({
  "click .btn": function(event, template) {
    var artist = event.target.data.redirect;
    var actionType = event.type;
    Meteor.call('removeActions', artist, function() {
      Actions.insert({
        actionType: actionType,
        artist: artist,
        createdAt: new Date(),
        sender: "1"
      });
      location.href = "/" + artist + "/interface"
    });
  }
})