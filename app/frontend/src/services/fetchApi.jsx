export const postApiResult = async (Pergunta1, Pergunta2, Pergunta3, Pergunta4) => {
  return await fetch(`http://localhost:3003/collect`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Pergunta1,
      Pergunta2,
      Pergunta3,
      Pergunta4,
    })
  })
};

/* export const getApiResult = async () => {
  return await fetch('http://localhost:3001/collect')
      .then((response) => response.json())
      .then((result) => setGetJson(result));
}; */
