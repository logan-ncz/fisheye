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
  

  

  function render(element) {
    function imageFactory() {
      function createHTML(element) {
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph_media';
    
        return eltImage;
      }

      return createHTML(element);
    }

    function videoFactory() {
      function createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph_media';
    
        return eltVideo;
      }
  
      return createHTML(element);
    }

    let factory = null;
    if (element.hasOwnProperty('image')) {
        factory = imageFactory();
    } else if (element.hasOwnProperty('video')) {
        factory = videoFactory();
    }
    return factory;
  }

  return render(element);
}

new apiFishEye().getDataFishEye().then( (datas) => {
  
  let mediaData = datas.media

  const UrlParam = new URLSearchParams(window.location.search);

  const id = UrlParam.get('id');

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let mediaHTML = renderMedia(element);

      let template = `<article class="ph_work_elt">
      <a href='#' title=${element.photoName}>
        ${mediaHTML.outerHTML}
      </a>
      <div class="ph_work_elt_text">
        <h2 class="ph_work_title">${element.title}</h2>
        <div class="ph_elt_like">
          <span class="ph_work_like">88</span>
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

function dropDown() {
  let sort_btn = document.getElementsByClassName('sort-btn');


  

}