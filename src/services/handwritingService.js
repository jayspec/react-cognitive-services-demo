import {callImageCognitiveService} from './cognitiveServicesApi';

const apiKey = '8bebd7839c9645f1bd1da7866c6b0b3f';
const delayTime = 10000;

function getHandwritingFromUrl(imageUrl) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze';
    
    const params = {
        mode: 'Handwritten'
    };

    let responseUrl = '';
    return callImageCognitiveService(uriBase, params, imageUrl, apiKey)
        .then(response => {
          responseUrl = response.headers.get('Operation-Location');
          return delay(delayTime);
        })
        .then(() => {
          return fetch(responseUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : apiKey
            }
          });
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.text();
            }
        });
}

function delay(t, v) {
  return new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, v), t)
  });
}

export default getHandwritingFromUrl;
