import callCognitiveService from './cognitiveServicesApi';

const apiKey = '8bebd7839c9645f1bd1da7866c6b0b3f';

function getOcrFromUrl(imageUrl) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/ocr';
    
    const params = {
        detectOrientation: true,
        language: 'unk'
    };

    return callCognitiveService(uriBase, params, imageUrl, apiKey)
        .then(response => {
            return response.text();
        });

}

export default getOcrFromUrl;
