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

  function kiszamolMinimum() {
    let listaElemek = document.querySelectorAll("#szamLista li");
    let szamok = Array.from(listaElemek).map(li => parseInt(li.textContent));

    if (szamok.length > 0) {
      let minimum = Math.min(...szamok);
      document.getElementById("minimumEredmeny").textContent = `A legkisebb szám: ${minimum}`;
    } else {
      document.getElementById("minimumEredmeny").textContent = "Nincs elérhető szám a listában.";
    }
  }