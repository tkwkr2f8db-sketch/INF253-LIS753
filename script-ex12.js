const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");
buttons.forEach(function (button) {
 button.addEventListener("click", function () {

    //hide all details divs
details.forEach(function (item) {
    item.hidden = true;
});

  // Find and show the selected program
        const target = button.dataset.target;
        document.getElementById(target).hidden = false;

    });

});

const form = document.querySelector("#registration-form");
const confirmation = document.querySelector("#confirmation-message");
console.log(confirmation);

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#registration-name").value;
    const program = document.querySelector("#registration-program").value; 
    const message = "Thank you, " + name + ", for registering for " + program + ".";
    console.log(message);

    const confirmationMessage = document.querySelector("#confirmation-message");
    confirmationMessage.textContent = message;
    confirmationMessage.hidden = false;
    });