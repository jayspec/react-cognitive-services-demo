import {callTextCognitiveService} from './cognitiveServicesApi';

const apiKey = '5ced0d77f7174d86b82d66c0cae574ca';

function getSentimentFromText(text) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
    
    const params = {};

    return callTextCognitiveService(uriBase, params, text, apiKey)
        .then(response => {
            return response.text();
        });

}

export default getSentimentFromText;
