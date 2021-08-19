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

  return this;
})
.catch((err) =>{
    console.error(err)
});

// let lightbox = document.getElementsByClassName('lightbox');

// let ph_work_elt = document.querySelectorAll('.ph_work_elt');

// ph_work_elt.forEach((a) => a.addEventListener("click", openLightbox));

// function openLightbox() {
//   lightbox.style.display = 'block';
//   console.log('ca marche');
// }

class Lightbox {

  static init() {
    const ph_medias = document.querySelectorAll('.ph_media_link')
      .forEach(ph_media => ph_media.addEventListener('click', e =>
      {
        e.preventDefault()
        new Lightbox(e.currentTarget.getAttribute('href'))
      }))
  }

  /** 
  *@param {string} url URL des medias
  *@return {HTMLElement}
  */

  constructor(url) {
    const element = this.buildDom(url);
    document.body.appendChild(element);
  }

  /** 
  * ferme la lightbox
  *@param {MouseEvent} e
  */

  close(e) {
    e.preventDefault();
    this.element.parentElement.removeChild(this.element);
  }

  /** 
  *@param {string} url URL des medias
  */

  buildDom(url) {
    const dom = document.createElement('div');
    dom.classList.add('lightbox');
    dom.innerHTML = `<i class="arrow_left fas fa-chevron-left"></i>

    <div>

      <img src="photos/Mimi/Animals_Rainbow.jpg" alt="">
      <h2 class="lightbox_title">Rainbow Bird</h2>

    </div>
    <i class="lightbox_close_icon fa fa-times"></i>
    <i class="arrow_right fas fa-chevron-right"></i>`;
    dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this));
    return dom;
  }

}

Lightbox.init()



// (function dropDown() {
//   let dropDownMenu = document.getElementById('sort-wrapper');

//   dropDownMenu.addEventListener('click', event => {
//     let dropDownMenuOpen = document.getElementsByClassName('sort-wrapper-open');

//     dropDownMenu.style.display = 'none';

//     dropDownMenuOpen.style.display = 'display';
//   });
// });