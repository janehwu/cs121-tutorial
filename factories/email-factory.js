/**
 * Factory: EmailFactory
 */
angular.module('EmailApp')
  .factory('EmailFactory', function EmailFactory ($q, $http, $routeParams) {
    var exports = {};

    exports.reply = function (message) {
      if (message) {
        alert('Reply content: ' + message);
      }
    };

    exports.getMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('messages/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    return exports;
  });