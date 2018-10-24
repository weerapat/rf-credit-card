import axios from 'axios'

export default async function(context) {
  const endpoint = 'https://staging-lgt.rabbitinternet.com/api/footer/main/th';

  if (process.server) {
    let { data } = await axios.get(endpoint);
    context.store.commit('setFooterView', data.view);
  }
}
