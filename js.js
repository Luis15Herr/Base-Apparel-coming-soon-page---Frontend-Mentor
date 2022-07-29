let input = document.querySelector(".form__input");
let toast = document.getElementById("toast");

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    validateEmail();
  }
});

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    document.querySelector(".form").classList.remove("error");
    toast.className = "show";
    setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
    return true;
  }
  document.querySelector(".form").classList.add("error");
  return false;
}
