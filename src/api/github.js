import axios from 'axios';
import useSWR from 'swr';

function GitHubAPI() {
  const fetcher = (url) =>
    axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    'https://api.github.com/users/fabiouh/repos?per_page=6&sort=updated',
    fetcher
  );
  return {
    data: data,
    error: error
  };
}

export default GitHubAPI;
