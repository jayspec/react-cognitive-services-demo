import {callImageCognitiveService} from './cognitiveServicesApi';

const apiKey = '9ea799ba0a3d4c6288117b96a534e76c';

function getFaceDetectionDataFromUrl(imageUrl) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';

    const params = {
        returnFaceId: true,
        returnFaceLandmarks: false,
        returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    return callImageCognitiveService(uriBase, params, imageUrl, apiKey)
        .then(response => {
            return response.text();
        });

}

export default getFaceDetectionDataFromUrl;
