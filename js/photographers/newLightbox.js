class Lightbox {
    static init() {
        const ph_medias = document.querySelectorAll('.ph_media');
        console.log("hey" ,ph_medias)

        ph_medias.forEach(ph_media => ph_media.addEventListener('click', e => {
          e.preventDefault()
          new Lightbox(e.currentTarget.getAttribute('src'), ph_medias)
        }))
    }

    buildDom(media) {
        const dom = document.createElement('div');
        dom.classList.add('lightbox');
        dom.innerHTML = `<i class="lightbox__prev fas fa-chevron-left"></i>
    
        <div class="lightbox__container">
    
          <img src="${media}" alt="">
          <h2 class="lightbox_title">Rainbow Bird</h2>
    
        </div>
        <i class="lightbox_close_icon fa fa-times"></i>
        <i class="lightbox__next fas fa-chevron-right"></i>`;
        dom.querySelector('.lightbox_close_icon').addEventListener('click', this.close.bind(this));
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this));
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this));
        return dom;
    }
}