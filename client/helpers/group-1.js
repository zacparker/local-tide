Template.group1.events({
  "click .btn-1": function(event, template) {
    var artist = event.target.dataset.redirect;
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