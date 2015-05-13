angular.module('starter.services', [])

.factory('API', function($http) {
  var api = {};
  var baseURL = 'http://localhost:3000';
 
  api.sendDirectMessage = function(to, text) {
    return $http.post(baseURL + '/message_number', {
      "to": to,
      "text": text
    });
  };
 
  api.sendListMessage = function(id, text) {
    return $http.post(baseURL + '/message_list', {
      "listId": id,
      "text": text
    });
  };
 
  api.getLists = function() {
    return $http.post(baseURL + '/get_lists', {});
  };
 
  return api;
});
