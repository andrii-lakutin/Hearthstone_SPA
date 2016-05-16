//............Registration.................................................
 
var	login = document.querySelector('.login'),
	inputLogin  = document.getElementById('inputLogin'),
	inputPassword  = document.getElementById('inputPassword'),
	wordLogin  = document.getElementById('wordLogin'),
	wordPassword  = document.getElementById('wordPassword'),
	buttonForLogin  = document.getElementById('buttonForLogin'),
	buttonForPassword  = document.getElementById('buttonForPassword'),
	input1,
	input2,
	loginStorage = localStorage.getItem("Login"),
    passStorage = localStorage.getItem("Password");


login.addEventListener('click', function one(){
    login.classList.add('loginActivated');                                                     
    inputLogin.classList.add('db'); 
    wordLogin.classList.add('db');
    buttonForLogin.classList.add('db');
    setTimeout( function(){
    inputLogin.classList.add('inputLoginAppearance');  
       },500);      
    wordLogin.classList.add("wordLoginAnim");   
    login.removeEventListener('click', one);
});

buttonForLogin.addEventListener('click', function(){
	input1 = inputLogin.value;
	localStorage.setItem("Login", input1);
	inputLogin.classList.add('inputLoginSlideUp');
	setTimeout( function(){
         inputLogin.classList.add('borderDisapear');  
         inputLogin.classList.remove('db');
     },680);   
	wordLogin.classList.add('DisapearByOpacity');
	setTimeout( function(){
       inputPassword.classList.add('db');
       wordPassword.classList.add('db');
     },650);  
	inputPassword.classList.add('inputPasswordAnim');
	wordPassword.classList.add('wordPasswordAnim');
	buttonForLogin.classList.remove('db');
	buttonForPassword.classList.add('db');
	buttonForPassword.classList.add('buttonForPasswordAnim');
});

inputLogin.addEventListener('focus', function(){
	wordLogin.classList.add('FlyUp');
	inputLogin.classList.add('BecomeActive');
	buttonForLogin.classList.add('GrowUp');
	inputLogin.value = "" + loginStorage + "";
});

inputPassword.addEventListener('focus', function(){
	wordPassword.classList.add('FlyUp');
	inputPassword.classList.add('BecomeActive');
	buttonForPassword.classList.add('GrowUp');
	inputPassword.value = "" + passStorage + ""; 
});


buttonForPassword.addEventListener('click', function(){
	input2 = inputPassword.value;                      
    localStorage.setItem("Password", input2);
    buttonForPassword.classList.remove('db');
    inputPassword.classList.remove('db');
    wordPassword.classList.remove('db');
    login.classList.remove('loginActivated');
    login.innerHTML = ''+ input1 + ' here';

	var xmlhttp = new XMLHttpRequest();
	var url = "Autentification.json";

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        myFunction(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(json) {
	    if (input1 == json.loginAsAdmin && input2 == json.password){
            alert('Hey Admin');
        };
	}
});