import imageFactory from './imageFactory.js';
import videoFactory from './videoFactory.js';

class mediaFactory {
    renderMedia(element) {
        let factory = null;
        if (element.hasOwnProperty('image')) {
            factory = new imageFactory();
        } else if (element.hasOwnProperty('video')) {
            factory = new videoFactory();
        }
        return factory.createHTML(element);
    }
};

export default mediaFactory