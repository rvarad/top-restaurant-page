import { images } from "./imagesrc";

const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    const phoneNo = document.createElement('p');
    phoneNo.setAttribute('id', "phoneNo");
    phoneNo.textContent = ' 123-456-7890';

    const locationText = document.createElement('p');
    locationText.setAttribute('id', "locationText");
    locationText.textContent = ' E Spring St, Seattle, WA 98122, USA';

    const locationMap = document.createElement('div');
    locationMap.setAttribute('id', "locationMap");
    locationMap.style.background = `center / cover no-repeat url(${images['contact']['map']})`;

    contactWrapper.appendChild(phoneNo);
    contactWrapper.appendChild(locationText);
    contactWrapper.appendChild(locationMap);

    contact.appendChild(contactWrapper);

    return contact;
};

export const loadContactTab = () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(createContact());

    return main;
}