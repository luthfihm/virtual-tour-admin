/**
 * Created by luthfi on 8/25/16.
 */
Router.route('/', function() {
    this.layout('layout');
    this.render('home');
    this.onBeforeAction(function () {
        if (getCookie('token') != '') {
            this.next();
        } else {
            window.location = '/login';
        }
    });
});

Router.route('/login', {
    template: 'login',
    title: 'Login | Virtual Tour Management',
    onBeforeAction: function () {
        if (getCookie('token') == '') {
            this.next();
        } else {
            window.location = '/';
        }
    }
});