class inputComponent {
  $containers;
  $lable;
  $input;
  $containersInput;

  // trong input thì có name, id, type để có thể tái sử dụng được
  $name;
  $id;
  $type;
  $error; // trong input thì sẽ có error khi mà cái viadate bị lổi thì sẽ có error.
  // Khởi tạo input
  constructor(lable, name, id, type) {
    this.$containers = document.createElement("div");
    this.$containers.classList.add();

    this.$containersInput = document.createElement("div");
    this.$containersInput.classList.add();

    this.$lable = document.createElement("lable");
    this.$lable.classList.add();
    this.$lable.innerText = lable;

    this.$input = document.createElement("input");
    this.$input.classList.add();
    this.$input.type = type;
    this.$input.id = id;
    this.$input.name = name;

    this.$error = document.createElement("div");
    this.$error.classList.add();
  }
  // vì mình trả về là trả về containers
  // vì containers nó bao gồm cả lable, containersInput;

  render() {
    this.$containers.append(this.$lable, this.$containersInput);
    // trong containerInput có input, id, name, error
    this.$containersInput.append(this.$input, this.$error);
    return this.$containers;
  }
}

export default inputComponent;
