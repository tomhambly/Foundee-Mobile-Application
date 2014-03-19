//alert("User controller loaded!");

steroids.view.navigationBar.show("User");

var loggedIn = localStorage.getItem("loggedIn");
//localStorage.setItem("username", "Oli");
var username = localStorage.getItem("username");

function onload()
{
	userWelcome.textContent = "Hello " + username;
}

function logout()
{
	localStorage.setItem("loggedIn", "false");
	steroids.tabBar.selectTab({
			index: 0
		},
		{
			onSuccess: function() {
				alert("Tab selected");
		},
			onFailure: function() {
				alert("Failed to select tab.");
		}
	});
}