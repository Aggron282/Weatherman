var username = document.querySelector("#username_login");
var password = document.querySelector("#password_login");
let name = document.getElementById("name_login").value;
var login_button = document.querySelector(".login_button");
var login_form = document.querySelector(".login_form_action");

login_button.addEventListener("click",(e)=>{
  SubmitAccount(e);
});

login_form.addEventListener("submit",(e)=>{
  SubmitAccount(e);
});


function SubmitAccount(e){

  e.preventDefault();

  if(username.value.length > 0 && password.value.length > 0){
    CreateAccount(username.value,password.value,"");
  }else{
    alert("Must Enter Valid Values");
  }

}


function CreateAccount(username,password,name){

  axios.post("/create_account",{username:username,password:password,name:name}).then((data)=>{

    var user = data.data;

    if(user){
      localStorage.setItem("user", user);
      window.location.assign("/");
    }else{
      alert("Error")
    }

  }).catch((err)=>{console.log(err)});

}
