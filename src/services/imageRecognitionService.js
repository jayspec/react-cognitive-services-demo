import callCognitiveService from './cognitiveServicesApi';

const apiKey = '8bebd7839c9645f1bd1da7866c6b0b3f';

function getImageDetectionDataFromUrl(imageUrl) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze';
    
    const params = {
        visualFeatures: 'Categories,Description,Color',
        language: 'en'
    };

    return callCognitiveService(uriBase, params, imageUrl, apiKey)
        .then(response => {
            return response.text();
        });

}

export default getImageDetectionDataFromUrl;
