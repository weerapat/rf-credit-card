import axios from 'axios'

export default async function(context) {
  const endpoint = 'http://localhost:3000/api/main-navigation.json';

  if (process.server) {
    let { data } = await axios.get(endpoint);
    context.store.commit('setMainNavigationView', data.view);
  }
}
