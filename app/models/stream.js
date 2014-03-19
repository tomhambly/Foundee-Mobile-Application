//alert("Stream model loaded!");

// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if (typeof angular == 'undefined') {
	return;
};


var module = angular.module('StreamModel', ['restangular']);

module.factory('StreamRestangular', function(Restangular) {

  return Restangular.withConfig(function(RestangularConfigurer) {

    RestangularConfigurer.setBaseUrl('http://localhost/data');
    RestangularConfigurer.setRequestSuffix('.json');
    RestangularConfigurer.setRestangularFields({
      id: "stream_id"
    });

  });

});


})();