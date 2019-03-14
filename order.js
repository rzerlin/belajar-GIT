var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  /*slides[slideIndex-1].style.display = "block";*/ 
/*  dots[slideIndex-1].className += " active";*/
}

document.getElementById('order-form')
.onsubmit = function(e)
{
  e.preventDefault();
  var itemname = document.getElementById('itemname').value;
  var qty = document.getElementById('qty').value;
  var name = document.getElementById('name').value;
  var phonenumber = document.getElementById('phonenumber').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('Shipping').value;
  var male = document.getElementById('male-radio').checked;
  var female = document.getElementById('female-radio').checked;
  var agree = document.getElementById('agree-check').checked;

  if(itemname==""){
    alert("Please insert Item name");
  }else if(qty==0){
      alert("Quantity must be more than 0");
  }else if(isNaN(qty)){
      alert("Quantity must be numeric");
  }else if(name==""){
    alert("Name must be filled");
  }else if(name.length< 3){
    alert("Name must be more than 3 Characters")
  }
  else if(phonenumber==""){
    alert("Please insert your Phone Number");
  }
  else if(isNaN(phonenumber)){
    alert("Phone number must be numberic")
  }
  else if(phonenumber.length < 11){
    alert("Phone number must be more than 10")
  }
  else if(email==""){
    alert("Email must be filled")
  }
  else if(address==""){
    alert("Address must be filled")
  }
  else if(address.indexOf('Jalan')!=0){
    alert("Address must be start with Jalan")
  }
  else if(city==""){
    alert("Shipping type must be choose")
  }
  else if(male == false && female == false){
    alert("Choose your gender!")
  }else if(agree == false){
   alert("Please check the agreement")
  }else{
    alert("Order Succes!")
    document.getElementById('itemname').value="";
    document.getElementById('qty').value="";
    document.getElementById('name').value="";
    document.getElementById('phonenumber').value="";
    document.getElementById('email').value="";
    document.getElementById('address').value="";
    document.getElementById('Shipping').value="";
    document.getElementById('male-radio').checked="";
    document.getElementById('female-radio').checked="";
    document.getElementById('agree-check').checked="";
  }
}
