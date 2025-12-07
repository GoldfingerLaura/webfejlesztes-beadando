let adatok = {
  súly: null,
  faj: null,
  kor: null
};

const app = document.getElementById("eteladagolo");

function kezdogomb() {
  app.innerHTML = `
    <p class="kérdés">Válassz állat típust:</p>
    <button class="válasz" onclick="fajválasztó('kutya')">Kutya</button>
    <button class="válasz" onclick="fajválasztó('macska')">Macska</button>
  `;
}

function fajválasztó(faj) {
  adatok.faj = faj;
  súlyválasztó();
}

function súlyválasztó() {
  if (adatok.faj === "kutya") {
    app.innerHTML = `
    <p class="kérdés">Add meg a kutya testsúlyát:</p>
    <div>
      <button class="válasz" onclick="súlybeállító(1)">1 kg</button>
      <button class="válasz" onclick="súlybeállító(5)">5 kg</button>
      <button class="válasz" onclick="súlybeállító(10)">10 kg</button>
      <button class="válasz" onclick="súlybeállító(15)">15 kg</button>
      <button class="válasz" onclick="súlybeállító(20)">20 kg</button>
      <button class="válasz" onclick="sajátérték()">Más érték</button>
    </div>`;
  } else if (adatok.faj === "macska") {
    app.innerHTML = `
    <p class="kérdés">Add meg a macska testsúlyát:</p>
    <div>
      <button class="válasz" onclick="súlybeállító(1)">1 kg</button>
      <button class="válasz" onclick="súlybeállító(2)">2 kg</button>
      <button class="válasz" onclick="súlybeállító(3)">3 kg</button>
      <button class="válasz" onclick="súlybeállító(4)">4 kg</button>
      <button class="válasz" onclick="súlybeállító(5)">5 kg</button>
      <button class="válasz" onclick="sajátérték()">Más érték</button>
    </div>`;
  } 
}

function súlybeállító(kg) {
  adatok.súly = kg;
  korválasztó();
}

function sajátérték() {
  let kg = prompt("Add meg a testsúlyt kg-ban:");
  kg = parseFloat(kg);
  
  if (isNaN(kg) || kg <= 0) {
    alert("Kérlek, adj meg érvényes testsúlyt!");
  } else {
    adatok.súly = kg;
    korválasztó();
  }
}

function korválasztó() {
  app.innerHTML = `
    <p class="kérdés">Válaszd ki az életkort:</p>
    <button class="válasz" onclick="korbeállító('kolyok')">Kölyök</button>
    <button class="válasz" onclick="korbeállító('felnott')">Felnőtt</button>
    <button class="válasz" onclick="korbeállító('idos')">Idős</button>
  `;
}

function korbeállító(korosztály) {
  adatok.kor = korosztály;
  számolás();
}

function számolás() {
  const { súly, faj, kor } = adatok;

  let dailyRatio = null;

  // Kutya
  if (faj === "kutya") {
    if (kor === "kolyok") {
        dailyRatio = 0.05;
    } else if (kor === "idos") { 
        dailyRatio = 0.02;
    } else { 
        dailyRatio = 0.025;
    }
  };

  // Macska
  if (faj === "macska") {
    if (kor === "kolyok") {
        dailyRatio = 0.06;
    } else if (kor === "idos") {
        dailyRatio = 0.03;
    } else {
        dailyRatio = 0.04;
    }
  };

  const dailyFood = súly * 500 * dailyRatio;

  app.innerHTML = `
    <h3>Eredmény</h3>
    <p class="kérdés">Az állat típusa: ${faj === "kutya" ? "Kutya" : "Macska"}</p>
    <p class="kérdés">Testsúly: ${súly} kg</p>
    <p class="kérdés">Életkor: ${kormegjelenítés(kor)}</p>

    <h3>Ajánlott napi adag: ${Math.round(dailyFood)} g</h3>

    <button onclick="restart()">Újrakezdés</button>
  `;
}

function kormegjelenítés(kor) {
  if (kor === "kolyok") return "Kölyök";
  if (kor === "felnott") return "Felnőtt";
  return "Idős";
}

function restart() {
  adatok = { súly: null, faj: null, kor: null };
  kezdogomb();
}