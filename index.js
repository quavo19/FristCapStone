const humburg = document.querySelector('#MENU');
const popup = document.querySelector('#menupopup');
humburg.addEventListener('click', () => {
  popup.style.display = 'flex';
});
popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

const Load = document.querySelector('.mobile-speakers');

const speakers = [
  {
    image: 'img/speaker1.jpg',
    name: 'Gary Mckinnon',
    about: 'Administrator from Scotland.',
    more: 'He had been in the process for more than one year.',
  },
  {
    image: 'img/Falgun-Rathod.jpg',
    name: 'Falgun-Rathod',
    about: 'student from tokyo.',
    more: 'He had been in the process for more than one year.',
  },
  {
    image: 'img/speaker2.jpg',
    name: 'Donald Mckinnon',
    about: 'Administrator from Scotland.',
    more: 'He had been in the process for more than one year.',
  },
  {
    image: 'img/kevin_mitnick.jpg',
    name: 'Keven Mitnick',
    about: 'Administrator from Scotland.',
    more: 'He had been in the process for more than one year.',
  },
  {
    image: 'img/maxresdefault.jpg',
    name: 'Max',
    about: 'Administrator from Scotland.',
    more: 'He had been in the process for more than one year.',
  },
  {
    image: 'img/speaker3.jpeg',
    name: 'Donald Akite',
    about: 'Administrator from Scotland.',
    more: 'He had been in the process for more than one year.',
  },
];

speakers.forEach((Project) => {
  const content = `
  <div class = "spaeaker-card">
  <div class="speaker">
      <div class="card-img">
          <img src="${Project.image}" alt="">
      </div>
      <div class="card-detail">
          <div class="name">
              <h3>${Project.name}</h3>
          </div>
          <div class="about">
              <p>${Project.about} </p>
          </div>
          <div class="divider">

          </div>
          <div class="more">
              <p>${Project.more} </p>
          </div>
      </div>
  </div>
</div>
    `;
  Load.innerHTML += content;
});