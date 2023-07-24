import { images } from "./imagesrc";

const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const branding = document.createElement('div');
    branding.classList.add('branding');

    const brandingWrapper = document.createElement('div');
    brandingWrapper.classList.add('branding-wrapper');

    const mainTitle = document.createElement('div');
    mainTitle.setAttribute('id', 'mainTitle');
    mainTitle.textContent = "THE PIZZA BAR";

    const titleSubtext = document.createElement('div');
    titleSubtext.setAttribute('id', 'titleSubtext');
    titleSubtext.textContent = "The best New York City Pizza, now in your city!";
    brandingWrapper.appendChild(mainTitle);
    brandingWrapper.appendChild(titleSubtext);
    branding.appendChild(brandingWrapper);

    const story = document.createElement('div');
    story.classList.add('story');

    const storyWrapper = document.createElement('div');
    storyWrapper.classList.add('story-wrapper');

    const chefsImage = new Image();
    chefsImage.src = images['home']['chefs'];
    chefsImage.setAttribute('alt', 'founder');

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('text-wrapper');

    const h2 = document.createElement('h2');
    h2.textContent = "Our Story";

    const storyText = document.createElement('p');
    storyText.classList.add('story-text');
    storyText.textContent = "Our pizzeria was established in 2004, serving the people of New York with our best - selling Nona Marie Pie—an old family recipe that has been our customer’s favorite. Today, we are now offering more flavors with only the finest ingredients at an affordable price."
    textWrapper.appendChild(h2);
    textWrapper.appendChild(storyText);

    storyWrapper.appendChild(chefsImage);
    storyWrapper.appendChild(textWrapper);

    story.appendChild(storyWrapper);

    home.appendChild(branding);
    home.appendChild(story);

    return home;
};

export const loadHomeTab = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createHome());

    return main;
}
