class apiFishEye {
    async getDataFishEye() {
        let url = 'bdd/FishEyeData.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}

export default apiFishEye