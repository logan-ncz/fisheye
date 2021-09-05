class Lightbox {

    static init() {
      const ph_medias = document.querySelectorAll('.ph_media');
      console.log("hey" ,ph_medias)
  
      // const gallery = ph_medias
      
  
      // console.log(gallery)
  
      
      // debugger
      ph_medias.forEach(ph_media => ph_media.addEventListener('click', e =>
        {
          // console.log('click')
          e.preventDefault()
          new Lightbox(e.currentTarget.getAttribute('src'), ph_medias)
        }))
    }
  
    /** 
    *@param {string} url URL des medias
    *@param {string[]} ph_medias Chemin des medias de la Lightbox
    */
  
    constructor(url, ph_medias) {
      // console.log(url)
      const element = this.buildDom(url);
      // console.log(element)
      this.url = url
      this.onKeyUp = this.onKeyUp.bind(this);
      document.body.appendChild(element);
      document.addEventListener('keyup', this.onKeyUp);
    }
    /**
     * @param {string} url URL de l'image 
     */
  
    loadImage(url) {
      console.log(url , this.ph_medias)
      // this.url = null
      // const image = new Image()
      // const lightbox = document.querySelector('.lightbox')
      // const container = lightbox.querySelector('.lightbox__container')
      // container.innerHTML = ``
      // container.appendChild(image)
      // this.url = url
      // image.src = url
      let MediaFactory = renderMedia(url);
      let mediaHTML = MediaFactory.choiceElement();
      console.log(mediaHTML)
      let media = url
      console.log(media)
      const lightbox = document.querySelector('.lightbox')
      const container = lightbox.querySelector('.lightbox__container')
      container.innerHTML = media
      // container.appendChild(media)
    }
  
    /**
     * @param {KeyboardEvent} e 
     */
  
    onKeyUp (e) {
      if (e.key === 'Escape') {
        this.close(e)
      }
    }
  
    /** 
    * ferme la lightbox
    *@param {MouseEvent/KeyboardEvent} e
    */
  
    close(e) {
      e.preventDefault()
      const lightbox = document.querySelector('.lightbox')
      window.setTimeout(() => {
        lightbox.parentElement.removeChild(lightbox)
      }, 0)
      document.removeEventListener('keyup', this.onKeyUp);
    }
  
    /** 
    *@param {MouseEvent/KeyboardEvent} e
    */
  
    next(e) {
      e.preventDefault()
      const ph_medias = document.querySelectorAll('.ph_media');
  
      let i = ph_medias.item(image => image === this.ph_medias)
      if (i === ph_medias.length - 1) {
        i = -1
      }
      this.loadImage(ph_medias[i + 1])
    }
    
    /** 
    *@param {MouseEvent/KeyboardEvent} e
    */
  
    prev(e) {
      e.preventDefault()
      let i = this.ph_medias.findIndex(image => image === this.ph_medias)
      if (i === 0) {
        i = this.ph_medias.length
      }
      this.loadImage(this.ph_medias[i - 1])
    }
  
    /** 
    *@param {string} url URL des medias
    */
  
    buildDom(url) {
      const dom = document.createElement('div');
      dom.classList.add('lightbox');
      dom.innerHTML = `<i class="lightbox__prev fas fa-chevron-left"></i>
  
      <div class="lightbox__container">
  
        <img src="${url}" alt="">
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

export default Lightbox
  