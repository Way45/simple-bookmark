Template.bookmarkAdd.events({
    'submit form.form-add': function (e, tpl) {
        e.preventDefault();//阻止页面跳转

        //get current user's id
        var uid = Meteor.user()._id;

        var name = tpl.$('#bookmark_name').val();
        var url = tpl.$('#bookmark_url').val();

        Bookmarks.insert({name: name, url: url,owner:uid},function (err) {
                if (!err) {
                    tpl.$('#bookmark_name').val('');
                    tpl.$('#bookmark_url').val('');

                    Router.go('/');
                }

            });
    }


});




