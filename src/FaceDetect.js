import React, { useState } from 'react';
import getFaceDetectionFromUrl from './services/faceDetectionService';

function FaceDetect() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);
    const [faceDetectionJson, setFaceDetectionJson] = useState("");
  
    function updateFaceDetection() {
        getFaceDetectionFromUrl(imageUrl)
        .then(result => {
            setFaceDetectionJson(result);
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
        <button type="button" onClick={() => updateFaceDetection()}>
          Update Image
        </button>
        </form>
        <div>
            <img src={imageUrl} width="400" alt="some faces" />
        </div>
        <div>
            {faceDetectionJson}
        </div>
      </div>
    );
    }

export default FaceDetect;


