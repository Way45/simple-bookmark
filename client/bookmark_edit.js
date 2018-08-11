Template.bookmarkEdit.events({
    'submit form.form-edit':function (e,tpl) {
        e.preventDefault();
        var id=this._id;
        var name =tpl.$('#bookmark_name_new').val();
        var url =tpl.$('#bookmark_url_new').val();

        Meteor.call('bookmarkUpdate',{id:this._id,name:name,url:url},function (error,result) {
            if(error){
                return altert(error.reason);
            }
            Router.go('/');
        });
    }


});
