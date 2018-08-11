Meteor.publish('allBookmarks',function () {
    return Bookmarks.find();
})