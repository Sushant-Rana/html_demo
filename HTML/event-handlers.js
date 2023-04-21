
const searchBox = document.getElementById('search');
const cards = document.querySelectorAll('.card');

searchBox.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.card-text h3').textContent.toLowerCase();
    if (title.includes(searchText)) {
        card.classList.add('flisterd');
    } else {
      card.classList.remove('flisterd')
      card.classList.add('filtered');
    }
  });
});


const indiaBtn = document.getElementById("india-filter");
const foreignBtn = document.getElementById("foreign-filter");
const cardes = document.querySelectorAll(".card");

function filterCardsByCountry(countryClass) {
  cards.forEach((card) => {
    if (card.classList.contains(countryClass)) {
      card.classList.remove('filtered');
      card.classList.add('flisterd');
    } else {
      card.classList.remove('flisterd');
      card.classList.add('filtered');
    }
  });
  this.style.backgroundColor = '#6b8e23';
}

indiaBtn.addEventListener("click", function () {
  filterCardsByCountry("India");
});

foreignBtn.addEventListener("click", function () {
  filterCardsByCountry("foreign");
});

function resetCards() {
  cards.forEach((card) => {
    card.classList.remove('flisterd');
    card.classList.remove('filtered');
  });
  this.style.backgroundColor = '';
}

indiaBtn.addEventListener('dblclick', resetCards);
foreignBtn.addEventListener('dblclick', resetCards);
