import { images } from './imagesrc';
import { menuDict } from './menudata';

const createItemCard = (name, description, cost) => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');

    const left = document.createElement('div');
    left.classList.add('left');

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = description;

    const itemCost = document.createElement('p');
    itemCost.classList.add('item-cost');
    itemCost.textContent = cost;

    left.appendChild(itemName);
    left.appendChild(itemDescription);
    left.appendChild(itemCost);

    let subSection = name.includes('Pizza') ? 'pizza' : name.includes('Salad') ? 'salads' : 'appetizers';
    let src = images['menu'][`${subSection}`][`${name.toLowerCase()}`];
    const itemImage = document.createElement('div');
    itemImage.classList.add('item-image');
    itemImage.style.background = `center / cover no-repeat url(${src})`;

    itemCard.appendChild(left);
    itemCard.appendChild(itemImage);

    return itemCard;
}

const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');

    const pizza = document.createElement('section');
    pizza.setAttribute('id', "pizza");

    const pizzaTitle = document.createElement('h2');
    pizzaTitle.textContent = 'Pizza';
    pizza.appendChild(pizzaTitle);
    let pizzaOptions = Object.values(menuDict['pizza']);
    for (let i = 0; i < pizzaOptions.length; i++) {
        pizza.appendChild(createItemCard(pizzaOptions[i][0], pizzaOptions[i][1], pizzaOptions[i][2]));
    };
    
    const appetizers = document.createElement('section');
    appetizers.setAttribute('id', "appetizers");
    
    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = 'Appetizers';
    appetizers.appendChild(appetizersTitle);
    let appetizersOptions = Object.values(menuDict['appetizers']);
    for (let i = 0; i < appetizersOptions.length; i++) {
        appetizers.appendChild(createItemCard(appetizersOptions[i][0], appetizersOptions[i][1], appetizersOptions[i][2]));
    };
    
    const salads = document.createElement('section');
    salads.setAttribute('id', "salads");
    
    const saladsTitle = document.createElement('h2');
    saladsTitle.textContent = 'Salads';
    salads.appendChild(saladsTitle);
    let saladsOptions = Object.values(menuDict['salads']);
    for (let i = 0; i < saladsOptions.length; i++) {
        salads.appendChild(createItemCard(saladsOptions[i][0], saladsOptions[i][1], saladsOptions[i][2]));
    };
        
    menuWrapper.appendChild(pizza);
    menuWrapper.appendChild(appetizers);
    menuWrapper.appendChild(salads);

    menu.appendChild(menuWrapper);

    return menu;
}

export const loadMenuTab = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createMenu());

    return main;
}