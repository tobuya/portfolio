const menuSection = document.querySelector('#header-section');
const menuAnchor = document.querySelector('.menu');
const navigation = document.querySelector('.toolbar');

const body = document.querySelector('body');
const modalContainer = document.createElement('div');
const popup = document.createElement('div');
const multiPostBtn = document.querySelector('.right-btn');
const cardBtn = document.querySelectorAll('.action');
const multiPostBtnDesktop = document.querySelector('.desktop-btn');
const cardBtnDesktop = document.querySelector('.desktop-project-btn');
const multiPostSection = document.querySelector('.right-block');
const listProjects = document.querySelectorAll('.group');

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

const cross = document.createElement('a');
cross.classList.add('cross-icon');
const crossImg = document.createElement('img');
crossImg.src = 'images/icon-cross.svg';
crossImg.alt = 'Close Icon';
cross.appendChild(crossImg);
mobileMenu.appendChild(cross);

const ul = document.createElement('ul');
ul.id = 'ul';
mobileMenu.appendChild(ul);

const portfolio = document.createElement('li');
ul.appendChild(portfolio);
portfolio.classList.add('menu-container');
const portfolioLink = document.createElement('a');
portfolio.appendChild(portfolioLink);
portfolioLink.textContent = 'Portfolio';
portfolioLink.href = '#portfolio';
portfolioLink.classList.add('menu-text');

const about = document.createElement('li');
ul.appendChild(about);
about.classList.add('menu-container');
const aboutLink = document.createElement('a');
about.appendChild(aboutLink);
aboutLink.textContent = 'About';
aboutLink.href = '#information';
aboutLink.classList.add('menu-text');

const contact = document.createElement('li');
ul.appendChild(contact);
contact.classList.add('menu-container');
const contactLink = document.createElement('a');
contact.appendChild(contactLink);
contactLink.textContent = 'Contact';
contactLink.href = '#contact-me';
contactLink.classList.add('menu-text');

function displayMobileMenu() {
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  main.classList.add('index');
  footer.classList.add('index');
  menuSection.innerHTML = '';
  menuSection.appendChild(mobileMenu);
}

function removeMobileMenu() {
  menuSection.replaceChild(navigation, mobileMenu);
}

function displayPortfolioSection() {
  mobileMenu.classList.remove('mobile-menu');
  removeMobileMenu();
  window.location.reload(true);
}

menuAnchor.addEventListener('click', displayMobileMenu);
portfolioLink.addEventListener('click', displayPortfolioSection);
aboutLink.addEventListener('click', displayPortfolioSection);
contactLink.addEventListener('click', displayPortfolioSection);
cross.addEventListener('click', displayPortfolioSection);

// window.addEventListener('load', () => {
//   listProjects.forEach((group) => {
//     group.innerHTML = `
//     <h2 class="group-header hide">Profesional Art <br> Printing Data</h2>
//     <p class="group-para hide">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
//     <div>
//         <ul class="group-ul hide">
//             <li class="group-li">html</li>
//             <li class="bootstrap group-li">bootstrap</li>
//             <li class="group-li">Ruby</li>
//         </ul>
//     </div>
//     `;
//   });
// });

