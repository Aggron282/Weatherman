
  var username = document.querySelector("#name_login");
  var password = document.querySelector("#password");

  var login_button = document.querySelector(".login_button");
  var login_form = document.querySelector(".login_form_action");

  login_button.addEventListener("click",(e)=>{
    e.preventDefault();
    Login(username.value,password.value);
  });

  login_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    Login(username.value,password.value);
  });

  function Login(username,password)
  {

    axios.post("/login",{username:username,password:password}).then((data)=>{

      var result = data.data;

      if(!result){
        alert("Wrong Username or Password")
      }
      else{
        localStorage.setItem("user", result);
        window.location.assign("/");
      }

    }).catch((err)=>{console.log(err)});

  }
