//alert("Login controller loaded!");

steroids.view.navigationBar.show("Login");
steroids.tabBar.hide();

localStorage.setItem("loggedIn", "false");
var loggedIn = localStorage.getItem("loggedIn");

function login()
{
	var username = document.querySelector("#username").value;
	var password = document.querySelector("#password").value;
	var error = document.querySelector("#error");

	if (username == "Oli" && password == "foundee")
	{
		error.textContent = "Login Successful!";
		localStorage.setItem("loggedIn", "true");
		localStorage.setItem("username", username);
		redirect();
	}
	else
	{
		error.textContent = "Invalid Username/Password!";
	}
}

function redirect()
{
	var streamView = new steroids.views.WebView("../views/stream/index.html");
	streamView.preload({},{
		onSuccess: function() {
			steroids.layers.replace(streamView);
		}
	});
}