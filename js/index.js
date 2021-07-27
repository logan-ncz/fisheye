import apiFishEye from './provider/apiFishEye.js';
import photographerProfil from "./photographerProfil.js";
import dropDownMenu from './photographers/dropDownSort.js';
import mediaBuilder from './photographers/mediaBuilder.js';
import homePageBuilder from './Home/homePageBuilder.js'


(function appDispatch() {
  new apiFishEye().getDataFishEye().then((data) => {
      if (window.location.pathname.includes("/photographers.html")) {
          // PHOTOGRAPHER PROFIL HEADER
          new photographerProfil().displayPhotographerProfil(data);

          // DROPDOWN MENU
          new dropDownMenu().dropDown(data);

          //PHOTOGRAPHER GALLERY & LIKES BOX
          new mediaBuilder().photographersMedias(data);
          return
      }
      // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
      new homePageBuilder().displayPhotographers(data);
  }).catch(() => {
      console.error('Failed to load ApiFishEye');
  })
})();


// fetch(url)
//   .then((datas) => {
//     return datas.json();
//   })
//   .then((datas) => {
//     let photographes = datas.photographers;

//     console.log(photographes)

//     let Set_upFonction = Set_up();
//     Set_upFonction.SetPhotographe(photographes);
//     let filterFonction = Filter();
//     filterFonction.filterTags(photographes);
//   })

//   .catch((err) => {
//     console.error(err);
//   });
