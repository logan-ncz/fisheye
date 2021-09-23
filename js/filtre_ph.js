// function MaFactoryMethode(name){
   
//     let mavariable = name

//     function affiche(){
//         console.log(this.mavariable)
//     }

//     return {
//         mavariable,
//         affiche
//     }
// };

// export default class Filter {

//     filterTags() {
//         let filtres = document.querySelector('ul');
//         let articles = document.querySelector('articlePh');
    
//         filtres.addEventListener('click', event => {
//             let classValue = event.target.classList.value;
    
//             if (-1 === classValue.indexOf('activated')) {
//                 event.target.classList.add('activated')
//             } else {
//                 event.target.classList.remove('activated')
//             }
    
//             this.sortDomArticle(articles);
//         });
//     }

//     getActiveFilters() {
//         let currentFilters = document.querySelectorAll('ul li.activated');
//         let filterSelected = []

//         currentFilters.forEach(function (currentFilter) {
//             filterSelected.push(currentFilter.getAttribute("data-filter"));
//         });

//         return filterSelected;
//     }

//     ownAllFilters(article) {
//         let filters = this.getActiveFilters();
//         let classValue = article.classList.value;
//         let classes = classValue.split(' ');
//         let intersection = filters.filter(
//             x => classes.includes(x)
//         );

//         return filters.length == intersection.length;
//     }

//     sortDomArticle(articles) {
//         articles.forEach((article) => {
//             if (this.ownAllFilters(article)) {
//                 article.style.display = 'block';
//             } else {
//                 article.style.display = 'none';
//             }
//         });
//     }
// }


export default function FilterFactory() {
    let articles = [];
    
    function filterTags() {
        let filtres = document.querySelectorAll('ul li');
        articles = document.querySelectorAll('.articlePh');

        filtres.forEach( filtre => {
            filtre.addEventListener('click', event => {
                let classValue = event.target.classList.value;
                let myTEst = event.target.getAttribute("data-filter")
        
                if (-1 === classValue.indexOf('activated')) {
                    event.target.classList.add('activated')
                   
                    this.activedAdd(myTEst)
                } else {
                    event.target.classList.remove('activated')
                    this.activedRemove(myTEst)
                }

                //Fonction ajouter le filtre sur tout les les mêmes li "Protrait"
        
                this.sortDomArticle(articles);
            });
        })
    }

    //Function pour rendre tout les mêmes filtres en rouge
    function activedAdd(test){
        let filtres = document.querySelectorAll('ul li');

        filtres.forEach( filtre => {
            let classValue = filtre.classList.value;
            if (-1 === classValue.indexOf('activated') && filtre.getAttribute("data-filter") === test ) {
                filtre.classList.add('activated')
            }
        })
    }

    function activedRemove(test){
        let filtres = document.querySelectorAll('ul li');

        filtres.forEach( filtre => {
            let classValue = filtre.classList.value;
            console.log( classValue.indexOf('activated'))
            if (0 === classValue.indexOf('activated') && filtre.getAttribute("data-filter") === test ) {
                filtre.classList.remove('activated')
            }
        })
    }

    

    // function filterTags() {
        // let filtres = document.querySelector('ul');
        // articles = document.querySelectorAll('.articlePh');
    
        // filtres.addEventListener('click', event => {
        //     let classValue = event.target.classList.value;
    
        //     if (-1 === classValue.indexOf('activated')) {
        //         event.target.classList.add('activated')
        //     } else {
        //         event.target.classList.remove('activated')
        //     }
    
        //     this.sortDomArticle(articles);
        // });

        // (function phFilters() {          //Filtres en dessous de chaque photographe qui ne marchent pas
            
        //     let photographersFilter = document.querySelectorAll('.filter');
            
        //     photographersFilter.addEventListener('click', event => {
        //         let classValue = event.target.classList.value;
        
        //         if (-1 === classValue.indexOf('activated')) {
        //             event.target.classList.add('activated')
        //         } else {
        //             event.target.classList.remove('activated')
        //         }
        
        //         this.sortDomArticle(articles);
        //     });
        // })

    // }

    function getActiveFilters() {
        let currentFilters = document.querySelectorAll('ul li.activated');
        let filterSelected = [];

        currentFilters.forEach(function (currentFilter) {
            filterSelected.push(currentFilter.getAttribute("data-filter"));
            
        });
        console.log(filterSelected)

        return filterSelected;
    }

    function ownAllFilters(article) {
        let filters = this.getActiveFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );

        return filters.length == intersection.length;
    }

    function sortDomArticle(articles) {
        articles.forEach((article) => {
            if (this.ownAllFilters(article)) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        });
    }

    return {
        articles,
        filterTags,
        activedAdd,
        activedRemove,
        getActiveFilters,
        ownAllFilters,
        sortDomArticle,
    }
}