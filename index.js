const featuredSpeakers = [
  {
    picture: 'images/assets/speaker_01.png',
    name: 'Yochai Benkler',
    presentation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
  },
  {
    picture: 'images/assets/speaker_02.png',
    name: 'SohYeong Noh',
    presentation: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
  },
  {
    picture: './images/assets/speaker_03.png',
    name: 'Lila Tretikov',
    presentation: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    picture: './images/assets/speaker_04.png',
    name: 'Kilnam Chon',
    presentation: 'CEO of COWBERY',
    description: "Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
  },
  {
    picture: './images/assets/speaker_05.png',
    name: 'Julia Leda',
    presentation: 'President of Young Pirates of Europe',
    description: "European integration, political democracy and participation of youth trough online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    picture: './images/assets/speaker_06.png',
    name: 'Ryan Merkley',
    presentation: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
];

// Iterate through the array and create a new div for each speaker
featuredSpeakers.forEach((speaker) => {
  const speakerDiv = document.createElement('div');
  speakerDiv.innerHTML = `
    <div class="mx-4 my-10 flex">
    <img class="w-32 h-32" src="${speaker.picture}" alt="${speaker.name}">
    <div class="px-4 flex flex-col justify-between">
        <p class="font-bold text-xl">${speaker.name}</p>
        <p class="text-xs text-[#F04A1C] py-2 md:text-sm">${speaker.presentation}</p>
        <hr class="py-2"/>
        <p class="text-xs md:text-sm">${speaker.description}</p>
    </div>
    </div>
    `;
  document.querySelector('.speakers').appendChild(speakerDiv);
  // Add the speakers to the DOM
  document.querySelector('.speakers').appendChild(speakerDiv);
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('hidden');
  document.querySelector('.hamburger').classList.toggle('hidden');
  document.querySelector('.close-btn').classList.toggle('hidden');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('hidden');
  document.querySelector('.hamburger').classList.toggle('hidden');
  document.querySelector('.close-btn').classList.toggle('hidden');
});
