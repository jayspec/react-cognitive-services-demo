function callCognitiveService(uriBase, params, imageUrl, apiKey) {
    
  let queryString ='';
  let queryStringStarted = false;

  for (const [key, value] of Object.entries(params)) {
    const separator = queryStringStarted ? '&' : '?';
    queryStringStarted = true;
    queryString = queryString +  `${separator}${key}=${value}`
  }
  
  let uri = uriBase + queryString;

  return fetch(uri, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key' : apiKey
      },
      body: JSON.stringify({ url: imageUrl })
  })
  .then(response => {
      if (!response.ok) {
          throw Error(response.statusText);
      } else {
          return response;
      }
  });
}

export default callCognitiveService;
