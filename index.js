function validateInput() {

    let inputElem = document.getElementById("szamInput");
    let inputValue = inputElem.value.trim();

    if (/^\d+$/.test(inputValue)) {

      inputElem.classList.remove("invalid");
    } else {

      inputElem.classList.add("invalid");
    }
  }

  function hozzaad() {

    let inputElem = document.getElementById("szamInput");
    let inputValue = inputElem.value.trim();

    if (/^\d+$/.test(inputValue)) {

      let listaElem = document.createElement("li");
      listaElem.textContent = inputValue;

      document.getElementById("szamLista").appendChild(listaElem);


      inputElem.value = "";
      inputElem.classList.remove("invalid");
    } else {

      inputElem.classList.add("invalid");
    }
  }