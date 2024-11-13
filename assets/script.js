const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


// Stampare tutte le card in pagina

const teamContainerElem = document.querySelector(".team-container");


const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const imgInput = document.getElementById("img");

console.log(teamContainerElem)

const createCard = (member) => {
  const { name, role, img, email } = member;
  return `
      <div class="team-card col-12 col-md-6 col-lg-3 d-flex align-items-center flex-column flex-md-row">
        <div class="card-image mb-3 mb-md-0 col-md-4">
          <img src="${img}" alt="${name}" />
        </div>
        <div class="card-text text-center text-md-start">
          <h3>${name}</h3>
          <p>${role}</p>
          <p><a href="mailto:${email}" class="text-decoration-none text-info">${email}</a></p>
        </div>
      </div>
     `;
};


const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }
  teamContainerElem.innerHTML = items;
  
};
renderTeam();