class inputComponent {
  $container;
  $lable;
  $containerInput;
  $input;

  $error;
  $name;
  $type;
  $id;
  // Contructor này đơn giản là ta sẽ khởi tạo giá trị cho cái input mà input => name, type, id, lable.
  constructor(lable, name, type, id) {
    this.$container = document.createElement("div");
    this.$container.classList.add("row", "d-flex", "flex-wrap", "mt-4");

    this.$containerInput = document.createElement("div");
    this.$containerInput.classList.add("col-8");

    this.$lable = document.createElement("label");
    this.$lable.classList.add("col-4", "label-input");
    this.$lable.innerText = lable;

    this.$input = document.createElement("input");
    this.$input.classList.add("form-control");
    this.$input.type = type;
    this.$input.name = name;
    this.$input.id = id;

    this.$error = document.createElement("div");
    this.$error.classList.add("error", "mt-2", "d-none");
  }

  serError(message) {
    this.$error.innerText = message;
    this.$error.classList.remove("d-none");
    this.$error.classList.add("d-block");
  }

  render() {
    this.$container.append(this.$lable, this.$containerInput);
    this.$containerInput.append(this.$input, this.$error);

    return this.$container;
  }
}

export default inputComponent;
