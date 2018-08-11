Template.bookmarkAdd.events({
    'submit form.form-add': function (e, tpl) {
        e.preventDefault();//阻止页面跳转

        //get current user's id
        var uid = Meteor.user()._id;
        var name = tpl.$('#bookmark_name').val();
        var url = tpl.$('#bookmark_url').val();

        console.log("0："+uid +"+"+name + "+"+url);
        Meteor.call('bookmarkInsert', {name: name, url: url},
            function (error) {
                if (error) {
                    return alert(error.reason);
                    // return alert("wo cao jiuzaizhe!!!");

                }
                tpl.$('#bookmark_name').val('');
                tpl.$('#bookmark_url').val('');

                Router.go('/');
            });
    }


});




