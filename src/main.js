const keysContainer = document.querySelector(".keys-container");
const inputString = document.querySelector("#input-string");
const message = document.querySelector("#message");

const numbers = "1234567890"
const keys = [];
const correctCode = "1533";

const app = {
    init() {
        this.appendKeys();
        this.addKeyEvents();
    },

    appendKeys() {
        for (let i = 0; i < numbers.length; i++) {
            this.createKey(numbers[i]);
        }
    },
    createKey(number) {
        const key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-" + number);
        key.classList.add(number);
        const keyText = document.createElement("h3");
        keyText.innerHTML = number;
        key.appendChild(keyText);
        keysContainer.appendChild(key);
        keys.push(key);
    },
    addToInputString(number) {
        console.log(inputString.innerHTML.length);
        if (inputString.innerHTML.length < 11) {
            inputString.innerHTML += number;
        }
    },
    submit() {
        if (inputString.innerHTML == correctCode) {
            message.innerHTML = "Success!";
        } else {
            message.innerHTML = "Incorrect."
        }
    },

    addKeyEvents() {
        document.addEventListener("keydown", function(event) {
            if (event.keyCode == 49) {
                keys[0].classList.add("active");
                app.addToInputString(keys[0].classList[2]);
            } else if (event.keyCode == 50) {
                keys[1].classList.add("active");
                app.addToInputString(keys[1].classList[2]);
            } else if (event.keyCode == 51) {
                keys[2].classList.add("active");
                app.addToInputString(keys[2].classList[2]);
            } else if (event.keyCode == 52) {
                keys[3].classList.add("active");
                app.addToInputString(keys[3].classList[2]);
            } else if (event.keyCode == 53) {
                keys[4].classList.add("active");
                app.addToInputString(keys[4].classList[2]);
            } else if (event.keyCode == 54) {
                keys[5].classList.add("active");
                app.addToInputString(keys[5].classList[2]);
            } else if (event.keyCode == 55) {
                keys[6].classList.add("active");
                app.addToInputString(keys[6].classList[2]);
            } else if (event.keyCode == 56) {
                keys[7].classList.add("active");
                app.addToInputString(keys[7].classList[2]);
            } else if (event.keyCode == 57) {
                keys[8].classList.add("active");
                app.addToInputString(keys[8].classList[2]);
            } else if (event.keyCode == 48) {
                keys[9].classList.add("active");
                app.addToInputString(keys[9].classList[2]);
            } else if (event.which == 8) {
                inputString.innerHTML = inputString.innerHTML.substring(0, inputString.innerHTML.length - 1);
            } else if (event.which == 13) {
                app.submit();
            }
            app.submit();
          });
          document.addEventListener("keyup", function(event) {
            if (event.keyCode == 49) {
                keys[0].classList.remove("active");
            } else if (event.keyCode == 50) {
                keys[1].classList.remove("active");
            } else if (event.keyCode == 51) {
                keys[2].classList.remove("active");
            } else if (event.keyCode == 52) {
                keys[3].classList.remove("active");
            } else if (event.keyCode == 53) {
                keys[4].classList.remove("active");
            } else if (event.keyCode == 54) {
                keys[5].classList.remove("active");
            } else if (event.keyCode == 55) {
                keys[6].classList.remove("active");
            } else if (event.keyCode == 56) {
                keys[7].classList.remove("active");
            } else if (event.keyCode == 57) {
                keys[8].classList.remove("active");
            } else if (event.keyCode == 48) {
                keys[9].classList.remove("active");
            }
          });
    },


}

app.init();