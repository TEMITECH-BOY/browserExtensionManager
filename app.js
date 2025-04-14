const wrapper = document.querySelector(".extensionWrapper");
const upperContent = document.querySelector(".navTab");
const layoutContainer = document.querySelector(".genLayout"); 

const extensions = [
  {
    logo: "./images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
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
    logo: "./images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

// THEMES
const themes = {
  light: {
    logo: "./images/logo.svg",
    navColor: "hsl(200, 60%, 99%)",
    background: "#ebf4fd",
    color: "hsl(226, 25%, 17%)",
    buttonBackground: "hsl(0, 0%, 93%)",
    themeLogo: "./images/icon-moon.svg",
    cardBackground: "#ffffff",
  },
  dark: {
    logo: "./images/logo.svg",
    navColor: "hsl(225, 23%, 24%)",
    background: "hsl(226, 25%, 17%)",
    color: "hsl(0, 0%, 93%)",
    buttonBackground: "hsl(226, 11%, 37%)",
    themeLogo: "./images/icon-sun.svg",
    cardBackground: "hsl(225, 20%, 25%)",
  },
};

let currentTheme = "light";

// CREATE NAV
function createNav(themeData) {
  const nav_bar = document.createElement("div");
  nav_bar.classList.add("navBar");
  nav_bar.innerHTML = `
    <img src="${themeData.logo}" alt="logo" class="logo-img" />
    <button class="navButton theme-toggle">
      <img src="${themeData.themeLogo}" alt="theme icon" class="theme-icon" />
    </button>
  `;
  upperContent.appendChild(nav_bar);

  // Theme toggle
  const themeToggleBtn = nav_bar.querySelector(".theme-toggle");
  themeToggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
    themeToggleBtn.querySelector("img").src = themes[currentTheme].themeLogo;
  });
}

// CREATE TABS
function createExtensionTabs() {
  const tabsWrapper = document.createElement("div");
  tabsWrapper.classList.add("extensionTabs");
  tabsWrapper.innerHTML = `
    <h3>Extensions List</h3>
    <div class="tabButtons">
      <button class="btn1 active-tab">All</button>
      <button class="btn2">Active</button>
      <button class="btn3">Inactive</button>
    </div>
  `;
  layoutContainer.insertBefore(tabsWrapper, wrapper);
}

// CREATE CARDS
function createCard(item, index) {
  const card = document.createElement("div");
  card.classList.add("extensionCard");

  card.innerHTML = `
    <div class="extensionCardTop">
      <img src=${item.logo} alt="${item.name} logo" />
      <div class="cardContent">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
      </div>
    </div>
    <div class="cardToggle">
      <button class="btnRemove">Remove</button>
      <label class="switch">
        <input type="checkbox" ${item.isActive ? "checked" : ""} />
        <span class="slider round"></span>
      </label>
    </div>
  `;

  wrapper.appendChild(card);

  // Toggle active state
  card
    .querySelector("input[type='checkbox']")
    .addEventListener("change", function () {
      extensions[index].isActive = this.checked;
    });
}

// REMOVE CARD
wrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnRemove")) {
    const card = e.target.closest(".extensionCard");
    if (card) {
      const index = [...wrapper.children].indexOf(card);
      if (index !== -1) {
        extensions.splice(index, 1);
        card.remove();
      }
    }
  }
});

// THEME APPLICATION
function applyTheme(themeName) {
  const theme = themes[themeName];
  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.color;
  
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  headings.forEach((heading) => {
    heading.style.color = theme.color;
  });


  document.querySelectorAll(".navTab").forEach((nav) => {
    nav.style.backgroundColor = theme.navColor;
  });

  document.querySelectorAll(".navButton").forEach((btn) => {
    btn.style.backgroundColor = theme.buttonBackground;
    btn.style.color = theme.color;
  });

  document.querySelectorAll(".extensionCard").forEach((card) => {
    card.style.backgroundColor = theme.cardBackground;
    card.style.color = theme.color;
    card.querySelectorAll("button").forEach((btn) => {
      btn.style.backgroundColor = theme.buttonBackground;
      btn.style.color = theme.color;
    });
  });
}

// SETUP TAB FILTER BUTTONS
function setupTabEventListeners() {
  const buttonAll = document.querySelector(".btn1");
  const buttonActive = document.querySelector(".btn2");
  const buttonInactive = document.querySelector(".btn3");
   
  const allTabButtons = document.querySelectorAll(".tabButtons button");

  // Add click listeners to each button
  allTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove the active class from all buttons
      allTabButtons.forEach((b) => b.classList.remove("active-tab"));

      // Add active class to the clicked button
      btn.classList.add("active-tab");
    });
  });


  buttonAll.addEventListener("click", () => {
    wrapper.replaceChildren();
    extensions.forEach((item, index) => createCard(item, index));
    applyTheme(currentTheme);
  });

  buttonActive.addEventListener("click", () => {
    wrapper.replaceChildren();
    extensions.forEach((item, index) => {
      if (item.isActive) createCard(item, index);
    });
    applyTheme(currentTheme);
  });

  buttonInactive.addEventListener("click", () => {
   wrapper.replaceChildren();
   extensions.forEach((item, index) => {
     if (!item.isActive) createCard(item, index);
   });
   applyTheme(currentTheme);
  });
}

// INIT
createNav(themes[currentTheme]);
createExtensionTabs();
setupTabEventListeners();
applyTheme(currentTheme);
extensions.forEach((item, index) => createCard(item, index));
