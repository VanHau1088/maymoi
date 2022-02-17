import inputComponent from "../../components/input.js";
import buttonComponent from "../../components/button.js";
import { checkEmail, checkPassword } from "../../common/validation.js";
class loginScreen {
  $email;
  $password;
  $container;

  $image;
  $formLogin;
  $btnSubmit;
  $titleScreen;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("login_form", "d-flex");

    this.$image = document.createElement("div");
    this.$image.classList.add("image");

    this.$formLogin = document.createElement("form");
    this.$formLogin.classList.add("form_Login");
    this.$formLogin.addEventListener("submit", this.handlesubmit);

    this.$titleScreen = document.createElement("div");
    this.$titleScreen.classList.add("title");
    this.$titleScreen.innerText = "Welcome Back";

    this.$email = new inputComponent(
      "Email address",
      "email",
      "login-email",
      "email"
    );

    this.$password = new inputComponent(
      "Password",
      "password",
      "login-password",
      "password"
    );

    this.$btnSubmit = new buttonComponent(
      "Sign in",
      ["btn", "btn-primary", "d-block", "mt-3"],
      "submit"
    );
  }

  handlesubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    const { email, password } = e.target;
    console.log("Email: ", email.value, "Password: ", password.value);
    let isError = false;

    if (checkEmail(email.value) !== null) {
      console.log("Email Lỗi");
      this.$email.serError(checkEmail(email.value));
      isError = true;
    }

    if (checkPassword(password.value) !== null) {
      console.log("Password không hợp lệ");
      this.$password.serError(checkPassword(password.value));
      isError = true;
    }

    if (!isError) {
      console.log("Đăng nhập thành công");
    }
  };

  render() {
    this.$formLogin.append(
      this.$titleScreen,
      this.$email.render(),
      this.$password.render(),
      this.$btnSubmit.render()
    );

    // this.$container.append(this.$email.render(), this.$password.render());
    // return this.$container;
    this.$container.append(this.$image, this.$formLogin);
    return this.$container;
  }
}

export default loginScreen;
