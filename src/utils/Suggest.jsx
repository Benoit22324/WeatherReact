import axios from "axios";

const Suggest = async (word) => {
    try {
        const response = await axios.get('https://api-adresse.data.gouv.fr/search/?q=' + word + '&autocomplete=1&type=municipality');
        const data = response.data.features
        return data
    }
    catch {
        return 'Erreur de suggestion'
    }
}

export default Suggest