// popup
const projects = [
  {
    projectName: 'E-Learning Academy',
    description: 'E-learning platform where users can reserve online classes to schedule study sessions with learners in their area',
    featuredImage: 'stories.svg',
    technologies: ['React', 'Redux', 'Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/e-learning-academy',
    seeLiveText: 'See Live',
    seeLiveImg: 'see-live.svg',
    seeSourceText: 'See Source',
    seeSourceImg: 'see-source.svg',
    closeIcon: 'icon-cross.svg',
  },
  {
    projectName: 'Kitchen Genie',
    description: 'Kitchen Genie is a recipe sharing web app that helps home cooks find inspiration and get organized in the kitchen.',
    featuredImage: 'cardwork.svg',
    technologies: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/kitchen-genie',
  },
  {
    projectName: 'Space Travelers Hub',
    description: 'This application is based on real life data from SpaceX API. It allows users to book a rocket and join a selected mission.',
    featuredImage: 'cardwork.svg',
    technologies: ['React', 'Redux', 'React Bootstrap'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/space_travelers_hub',
  },
  {
    projectName: 'Budget Tracker',
    description: 'This application help users manage their budgets, users have a list transactions associated with a category so that they can see how much money they have spent and on what.',
    featuredImage: 'cardwork.svg',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'CSS'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/budget_tracker',
  },
  {
    projectName: 'Post Streams',
    description: 'This application show users a list of posts and empower them to interact with them by adding comments and liking posts',
    featuredImage: 'cardwork.svg',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'CSS'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/post_stream',
  },
  {
    projectName: 'Soccer Hub',
    description: 'This application uses ScoreBat API to allow users to watch recent official highlights of the Premier League, Champions League, La Liga, Serie A, Europa League and many more matches of your favorite football leagues.',
    featuredImage: 'cardwork.svg',
    technologies: ['React', 'Redux', 'CSS'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/kitchen-genie',
  },
  {
    projectName: 'Data Science <br> Exhibition',
    description: 'This is a Capstone project about AI and Big Data Exhibition. Users can interact with the app and test its features.',
    featuredImage: 'cardwork.svg',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    live: 'https://tobuya.github.io/Portfolio/',
    source: 'https://github.com/tobuya/Data-Science-Exhibition',
  },
];

window.addEventListener('load', () => {
  let languages = '';
  projects[0].technologies.forEach((language) => {
    languages += `
    <li class="group-li">${language}</li>
    `;
  });
  multiPostSection.innerHTML = `
  <h2 class="block-h2">${projects[0].projectName}</h2>
  <p class="block-p">${projects[0].description}</p>
  <div class="block-nav">
      <ul>
         ${languages}
      </ul>
  </div>
  `;
  multiPostSection.append(multiPostBtn);
  multiPostSection.append(multiPostBtnDesktop);
});

listProjects.innerHTML = '';
for (let i = 1; i < projects.length; i++) {
  let languages = '';
  projects[i].technologies.forEach((language) => {
    languages += `
    <li class="group-li">${language}</li>
    `;
  });
  listProjects[i].innerHTML = `
  <div>
    <h2 class="group-header hide">${projects[i].projectName}</h2>
    <p class="group-para hide">${projects[i].description}</p>
    <ul class="group-ul hide">
        ${languages}
    </ul>
    <button type='button' class="action">See this Project<i class="fa fa-arrow-right"></i></button>
  </div>
   `;
}

// function multiPostStories() {
//   body.classList.add('body');
//   modalContainer.classList.add('modal-container');
//   popup.classList.add('popup');
//   popup.innerHTML = `
//   <a class='popup-close-link'>
//     <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
//   </a>
//   <h3 class='popup-h3'>${projects[0].projectName}</h3>
//   <ul class='popup-ul'>
//     <li>${projects[0].technologies[0]}</li>
//     <li>${projects[0].technologies[1]}</li>
//     <li>${projects[0].technologies[2]}</li>
//   </ul>
//   <img class='popup-img' src='images/${projects[0].featuredImage}' alt='Multi Post Stories'>
//   <p class='popup-description'>${projects[0].description}</p>
//   <div class='popup-btn-container'>
//       <button>
//         <p class='see-text'>${projects[0].seeLiveText}</p>
//         <a href='${projects[0].live}'>
//           <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
//         </a>
//       </button>
//       <button>
//         <p class='see-text'>${projects[0].seeSourceText}</p>
//         <a href='${projects[0].source}'>
//           <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
//         </a>
//       </button>
//   </div>
//   `;
//   modalContainer.appendChild(popup);
//   body.appendChild(modalContainer);

//   const close = document.querySelector('.popup-close-link');
//   close.addEventListener('click', () => {
//     window.location.reload(true);
//   });
// }

// function artPrintingData() {
//   body.classList.add('body');
//   modalContainer.classList.add('modal-container');
//   popup.classList.add('popup', 'modal-container-art');
//   popup.innerHTML = `
//   <a class='popup-close-link'>
//     <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'>
//   </a>
//   <h3 class='popup-h3 art-h3'>${projects[1].projectName}</h3>
//   <p class='popup-description art-description'>${projects[1].description}</p>
//   <ul class='popup-ul art-ul'>
//     <li>${projects[1].technologies[0]}</li>
//     <li>${projects[1].technologies[1]}</li>
//     <li>${projects[1].technologies[2]}</li>
//   </ul>
//   <div class='popup-btn-container'>
//       <button>
//         <p class='see-text'>${projects[0].seeLiveText}</p>
//         <a href='${projects[1].live}'>
//           <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
//         </a>
//       </button>
//       <button>
//         <p class='see-text'>${projects[0].seeSourceText}</p>
//         <a href='${projects[1].source}'>
//           <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
//         </a>
//       </button>
//   </div>
//   `;
//   modalContainer.appendChild(popup);
//   body.appendChild(modalContainer);

//   const close = document.querySelector('.popup-close-link');
//   close.addEventListener('click', () => {
//     window.location.reload(true);
//   });
// }

// multiPostBtn.addEventListener('click', multiPostStories);

// cardBtn.forEach((card) => {
//   card.addEventListener('click', artPrintingData);
// });

// function desktopPopup() {
//   body.classList.add('body');
//   modalContainer.classList.add('modal-container');
//   popup.classList.add('desktop-popup');
//   popup.innerHTML = `
//     <a class='popup-close-link'>
//       <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
//     </a>
//     <h3 class='desktop-popup-h3'>${projects[2].projectName}</h3>
//     <ul class='desktop-popup-ul'>
//       <li>${projects[2].technologies[0]}</li>
//       <li>${projects[2].technologies[1]}</li>
//       <li>${projects[2].technologies[2]}</li>
//     </ul>
//     <img class='desktop-popup-img' src='images/${projects[2].featuredImage[0]}' alt='Multi Post Stories'>
//     <p class='desktop-popup-description'>${projects[2].description}</p>
//     <div class='popup-btn-container desktop-btn-div'>
//     <button>
//       <p class='see-text'>${projects[0].seeLiveText}</p>
//       <a href='${projects[0].live}'>
//         <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
//       </a>
//     </button>
//     <button>
//       <p class='see-text'>${projects[0].seeSourceText}</p>
//       <a href='${projects[0].source}'>
//         <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
//       </a>
//     </button>
// </div>
//    `;
//   modalContainer.appendChild(popup);
//   body.appendChild(modalContainer);

//   const close = document.querySelector('.popup-close-link');
//   close.addEventListener('click', () => {
//     window.location.reload(true);
//   });
// }

// multiPostBtnDesktop.addEventListener('click', desktopPopup);

// function desktopCardPopup() {
//   body.classList.add('body');
//   modalContainer.classList.add('modal-container');
//   popup.classList.add('desktop-card-popup');
//   popup.innerHTML = `
//   <a class='popup-close-link'>
//     <img class='popup-close-icon' src='images/${projects[0].closeIcon}' alt='Close Icon'/>
//   </a>
//   <img class='desktop-card-img' src='images/${projects[2].featuredImage[1]}' alt='Multi Post Stories'>
//   <div class='popup-btn-container desktop-btn-div desktop-card-div'>
//       <button>
//         <p class='see-text'>${projects[0].seeLiveText}</p>
//         <a href='${projects[0].live}'>
//           <img src='images/${projects[0].seeLiveImg}' alt='See Live Icon'>
//         </a>
//       </button>
//       <button>
//         <p class='see-text'>${projects[0].seeSourceText}</p>
//         <a href='${projects[0].source}'>
//           <img src='images/${projects[0].seeSourceImg}' alt='GitHub Icon'>
//         </a>
//       </button>
//   </div>
//   `;
//   modalContainer.appendChild(popup);
//   body.appendChild(modalContainer);

//   const close = document.querySelector('.popup-close-link');
//   close.addEventListener('click', () => {
//     window.location.reload(true);
//   });
// }
// cardBtnDesktop.addEventListener('click', desktopCardPopup);

// Form validation
function validateEmail() {
  const emailAddress = document.getElementById('mail').value;
  const regularExp = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = (e) => {
    if (regularExp.test(emailAddress)) {
      document.getElementById('error-message').innerHTML = '';
    } else {
      document.getElementById('error-message').innerHTML = 'Please enter the email in lower case';
      document.getElementById('error-message').style.color = 'red';
      e.preventDefault();
    }
  };
}
document.getElementById('button').addEventListener('click', validateEmail);

// Local Storage
const form = document.querySelector('form');
const userName = document.getElementById('fname');
const userEmail = document.getElementById('mail');
const userMessage = document.getElementById('textarea');

form.addEventListener('input', () => {
  const userFormData = {
    username: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('userData', JSON.stringify(userFormData));
});

const GetDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
userName.value = GetDataFromLocalStorage.username;
userEmail.value = GetDataFromLocalStorage.email;
userMessage.value = GetDataFromLocalStorage.message;
