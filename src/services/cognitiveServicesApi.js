export function callImageCognitiveService(uriBase, params, imageUrl, apiKey) {
  
  const body = JSON.stringify({ url: imageUrl });
  return callCognitiveService(uriBase, params, body, apiKey);
}

export function callTextCognitiveService(uriBase, params, text, apiKey) {
  const document = { 'documents': [{'id': '1', 'language': 'en', 'text': text }] };
  const body = JSON.stringify(document);

  return callCognitiveService(uriBase, params, body, apiKey);
}

function callCognitiveService(uriBase, params, body, apiKey) {
  let queryString ='';
  let queryStringStarted = false;

  //
  // Break the parameter object down into a series of key value pairs
  // Then append that key and value to the URI query string
  // Before each key/value pair there must be a separator
  // The ? separates the query string from the main part of the URI.
  // The & separates key/value pairs from each other
  //

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
      body: body
  })
  .then(response => {
      if (!response.ok) {
          throw Error(response.statusText);
      } else {
          return response;
      }
  });
}
