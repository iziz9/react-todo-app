const baseUrl = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/'

const api = async ({endpoint='', method, text}) => {
  try {
    const res = await fetch(baseUrl+endpoint, {
      method: method,
      headers: {
        'content-type': 'application/json',
        'apikey': process.env.REACT_APP_API_KEY,
        'username': 'KDT3_KangHyeonJu'
      },
      body: JSON.stringify({
        title: text
      })
    })
    const result = await res.json()
    return result
  } catch (err) {
    console.log(err)
  }
};

export default api;