// menu

 $(document).ready(function(){

        $('.mobile-menu').click(function(){

            $(".mobile-dropdown").slideToggle(700);

        });

    });




//Form

var userName = document.getElementById('username');
var	phone	 = document.getElementById('number');
var	email	 = document.getElementById('email');
var	service	 = document.getElementById('service');
var	send	 = document.getElementById('send');
var	output	 = document.getElementById('output');

send.onclick = formValue;

function formValue(){

	var Name = userName.value;
	var Phone= phone.value;
	var Email= email.value;
	var Service = service.value;

	output.innerHTML = "Thank you for booking with us " + Name + "." + "Your number is " + Phone + " and the service that you have chosen is " + Service + "."; 


	return false;
};



