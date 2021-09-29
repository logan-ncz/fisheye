import apiFishEye from './apiFishEye.js';
import renderMedia from './photographers/renderMedia.js';
import Likes from './photographers/Likes.js';
import modal from './photographers/modal.js';
import Lightbox from './photographers/lightbox.js';
import dropDownMenu from './photographers/dropDownSort.js';



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
          `<li class="phFilter" data-filter="${tag}">#${tag}</li>`).join(" ")}
        </ul>
      </div>
      <span class="modal-btn">Contactez-moi</span>
      <figure><img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="Portrait of ${photographers[0].name}" /></figure>
    </article>`

      //Je crée mon HTML pour l'intégrer a la page


  document.getElementById('ph_profil_header').innerHTML = ph_profil;


  let mediaData = datas.media

  


  //Je lance mon filtre
          //JE trie mon tableau
  //JE rendre mes element HTML

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let MediaFactory = renderMedia(element);
      let mediaHTML = MediaFactory.choiceElement();
      // console.log(mediaHTML)

      let template = `<article class="ph_work_elt">
      <a class="ph_media_link" href='${mediaHTML.src}' title='${element.title}'>
        ${mediaHTML.outerHTML}
      </a>
      <div class="ph_work_elt_text">
        <h2 class="ph_work_title">${element.title}</h2>
        <div class="ph_elt_like">
          <span class="ph_work_like">${element.likes}</span>
          <i class="btnLike far fa-heart"></i>
        </div>
      </div>
    </article>`

    document.getElementById('ph_works').innerHTML += template;
  }})

  // new Likes().countlikes(photographersData, mediaData);
  
  // myLikes

  const modalLaunch = new modal;

  // h1 photographer name for modal contact

    const phName = document.getElementById('formPhName');

    phName.innerHTML = `Contactez-moi ${photographers[0].name}`

  const phPrice = document.getElementById('price');

  phPrice.innerHTML = `${photographers[0].price}€ / jour`


  new dropDownMenu().dropDown(datas);

  const myLikes = new Likes();

  const myLightbox = new Lightbox();
  
  sortBy()

})
.catch((err) =>{
      console.error(err)
});


///Voir dans des fichier séparer




function sortBy() {

  const ph_medias = document.querySelectorAll('.ph_media');
  // console.log(ph_medias)


}
