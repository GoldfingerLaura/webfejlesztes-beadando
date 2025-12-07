const form = document.getElementById("fullform");

const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formTelszam = document.getElementById("telszam");
const formTelephely = document.getElementById("telephely");
const formLeiras = document.getElementById("leiras");
const formTerms = document.getElementById("aszf");


const formNameError = document.getElementById("nameerror");
const formEmailError = document.getElementById("emailerror");
const formTelszamError = document.getElementById("telszamerror");
const formTelephelyError = document.getElementById("telephelyerror");
const formLeirasError =document.getElementById("leiraserror");
const formTermsError = document.getElementById("termserror");


form.addEventListener("submit", function(event) {
    let isValid = true;

    const errors = document.querySelectorAll(".error");
    errors.forEach(element => element.textContent = "");
    const inputs = document.querySelectorAll("input, select, textarea");

    if (formName.value === "") {
        formNameError.textContent = "A név megadása kötelező!";
        isValid = false;
    };

    if (formEmail.value === "") {
        formEmailError.textContent = "Az email-cím megadása kötelező!";
        isValid = false;
    };

    if (Number(formTelszam.value.length) != 9 ) {
        formTelszamError.textContent = "A 9 számjegyes telefonszám megadása kötelező!";
        isValid = false;
    };

    if (formTelephely.value === "") {
        formTelephelyError.textContent = "A telephely megadása kötelező!";
        isValid = false;
    };

    if (formLeiras.value.length > 200) {
        formLeirasError.textContent = "A leírás túl hosszú!";
        isValid = false;
    };

    if (!formTerms.checked) {
        formTermsError.textContent = "El kell fogadnia a felhasználási feltételeket!";
        isValid = false;
    };

    if (!isValid) {
        event.preventDefault(); // Megállítjuk a küldést, ha hiba van
        console.log("Hiba az űrlapon!");
    } else {
        // Ha minden OK, engedjük tovább a httpbin-re
        console.log("Minden adat rendben, küldés...");
    }

})

