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
 
 
  function kiszamolMaximum() {
    let listaElemek = document.querySelectorAll("#szamLista li");
    let szamok = Array.from(listaElemek).map(li => parseInt(li.textContent));
 
    if (szamok.length > 0) {
      let maximum = Math.max(...szamok);
      document.getElementById("maximumEredmeny").textContent = `A legnagyobb szám: ${maximum}`;
    } else {
      document.getElementById("maximumEredmeny").textContent = "Nincs elérhető szám a listában.";
    }
  }