function displayOnPasswordChange(password) {
    document.getElementById("screen").innerHTML = password;
}

function addKeytoPassword(passsword, key) {
    return passsword + key;
}

function removeLastKey(word) {
    return word.slice(0, -1);
}

function checkPassword(item, password) {
    if (item == password) {
        alert("Correct Password");
    } else {
        alert("Wrong Password");
    }
}


let choiceNumber = "";
const password = "1234";
const key = document.querySelectorAll('.pin--login__key');

for (let i = 0; i < key.length; i++) {

    key[i].addEventListener('click', function (e) {
        const item = e.target.innerHTML;

        if (item === "rm") {

            choiceNumber = removeLastKey(choiceNumber);
        }
        else if (item === "ok") {

            checkPassword(choiceNumber, password)

        } else {
            choiceNumber = addKeytoPassword(choiceNumber, item);
           
        }
        displayOnPasswordChange(choiceNumber)
    });

}


