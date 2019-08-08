import axios from 'axios';

// const config = {
//   headers: { Accept: 'application / vnd.github.mercy - preview + json' }
// };

const getJSON = function({ type = 'repositories', searchValue, lang }) {
  return axios.get(
    `https://api.github.com/search/${type}?q=${searchValue}+language:${lang}&sort=stars&order=desc`,
    {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' }
    }
  );
};

// headers: {...}
// Accept: application/vnd.github.mercy-preview+json

export default getJSON;
