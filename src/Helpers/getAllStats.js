import axios from 'axios';

const getAllStats = async () => {
    const allStats = await axios.get("https://corona.lmao.ninja/v2/all?yesterday");
    console.log('re', allStats);
    return allStats;
}

export default getAllStats;