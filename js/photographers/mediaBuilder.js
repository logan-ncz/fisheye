import galleryFactory from '../Factory/galleryFactory.js';
import likeSubscriber from './likes.js';

class mediaBuilder {
    // call the GalleryFactory to create the media section with 'Like' function and the box
    photographersMedias(data) {
        let media = data.media;
        let gallery = new galleryFactory().builder(media);
        this.boxLikesAndPrice(gallery.totalLike, data.photographers);
        new likeSubscriber();
    }

    // creates a box containing the total number of likes and the photographer's price
    boxLikesAndPrice(totalLike, photographers) {
        const id = window.location.search.split('id=')[1];

        photographers.forEach(element => {
            if (id == element.id) {
                let box = document.getElementById('box');
                let boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
                box.innerHTML = boxTemplate;
            }
        })
    }
}

export default mediaBuilder