import React from 'react';
import getFaceDetectionFromUrl from './services/faceDetectionService';
import ImageCognitiveService from './ImageCognitiveService';

function FaceDetect() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';

    return (
      <div>
          <h2>Face Detection</h2>
          <ImageCognitiveService defaultImageUrl={defaultImageUrl} cognitiveServiceHandler={getFaceDetectionFromUrl} />
      </div>
    );
    }

export default FaceDetect;


