Template.bookmarkList.helpers({
    bookmarks:function () {
       if(Meteor.user()){

           return Bookmarks.find({owner: Meteor.user()._id});
       }

    }
});