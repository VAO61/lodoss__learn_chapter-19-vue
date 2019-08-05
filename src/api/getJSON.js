import axios from 'axios'

const getJSON = async function ({type = 'repositories', searchValue, lang}) {
  return await axios.get(
    `https://api.github.com/search/${type}?q=${searchValue}+language:${lang}&sort=stars&order=desc`
  );
}

export default getJSON;