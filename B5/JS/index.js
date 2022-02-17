import login from "./containers/login.js";

const app = document.getElementById("app");
const loginScreen = new login();
app.appendChild(loginScreen.render());
