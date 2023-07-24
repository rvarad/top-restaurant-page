import bgPizza from '../assets/images/home/pizza-3007395.jpg';
import chefs from '../assets/images/home/chefs-5437743_1920.jpg';
import regularCheese from '../assets/images/menu/regularCheeseP.jpeg';
import nonnaMaria from '../assets/images/menu/nonnaMariaP.jpeg';
import pepperoni from  '../assets/images/menu/pepperoniP.jpeg';
import chipotleChicken from '../assets/images/menu/chipotleChickenP.jpeg';
import buffaloChicken from '../assets/images/menu/buffaloChickenP.jpeg';
import houseSpecial from '../assets/images/menu/houseSpecialP.jpeg';
import garlicBread from '../assets/images/menu/garlicBread.jpeg';
import mozzarellaSticks from '../assets/images/menu/mozzarellaSticks.jpeg';
import chickenWings from '../assets/images/menu/chickenWings.jpeg';
import chickenTenders from '../assets/images/menu/chickenTenders.jpeg';
import houseSalad from '../assets/images/menu/houseSalad.jpeg';
import caesarSalad from '../assets/images/menu/caesarSalad.jpeg';
import location from '../assets/images/contact/Screenshot from 2023-07-19 22-05-41.png';

export const images = {
    'home' : {
        'chefs' : chefs,
        'bgimg' : bgPizza
    },
    'menu' : {
        'pizza' : {
            'regular cheese pizza' : regularCheese,
            'nonna maria pizza' : nonnaMaria,
            'pepperoni pizza' : pepperoni,
            'chipotle chicken pizza' : chipotleChicken,
            'buffalo chicken pizza' : buffaloChicken,
            'house special pizza' : houseSpecial,
        },
        'appetizers' : {
            'garlic bread' : garlicBread,
            'mozzarella sticks' : mozzarellaSticks,
            'chicken wings' : chickenWings,
            'chicken tenders' : chickenTenders,
        },
        'salads' : {
            'house salad' : houseSalad,
            'caesar salad' : caesarSalad,
        }
    },
    'contact' : {
        'map' : location,
    }
};