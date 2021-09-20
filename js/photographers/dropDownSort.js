export default class dropDownMenu {
    dropDown(datas) {
        let dropDownMenu = document.getElementById('sort-wrapper');
        // console.log(dropDownMenu);
        let dropDownMenuOpen = document.getElementsByClassName('sort-wrapper-open');
        
        dropDownMenu.addEventListener('click', event => {
            
            // console.log(dropDownMenuOpen);
            dropDownMenu.style.display = 'none';
        
            dropDownMenuOpen[0].style.display = 'flex';

            this.sortMedias(datas);
        });
        
        dropDownMenuOpen[0].addEventListener('click', event => {
            if (dropDownMenuOpen[0].style.display = 'flex') {
            dropDownMenuOpen[0].style.display = 'none';
        
            dropDownMenu.style.display = 'flex';
            }
        });
    };

    sortMedias(datas) {
        let mediaArraySort = []
        let media = datas.media
        let dropDownMenu = document.getElementById('sort-btn');
        let dropDownMenuOpen = document.getElementsByClassName('sort-wrapper-open');
        let sortBtn = Array.from(document.getElementsByClassName('sort-btn'));
        console.log(sortBtn)

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            dropDownMenuOpen [0].style.display = "none";
            if (index == 0) {
                dropDownMenu.innerHTML = `Popularité <i class="fas fa-chevron-down arrow-down-open"></i>`;

                

            } else if (index == 1) {
                dropDownMenu.innerHTML = `Date <i class="fas fa-chevron-down arrow-down-open"></i>`;

                

            } else if (index == 2) {
                dropDownMenu.innerHTML = `Titre <i class="fas fa-chevron-down arrow-down-open"></i>`;

                
            }
            // this.displaySortMedia(mediaArraySort);
        }));
    }

    // displaySortMedia(mediaArraySort) {
    //     mediaArraySort.forEach(element => {
    //         const UrlParam = new URLSearchParams(window.location.search);
    //         const id = UrlParam.get('id');

    //         if (id == element.photographerId) {
                
    //           let MediaFactory = renderMedia(element);
    //           let mediaHTML = MediaFactory.choiceElement();
    //           // console.log(mediaHTML)
        
    //           let template = `<article class="ph_work_elt">
    //           <a class="ph_media_link" href='${mediaHTML.src}' title=${element.title}>
    //             ${mediaHTML.outerHTML}
    //           </a>
    //           <div class="ph_work_elt_text">
    //             <h2 class="ph_work_title">${element.title}</h2>
    //             <div class="ph_elt_like">
    //               <span class="ph_work_like">${element.likes}</span>
    //               <i class="far fa-heart"></i>
    //             </div>
    //           </div>
    //             </article>`
        
    //         document.getElementById('ph_works').innerHTML += template;
    //         }})
    // }

}

