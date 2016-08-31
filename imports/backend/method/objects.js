/**
 * Created by luthfi on 8/26/16.
 */
import { Meteor } from 'meteor/meteor';
var ApiClient = require('../helper/api-client');
var Log = require('../helper/log');
if (Meteor.isServer) {
    var module = 'objects';
    var apiUrl = Meteor.settings.baseApi + '/' + module;
    Meteor.methods({
        'objects.list' () {
            this.unblock();
            var response = ApiClient.get(apiUrl);
            return response;
        },
        'objects.get' (id) {
            this.unblock();
            var response = ApiClient.get(apiUrl + '/' + id);
            return response;
        },
        'objects.add' (object) {
            this.unblock();
            var response = ApiClient.post(apiUrl, object);
            return response;
        },
        'objects.edit' (id, object) {
            this.unblock();
            var response = ApiClient.put(apiUrl + '/' + id, object);
            return response;
        },
        'objects.delete' (id) {
            this.unblock();
            var response = ApiClient.delete(apiUrl + '/' + id);
            return response;
        }
    });
}