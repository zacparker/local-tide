Template.group2.events({
  "click .btn": function(event, template) {
    var artist = event.target.dataset.redirect;
    var actionType = event.type;
    Meteor.call('removeActions', artist, function() {
      Actions.insert({
        actionType: actionType,
        artist: artist,
        createdAt: new Date(),
        sender: "2"
      });
      location.href = "/" + artist + "/interface"
    });
  }
})