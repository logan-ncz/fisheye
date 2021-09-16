export default class Likes {

    // constructor(){
        
    //     this.likes = likes
    //     // this.mediaLikes = document.querySelectorAll('.ph_work_like');
    //     this.likes()
    // }
    
    countlikes(phData, mediaData) {
        console.log(phData, mediaData)

        const UrlParam = new URLSearchParams(window.location.search);
        const id = UrlParam.get('id');

        this.likes = 0

        mediaData.forEach(element => {
            if(id == element.photographerId) {
                // console.log(element)
                this.likes += element.likes
            }
        })

        console.log(this.likes)

        this.innerHTML()
    }

    innerHTML() {
        let boxLikes = document.getElementById('likes')
        boxLikes.innerHTML = `${this.likes} <i class="fas fa-heart"></i>`
    }
    
}