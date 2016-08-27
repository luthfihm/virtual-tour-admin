/**
 * Created by luthfi on 5/29/16.
 */
import { HTTP } from 'meteor/http';
var Log = require('./log');
var apiCall = function (apiUrl, method, options, callback) {
    // try…catch allows you to handle errors
    try {
        var response = HTTP.call(method, apiUrl, options).data;
        callback(null, response);
    } catch (error) {
        if (error.response) {
            var errorCode = error.response.data.code;
            var errorMessage = error.response.data.message;
        } else {
            var errorCode = 500;
            var errorMessage = 'Cannot access the API';
        }
        Log.error('(api-client.js) error code: ' + errorCode);
        Log.error('(api-client.js) message: ' + errorMessage)
        // Create an Error object and return it via callback
        var myError = new Meteor.Error(errorCode, errorMessage);
        callback(myError, null);
    }
};
module.exports = {
    call: function (apiUrl, method, options) {
        return Meteor.wrapAsync(apiCall)(apiUrl, method, options);
    },
    get: function (apiUrl, headers = null) {
        if (headers)
            headers['Content-Type'] = "application/json";
        else
            headers = {"Content-Type":"application/json"};
        return Meteor.wrapAsync(apiCall)(apiUrl, 'GET', {headers: headers});
    },
    post: function (apiUrl, request, headers = null) {
        if (headers)
            headers['Content-Type'] = "application/json";
        else
            headers = {"Content-Type":"application/json"};
        return Meteor.wrapAsync(apiCall)(apiUrl, 'POST', {headers: headers, data: request});
    },
    put: function (apiUrl, request, headers = null) {
        if (headers)
            headers['Content-Type'] = "application/json";
        else
            headers = {"Content-Type":"application/json"};
        return Meteor.wrapAsync(apiCall)(apiUrl, 'PUT', {headers: headers, data: request});
    },
    delete: function (apiUrl, headers = null) {
        if (headers)
            headers['Content-Type'] = "application/json";
        else
            headers = {"Content-Type":"application/json"};
        return Meteor.wrapAsync(apiCall)(apiUrl, 'DELETE', {headers: headers});
    }
};