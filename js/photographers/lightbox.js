// export default class Lightbox {
//   constructor() {
//     this.currentIndex = 0;
//   }
  
  
  
// }











// import renderMedia from "./renderMedia";

class Lightbox {
    // static init() {
    //     const ph_medias = Array.from(document.querySelectorAll('.ph_media'));
    //     console.log("hey" ,ph_medias[0])

    //     ph_medias.forEach(ph_media => ph_media.addEventListener('click', e => {
    //       e.preventDefault()
    //       new Lightbox(e.currentTarget)
    //     }))
    // }

    constructor() {

      this.ph_medias = Array.from(document.querySelectorAll('.ph_media'));
      
      this.currentMedia = 0 ;
      this.lengthItem = this.ph_medias.length ;

      this.chargerEnvent();
      document.onkeydown = this.keyboard.bind(this)

    }

    chargerEnvent(){
      this.ph_medias.forEach( (media , index) => {
        media.addEventListener('click', e => {
          e.preventDefault()
          this.buildDom(index);
        })
      })
    }

    close(e) {
      e.preventDefault()
      const lightbox = document.getElementById('lightbox');
      lightbox.style.display = "none"
    }

    next() {
      this.currentMedia++ ;
      if(this.currentMedia >= this.lengthItem){
        this.currentMedia = 0;
      }
      this.buildMedia(this.currentMedia)
      // console.log(this.ph_medias[this.currentMedia] , this.currentMedia)
    }

    prev() {
      this.currentMedia--
      if(this.currentMedia === 0){
        this.currentMedia = this.lengthItem - 1;
      }
      this.buildMedia(this.currentMedia)
      // console.log(this.ph_medias[this.currentMedia] , this.currentMedia)
    }

    keyboard(e){
      if (e.key === 'Escape') {
        this.close(e)
      } else if (e.key === 'ArrowLeft') {
        this.prev()
      } else if (e.key === 'ArrowRight') {
        this.next()
      }

      //Ecoute levent clas
        // --Rappenr next
    }

    buildMedia(index) { 
      let lightbox_container = document.getElementById('lightbox_container');
      lightbox_container.innerHTML = this.ph_medias[index].outerHTML
      let mediaTitle = document.createElement('h2')
      mediaTitle.classList.add('lightbox_title')
      mediaTitle.innerHTML = `${this.ph_medias[index].title}`
      lightbox_container.appendChild(mediaTitle)

    }

    buildDom(index) {

      const dom = document.getElementById('lightbox');
      // console.log(this.ph_medias[this.currentMedia])
      
      dom.innerHTML = `<i class="lightbox_icon lightbox_icon__prev fas fa-chevron-left"></i>
  
      <div id="lightbox_container" class="lightbox__container">
      
      </div>
      <i class="lightbox_icon lightbox_icon__next fas fa-chevron-right"></i>
      <i class="lightbox_icon lightbox_icon__close fa fa-times"></i>`;
      dom.querySelector('.lightbox_icon__close').addEventListener('click', this.close.bind(this));
      dom.querySelector('.lightbox_icon__next').addEventListener('click', this.next.bind(this));                                                                                                                               
      dom.querySelector('.lightbox_icon__prev').addEventListener('click', this.prev.bind(this));
      dom.style.display = "flex";
      this.buildMedia(index);
    }
}

export default Lightbox;