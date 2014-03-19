//alert("Stream controller loaded!");

//steroids.view.navigationBar.show("Stream");
steroids.tabBar.show();

var refreshButton = new steroids.buttons.NavigationBarButton();
refreshButton.imagePath = "/icons/refresh@2x.png"
refreshButton.onTap = function()
	{
		document.location.reload();
	}

var newPostButton = new steroids.buttons.NavigationBarButton();
newPostButton.imagePath = "/icons/pencil@2x.png"
newPostButton.onTap = function()
	{
		newPostView = new steroids.views.WebView("/views/post/index.html");
		steroids.layers.push(newPostView);
	}

steroids.view.navigationBar.update({
	title: "Stream",
	overrideBackButton: true,
	buttons: {
		left: [refreshButton],
		right: [newPostButton]
	}
});

var loggedIn = localStorage.getItem("loggedIn");
var username = localStorage.getItem("username");

var streamApp = angular.module('streamApp', ['StreamModel', 'hmTouchevents']);


// Index: http://localhost/views/stream/index.html

streamApp.controller('IndexCtrl', function ($scope, StreamRestangular) {

	// Helper function for opening new webviews
	$scope.open = function(id) {
		webView = new steroids.views.WebView("/views/stream/show.html?id=" + id);
		steroids.layers.push(webView);
	};

	// Fetch all objects from the local JSON (see app/models/posts.js)
	$scope.streams = StreamRestangular.all('stream').getList();

	// -- Native navigation
	//steroids.view.navigationBar.show("Posts index");

});


// Show: http://localhost/views/stream/show.html?id=<id>

streamApp.controller('ShowCtrl', function ($scope, $filter, StreamRestangular) {

	// Fetch all objects from the local JSON (see app/models/stream.js)
	StreamRestangular.all('stream').getList().then( function(streams) {
		// Then select the one based on the view's id query parameter
		$scope.stream = $filter('filter')(streams, {stream_id: steroids.view.params['id']})[0];
	});

	// -- Native navigation
	//steroids.view.navigationBar.show("Item: " + steroids.view.params.id);
	steroids.view.navigationBar.update({
		title: "Post " + steroids.view.params.id,
		overrideBackButton: false,
		buttons: {
			left: [],
			right: []
		}
	});

});