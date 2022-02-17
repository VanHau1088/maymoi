import inputComponent from "../components/input.js";
import buttonComponent from "../components/button.js";
class login {
  $email;
  $password;
  $containers;

  $image;
  $formlogin;
  $btnSubit;
  $title;
  constructor(email, password) {
    this.$containers = document.createElement("div");
    this.$containers.classList.add("login-form");

    this.$image = document.createElement("div");
    this.$image.classList.add("image");

    this.$title = document.createElement("div");
    this.$title.classList.add("title");
    this.$title.innerText = "Login";

    this.$formlogin = document.createElement("form");
    this.$formlogin.classList.add("form-login");
    this.$formlogin.addEventListener("submit", this.handlesubmit);

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

    this.$btnSubit = new buttonComponent(
      "Sign in", // text
      ["btn", "btn-primary", "d-block", "mt-3"], // classlist
      "submit" // type
    );
  }

  handlesubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log("Email: ", email.value, "Password: ", password.value);
  };

  render() {
    this.$formlogin.append(
      this.$title,
      this.$email.render(),
      this.$password.render(),
      this.$btnSubit.render()
    );

    this.$containers.append(this.$email.render(), this.$password.render());
    return this.$containers;
  }
}

export default login;
