function sendEmail() {
	var mail = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	Email.send({
		Host: "smtp.gmail.com",
		Username: "your@gmail.com",
		Password: "your password",
		To: mail,
		From: "your@gmail.com",
		Subject: "hello "+ name,
		Body: "Welcome in Photot Studio, We got your message we will contact you.",
	}).then(
		message => alert("mail sent successfully")
	);
}
// scroll page nav hide show
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if(currentScrollPos <= 56){
				document.getElementById("sticky").style.display = "none";
		}else {
				document.getElementById("sticky").style.display = "flex";
				
		}
	}
// go to top
	$(document).ready(function() {
		$(window).scroll(function() {
			if($(this).scrollTop()) {
				$('#toTop').fadeIn();
			}else {
				$('#toTop').fadeOut();
			}
		});
		$("#toTop").click(function () {
			$("html, body").animate({scrollTop: 0}, 1000);
		});
	});