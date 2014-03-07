//alert("Main controller loaded!");

steroids.view.navigationBar.show("Foundee");

function loginModal()
{
	var loginView = new steroids.views.WebView("../views/login/index.html");
	steroids.modal.show(loginView);
}