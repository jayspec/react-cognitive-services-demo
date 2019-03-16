import React, { useState } from 'react';
import getImageDetectionDataFromUrl from './services/imageRecognitionService';

function ImageRecognition() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);
    const [imageDetectionJson, setImageDetectionJson] = useState("");
  
    function updateImageDetection() {
        getImageDetectionDataFromUrl(imageUrl)
        .then(result => {
            setImageDetectionJson(result);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
      <div>
        <form>
            <input
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            placeholder="Image URL"
            type="text"
            name="imageUrl"
            required />
        <button type="button" onClick={() => updateImageDetection()}>
          Update Image
        </button>
        </form>
        <div>
            <img src={imageUrl} width="400" alt="some thing for ai to identify" />
        </div>
        <div>
            {imageDetectionJson}
        </div>
      </div>
    );
    }

export default ImageRecognition;


