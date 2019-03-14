const apiKey = '9ea799ba0a3d4c6288117b96a534e76c';

function getFaceDetectionDataFromUrl(imageUrl) {
    const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';
    
    let uri = uriBase + '?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise';

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
            return response.text();
        }
    });
}

export default getFaceDetectionDataFromUrl;
