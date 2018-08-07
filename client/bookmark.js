Template.bookmark.events({
    'click span.remove': function (e, tpl) {
        if (confirm('确定删除此书签?')) {
            var id = this._id;
            Bookmarks.remove({_id, id});

        }
    }
});