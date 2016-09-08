/**
 * Created by luthfi on 9/9/16.
 */
import '../template/manage-user.html';

Template.manageUser.events({
    'click #add-object': function (event) {
        event.preventDefault();
        $('#modal1').openModal();
        Session.set('titleAddUser', 'Tambah User');
    },
    'click .edit': function (event) {
        event.preventDefault();
        $('#modal1').openModal();
        Session.set('titleAddUser', 'Edit User');
        Materialize.updateTextFields();
    },
    'click .delete': function (event) {
        event.preventDefault();
        if (confirm('Yakin untuk menghapus?')) {

        }
    }
});