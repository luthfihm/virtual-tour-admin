/**
 * Created by luthfi on 9/9/16.
 */
import '../template/add-user.html';
Template.addUser.helpers({
    "title": function () {
        return Session.get("titleAddUser");
    }
});