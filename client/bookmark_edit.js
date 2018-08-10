Template.bookmarkEdit.events({
    'submit form.form-edit':function (e,tpl) {
        e.preventDefault();
        var id=this._id;
        var name =tpl.$('#bookmark_name_new').val();
        var url =tpl.$('#bookmark_url_new').val();

        Bookmarks.update({_id:id},{$set:{name:name,url:url}},function (err) {
           if(!err)
           {
               tpl.$('#bookmark_name_new').val();
               tpl.$('#bookmark_url_new').val();

               Router.go('/');
           }
        });
    }


});

// Template.bookmarkEdit.helpers({
//     data:function () {
//         console.log(this.param._id);
//         return Bookmarks.findOne(this.param._id);
//     }
//
// })