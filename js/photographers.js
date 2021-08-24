import apiFishEye from './apiFishEye.js'


new apiFishEye().getDataFishEye().then( (datas) => {

    let photographersData = datas.photographers

    const UrlParam = new URLSearchParams(window.location.search);
    const id = UrlParam.get('id');
    // const id = window.location.search.split("id=")[1];

    const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);

    const ph_profil = `<article class="ph_profil">
        <div class="ph_infos">
          <h2>${photographers[0].name}</h2>
          <p class="ph_city">${photographers[0].city}, ${photographers[0].country}</p>
          <p class="ph_tagline">${photographers[0].tagline}</p>
          <ul class="filter ph-filter">${photographers[0].tags.map(tag =>
            `<li data-filter="${tag}">#${tag}</li>`).join(" ")}
          </ul>
        </div>
        <button>Contactez-moi</button>
        <img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="" />
      </article>`

        //Je crée mon HTML pour l'intégrer a la page
  

    document.getElementById('ph_profil_header').innerHTML = ph_profil;

      
    })
.catch((err) =>{
      console.error(err)
});




function renderMedia(element) {

  const elementFactory = element;
  
  function choiceElement() {
    let factory = null;
    if (this.elementFactory.hasOwnProperty('image')) {
        factory = this.createHTMLImage();
    } else if (element.hasOwnProperty('video')) {
        factory = this.createHTMLVideo();
    }

    return factory;
  }

  function createHTMLImage() {
    let eltImage = document.createElement('img');
    eltImage.setAttribute('src', this.elementFactory.image);
    eltImage.setAttribute('alt', this.elementFactory.alt);
    eltImage.setAttribute('role', 'button');
    eltImage.className = 'ph_media';

    return eltImage;
  }

  function createHTMLVideo() {
    let eltVideo = document.createElement('video');
    eltVideo.setAttribute("controls", "controls")
    eltVideo.setAttribute('src', this.elementFactory.video);
    eltVideo.setAttribute('role', 'button');
    eltVideo.className = 'ph_media';

    return eltVideo;
  }

  return {
    elementFactory,
    choiceElement,
    createHTMLImage,
    createHTMLVideo
  }
}

new apiFishEye().getDataFishEye().then( (datas) => {
  
  let mediaData = datas.media

  const UrlParam = new URLSearchParams(window.location.search);

  const id = UrlParam.get('id');

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let MediaFactory = renderMedia(element);
      let mediaHTML = MediaFactory.choiceElement();

      let template = `<article class="ph_work_elt">
      <a class="ph_media_link" href='${element.image}' title=${element.title}>
        ${mediaHTML.outerHTML}
      </a>
      <div class="ph_work_elt_text">
        <h2 class="ph_work_title">${element.title}</h2>
        <div class="ph_elt_like">
          <span class="ph_work_like">${element.likes}</span>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </article>`

    document.getElementById('ph_works').innerHTML += template;
  }})

  Lightbox.init();

  return this;
})
.catch((err) =>{
    console.error(err)
});


/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url Image actuellement affichée
 */

class Lightbox {

  static init() {
    const ph_medias = Array.from(document.querySelectorAll('.ph_media_link'));
    // console.log("hey" ,ph_medias)

    const gallery = ph_medias.map(ph_media => ph_media.getAttribute('href'))
    // debugger
    ph_medias.forEach(ph_media => ph_media.addEventListener('click', e =>
      {
        // console.log('click')
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'), gallery)
      }))
  }

  /** 
  *@param {string} url URL des medias
  *@param {string[]} gallery Chemin des medias de la Lightbox
  */

  constructor(url, gallery) {
    // console.log(url)
    const element = this.buildDom(url);
    // console.log(element)
    this.gallery = gallery
    this.onKeyUp = this.onKeyUp.bind(this);
    document.body.appendChild(element);
    document.addEventListener('keyup', this.onKeyUp);
  }
  /**
   * @param {string} url URL de l'image 
   */

  loadImage(url) {
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox__container')
    container.innerHTML = ``
    container.appendChild(image)
    this.url = url
    image.src = url
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
    lightbox.classList.add('fadeOut')
    window.setTimeout(() => {
      lightbox.parentElement.removeChild(lightbox)
    }, 100)
    document.removeEventListener('keyup', this.onKeyUp);
  }

  /** 
  *@param {MouseEvent/KeyboardEvent} e
  */

  next(e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    this.loadImage(this.images[i + 1])
  }
  
  /** 
  *@param {MouseEvent/KeyboardEvent} e
  */

  prev(e) {
    e.preventDefault()

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





function dropDown() {
  let dropDownMenu = document.getElementById('sort-wrapper');
  // console.log(dropDownMenu);
  dropDownMenu.addEventListener('click', event => {
    
    let dropDownMenuOpen = document.getElementsByClassName('sort-wrapper-open');
    // console.log(dropDownMenuOpen);
    dropDownMenu.style.display = 'none';

    dropDownMenuOpen[0].style.display = 'flex';
  });
};

dropDown();