document.addEventListener("DOMContentLoaded", function () {
// Uso const perchè non ho bisogno di riassegnare queste variabili e perchè mi viene più comodo.
  const form = document.getElementById("riccioForm");
  const nome = document.getElementById("nomeRiccio");
  const eta = document.getElementById("etaRiccio");
  const descrizione = document.getElementById("descrizioneRiccio");
  const foto = document.getElementById("fotoRiccio");
  const erroreNome = document.getElementById("erroreNome");
  const erroreEta = document.getElementById("erroreEta");
  const contatoreNome = document.getElementById("contatoreNome");
  const contatoreDescrizione = document.getElementById("contatoreDescrizione");
  const messaggioFinale = document.getElementById("messaggioFinale");

  // Ho messo un limite di 40 caratteri per il nome.
  nome.addEventListener("input", function () {
    contatoreNome.textContent = nome.value.length + " / 40";
  });

  // Contatore caratteri descrizione. Ho messo un limite di 200 caratteri.
  descrizione.addEventListener("input", function () {
    contatoreDescrizione.textContent = descrizione.value.length + " / 200";
  });

  // Anteprima immagine
  foto.addEventListener("change", function () {
    const file = foto.files[0];
    const container = document.getElementById("previewContainer");
    container.innerHTML = "";
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.width = "200px";
        img.style.marginTop = "15px";
        img.style.borderRadius = "20px";
        container.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });

  // Validazione dell'input
  form.addEventListener("submit", function (event) {
    let valido = true;
    erroreNome.textContent = "";
    erroreEta.textContent = "";
    messaggioFinale.textContent = "";
    if (nome.value.trim().length < 2) {
      erroreNome.textContent = "Il nome deve avere almeno 2 caratteri.";
      valido = false;
    }
    if (eta.value && (eta.value < 0 || eta.value > 10)) {
      erroreEta.textContent = "Inserisci un'età valida (0-10).";
      valido = false;
    }
    if (!valido) {
      event.preventDefault();
    } else {
      event.preventDefault();
      messaggioFinale.textContent = "Dati inviati con successo! 🦔✨";
      form.reset();
      contatoreNome.textContent = "0 / 40";
      contatoreDescrizione.textContent = "0 / 200";
      document.getElementById("previewContainer").innerHTML = "";
    }
  });
});