import "../assets/styles/style.css";
import { images } from "./imagesrc";
import { loadHomeTab } from "./homeTab";
import { loadMenuTab } from "./menuTab";
import { loadContactTab } from "./contactTab";

let activeTab = 'homeTab';

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('div');
    title.setAttribute('id', "title");
    title.textContent = "THE PIZZA BAR";

    const options = document.createElement('div');
    options.classList.add('options');

    const homeTabBtn = document.createElement('button');
    homeTabBtn.classList.add('tab-button', 'current');
    homeTabBtn.setAttribute('id', "homeBtn");
    homeTabBtn.textContent = 'Home';
    homeTabBtn.addEventListener('click', () => {
        if (activeTab === 'homeTab') return;
        activeTab = 'homeTab';
        loadHomeTab();
        toggleActiveClass();
    });
    
    const menuTabBtn = document.createElement('button');
    menuTabBtn.classList.add('tab-button');
    menuTabBtn.setAttribute('id', "menuBtn");
    menuTabBtn.textContent = 'Menu';
    menuTabBtn.addEventListener('click', () => {
        if (activeTab === 'menuTab') return;
        activeTab = 'menuTab';
        loadMenuTab();
        toggleActiveClass();
    });
    
    const contactTabBtn = document.createElement('button');
    contactTabBtn.classList.add('tab-button');
    contactTabBtn.setAttribute('id', "contactBtn");
    contactTabBtn.textContent = 'Contact';
    contactTabBtn.addEventListener('click', () => {
        if (activeTab === 'contactTab') return;
        activeTab = 'contactTab';
        loadContactTab();
        toggleActiveClass();
    });

    options.appendChild(homeTabBtn);
    options.appendChild(menuTabBtn);
    options.appendChild(contactTabBtn);

    header.appendChild(title);
    header.appendChild(options);

    return header;
};

const toggleActiveClass = () => {
    if (activeTab === 'homeTab') {
        document.getElementById('homeBtn').classList.add('active');
        document.getElementById('menuBtn').classList.remove('active');
        document.getElementById('contactBtn').classList.remove('active');
    } else if (activeTab === 'menuTab') {
        document.getElementById('homeBtn').classList.remove('active');
        document.getElementById('menuBtn').classList.add('active');
        document.getElementById('contactBtn').classList.remove('active');
    } else {
        document.getElementById('homeBtn').classList.remove('active');
        document.getElementById('menuBtn').classList.remove('active');
        document.getElementById('contactBtn').classList.add('active');
    }
}

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', "main");
    main.style.background = `top / cover no-repeat url(${images['home']['bgimg']})`;

    return main;
};

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const credits = document.createElement('span');
    credits.classList.add('credits');
    credits.innerHTML = 'Brought to you by : <a href="https://github.com/rvarad" target="_blank">rvarad</a> | <a href="https://github.com/rvarad/top-library" target="_blank">Source</a>';

    footer.appendChild(credits);

    return footer;
};

export const initialise = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    toggleActiveClass();
    loadHomeTab();
};