//selectors

let lakersEl = document.getElementById("lakers-el")
let trevorEl = document.getElementById("trevor-el")
let resetLakersScore = document.getElementById("reset-lakers-score");
let resetTrevorScore = document.getElementById("reset-trevor-score");
let lakersCount = 0
let trevorCount = 0



//home click-button

function clickPlus1() {
   lakersCount += 1
   lakersEl.textContent = lakersCount
   lakersEl.style.color = "brown"
}

function clickPlus2() {
    lakersCount += 2
    lakersEl.textContent = lakersCount
    lakersEl.style.color = "brown"
}

function clickPlus3() {
    lakersCount += 3
    lakersEl.textContent = lakersCount
    lakersEl.style.color = "brown"
}
 
resetLakersScore.addEventListener("click", function () {
    lakersEl.textContent = 0;
    lakersCount = 0
  });




//guest click-button

function clickadd1() {
    trevorCount += 1
    trevorEl.textContent = trevorCount
    trevorEl.style.color = "brown"
}

function clickadd2() {
    trevorCount += 2
    trevorEl.textContent = trevorCount
    trevorEl.style.color = "brown"
}

function clickadd3() {
    trevorCount += 3
    trevorEl.textContent = trevorCount
    trevorEl.style.color = "brown"
}


resetTrevorScore.addEventListener("click", function () {
    trevorEl.textContent = 0;
    trevorCount = 0
  });




