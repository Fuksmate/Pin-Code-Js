function displayOnPasswordChange(password) {
    document.getElementById("screen").innerHTML = password;
}

function addKeytoPassword(passsword, key) {
    return passsword + key;
}

function removeLastKey(word) {
    return word.slice(0, -1);
}

function clearScreen() {
    setTimeout(() => {
        displayOnPasswordChange(" ")
        choiceNumber = "";
    }, 1000);
}

function checkPassword(item, password) {
    clearScreen()
    return choiceNumber = item === password ? "Correct Password" : "Incorrect Password";
}

let choiceNumber = "";
const password = "1234";
const key = document.querySelectorAll('.pin--login__key');

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener('click', function (e) {
        const item = e.target.innerHTML;

        if (item === "rm") {
            choiceNumber = removeLastKey(choiceNumber);
            displayOnPasswordChange(choiceNumber)
        }
        else {
            const isOkay = (item === "ok")
            const checkPasswords = (choiceNumber.length === password.length) ? checkPassword(choiceNumber, password) : false;
            const addKey = (choiceNumber.length < password.length) ? choiceNumber = addKeytoPassword(choiceNumber, item) : false;

            isOkay ? checkPasswords : addKey;

            displayOnPasswordChange(choiceNumber)

        }

    });

}