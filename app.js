const wrapper = document.querySelector(".extensionWrapper");
const buttonAll = document.querySelector(".btn1");
const buttonActive = document.querySelector(".btn2");
const buttonInactive = document.querySelector(".btn3");
const buttonRemove = document.querySelector(".btnRemove");
const buttonSwitch = document.querySelector(".switch");

const extensions = [
  {
    id: 1,
    logo: "./images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: 2,
    logo: "./images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 3,
    logo: "./images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 4,
    logo: "./images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 5,
    logo: "./images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 6,
    logo: "./images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 7,
    logo: "./images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 8,
    logo: "./images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 9,
    logo: "./images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: 10,
    logo: "./images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 11,
    logo: "./images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

// 5 steps to create an element or a tag from js and add it to html
// step 1: create the element or tag
// const el = document.createElement("h1")
// step 2: give the created element a classname(option)
// el.classList.add("newelement")
// step 3: create the content you want to add to the new element
// elContent= "i have just been added with js"
// step 4: add the content to the created element
// el.innerHtml=elContent
// step 5: add the created element t0 html
// wrapper.appendChild(el)

// function to create card
function createCard(item) {
  card = document.createElement("div");
  card.classList.add("extensionCard");
  cardContent = `
    <div class="extensionCardTop">
              <img src=${item.logo} alt="logo-devlens" />
              <div class="cardContent">
                <h4>${item.name}</h4>
                <p>
                  ${item.description}
                </p>
              </div>
            </div>
             <div class="cardToggle">
              <button class="btnRemove">Remove</button>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>

    `;
  card.innerHTML = cardContent;
  wrapper.appendChild(card);
}
extensions.map(function (item) {
  return createCard(item);
});
// function active(item) {
//   extensions
//     .filter((item) => {
//       return item.isActive === true;
//     })
//     .map(function (item) {
//       return createCard(item);
//     });
// }
// function inActive(item) {
//   extensions
//     .filter((item) => {
//       return item.isActive !== true;
//     })
//     .map(function (item) {
//       return createCard(item);
//     });
// }

// function allCards(item) {
// extensions.map(function (item) {
//   return createCard(item);
// });
// }

buttonAll.addEventListener("click", function () {
   wrapper.replaceChildren();
  extensions.map(function (item) {
    return createCard(item);
  });
});
buttonActive.addEventListener("click", function () {
  wrapper.replaceChildren();
  extensions

    .filter((item) => {
      return item.isActive === true;
    })
    .map(function (item) {
      return createCard(item);
    });
});
buttonInactive.addEventListener("click", function () {
   wrapper.replaceChildren();
  extensions
    .filter((item) => {
      return item.isActive !== true;
    })
    .map(function (item) {
      return createCard(item);
    });
});

buttonRemove.addEventListener("click", function () {
  return extensions.filter((item) => extensions.id !== item.id);
});
