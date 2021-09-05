import apiFishEye from './apiFishEye.js';
import renderMedia from './photographers/renderMedia.js';
import modal from './photographers/modal.js';
import Lightbox from './photographers/class_Lightbox.js';



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
        <span class="modal-btn">Contactez-moi</span>
        <img src="photos/Photographers ID Photos/${photographers[0].portrait}" alt="" />
      </article>`

        //Je crée mon HTML pour l'intégrer a la page
  

    document.getElementById('ph_profil_header').innerHTML = ph_profil;

    let mediaData = datas.media
    console.log(mediaData)

    //Je lance mon filtre
            //JE trie mon tableau
    //JE rendre mes element HTML

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let MediaFactory = renderMedia(element);
      let mediaHTML = MediaFactory.choiceElement();
      // console.log(mediaHTML)

      let template = `<article class="ph_work_elt">
      <a class="ph_media_link" href='${mediaHTML.src}' title=${element.title}>
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

  const modalLaunch = new modal;

  modalLaunch.launchform();4

  Lightbox.init();

  sortBy()

})
.catch((err) =>{
      console.error(err)
});


///Voir dans des fichier séparer


function dropDown() {
  let dropDownMenu = document.getElementById('sort-wrapper');
  // console.log(dropDownMenu);
  let dropDownMenuOpen = document.getElementsByClassName('sort-wrapper-open');

  dropDownMenu.addEventListener('click', event => {
    
    // console.log(dropDownMenuOpen);
    dropDownMenu.style.display = 'none';

    dropDownMenuOpen[0].style.display = 'flex';
  });

  dropDownMenuOpen[0].addEventListener('click', event => {
    if (dropDownMenuOpen[0].style.display = 'flex') {
      dropDownMenuOpen[0].style.display = 'none';

      dropDownMenu.style.display = 'flex';
    }
  });
};
dropDown()

function sortBy() {

  const ph_medias = document.querySelectorAll('.ph_media');
  // console.log(ph_medias)


}
