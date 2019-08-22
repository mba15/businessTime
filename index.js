

  var name = document.getElementById("Name");
  var email = document.getElementById("Email");
  var country = document.getElementById("Country");
  var involved = document.getElementById("involved")
  var submit = document.getElementById("submit");
  var form = document.getElementById("form");
  
  var output = {};
      

  
  var submitForm = function () {
    alert("Thank you for submiting your information. Someone will be reaching out to you via email soon. ");
  }
  
  
  submit.onclick = submitForm;