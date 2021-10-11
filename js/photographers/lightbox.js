class Lightbox {

  constructor() {
    this.ph_medias = Array.from(document.querySelectorAll('.ph_media'));
    console.log(this.ph_medias)
    
    this.currentMedia = 0 ;
    this.lengthItem = this.ph_medias.length ;

    this.chargerEvent();
    document.onkeydown = this.keyboard.bind(this)
  }
  
  // Fonction pour initialiser la lightbox
  chargerEvent(){
    this.ph_medias.forEach( (media , index) => {
      media.addEventListener('click', e => {
        e.preventDefault()
        this.buildDom(index);
      })
    })
  }

  // Bouton fermer
  close(e) {
    e.preventDefault()
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none"
  }

  // Bouton suivant
  next() {
    this.currentMedia++ ;
    if(this.currentMedia >= this.lengthItem){
      this.currentMedia = 0;
    }
    this.buildMedia(this.currentMedia)
  }

  // Bouton précédent
  prev() {
    this.currentMedia--
    if(this.currentMedia === 0){
      this.currentMedia = this.lengthItem - 1;
    }
    this.buildMedia(this.currentMedia)
  }

  // Navigation au clavier
  keyboard(e){
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev()
    } else if (e.key === 'ArrowRight') {
      this.next()
    }
  }

  // Rendu du média
  buildMedia(index) { 
    let lightbox_container = document.getElementById('lightbox_container');
    lightbox_container.innerHTML = this.ph_medias[index].outerHTML
    let mediaTitle = document.createElement('h2')
    mediaTitle.classList.add('lightbox_title')
    mediaTitle.innerHTML = `${this.ph_medias[index].title}`
    lightbox_container.appendChild(mediaTitle)
  }

  // Construction du DOM du média sélectionné
  buildDom(index) {
    const dom = document.getElementById('lightbox');
    
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