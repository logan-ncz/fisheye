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

  const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);

  const ph_profil = `<article class="ph_profil">
      <div class="ph_infos">
        <h2>${photographers[0].name}</h2>
        <p class="ph_city">${photographers[0].city}, ${photographers[0].country}</p>
        <p class="ph_tagline">${photographers[0].tagline}</p>
        <nav>${photographers[0].tags.map(tag =>
          `<span class="phFilter" data-filter="${tag}" alt="tag">#${tag}</span>`).join(" ")}
        </nav>
      </div>
      <span class="modal-btn" alt="Contact-me">Contactez-moi</span>
      <figure class="ph_profil__img"><img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="${photographers[0].name}" /></figure>
    </article>`

  document.getElementById('ph_profil_header').innerHTML = ph_profil;

  let mediaData = datas.media

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let MediaFactory = renderMedia(element);
      let mediaHTML = MediaFactory.choiceElement();

      let template = `<article class="ph_work_elt">
      <a class="ph_media_link" href='${mediaHTML.src}' title='${element.title}' alt="${element.title}, closeup view">
        ${mediaHTML.outerHTML}
      </a>
      <div class="ph_work_elt_text">
        <h2 class="ph_work_title">${element.title}</h2>
        <div class="ph_elt_like">
          <span class="ph_work_like">${element.likes}</span>
          <i class="btnLike far fa-heart" aria-label="likes"></i>
        </div>
      </div>
    </article>`

    document.getElementById('ph_works').innerHTML += template;
  }})

  const modalLaunch = new modal;

  // h1 photographer name for modal contact

    const phName = document.getElementById('formPhName');

    phName.innerHTML = `Contactez-moi ${photographers[0].name}`

  // photographer price for the bottom box

    const phPrice = document.getElementById('price');

    phPrice.innerHTML = `${photographers[0].price}€ / jour`

  new dropDownMenu().dropDown(datas);

  const myLikes = new Likes();

  const myLightbox = new Lightbox();

})
.catch((err) =>{
  console.error(err)
});