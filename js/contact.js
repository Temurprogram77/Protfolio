const form = document.getElementById("form");
const userName = document.getElementById("username");
const surName = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const replacePassword = document.getElementById("replace_password");
let inputT = document.querySelectorAll(".inp");

function func() {
  for (let i = 0; i < arr.length; i++) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailRegEx = /[a-z0-9]{6,12}@gmail/;
      const passwordRegEx = /^[0-9]{8,12}$/;
      const nameRegEx = /[a-zA-Z]/;
      let emailValue = email.value;
      let passwordValue = password.value;
      if (
        userName.value == "" ||
        surName.value == "" ||
        email.value == "" ||
        password.value == "" ||
        replacePassword.value == ""
      ) {
        alert("Malumotlar To'liq emas.");
      } else {
        if (
          emailRegEx.test(emailValue) &&
          passwordRegEx.test(passwordValue) &&
          replacePassword.value == password.value
        ) {
          alert("Malumotlar qabul qilindi😊. Malumot uchun rahmat.👌");
          userName.value = "";
          surName.value = "";
          email.value = "";
          password.value = "";
          replacePassword.value = "";
        } else {
          alert("Malumotlar qabul qilinmadi😒");
        }
      }
    });
  }
}

func();
