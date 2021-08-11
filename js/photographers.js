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



new apiFishEye().getDataFishEye().then( (datas) => {
  
  let mediaData = datas.media

  const UrlParam = new URLSearchParams(window.location.search);

  const id = UrlParam.get('id');

  mediaData.forEach(element => {
    if (id == element.photographerId) {

      let template = `<article class="ph_work_elt">
      <a href="" title="Lonesome">
        <img class="ph_media" src="${element.image}" alt="">
      </a>
      <div class="ph_work_elt_text">
        <h2 class="ph_work_title">${element.title}</h2>
        <div class="ph_elt_like">
          <span class="ph_work_like">88</span>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </article>`

    document.getElementById('sort-wrapper').innerHTML += template;
  }})

  return this;
})
.catch((err) =>{
    console.error(err)
});