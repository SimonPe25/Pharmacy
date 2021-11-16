import axios from 'axios';

const getMedicCards = () => {
    return axios("medical.json")
}

export default getMedicCards;