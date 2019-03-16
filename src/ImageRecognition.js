import React from 'react';
import getImageDetectionDataFromUrl from './services/imageRecognitionService';
import ImageCognitiveService from './ImageCognitiveService';

function ImageRecognition() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';

    return (
      <div>
          <h2>Image Recognition</h2>
          <ImageCognitiveService defaultImageUrl={defaultImageUrl} cognitiveServiceHandler={getImageDetectionDataFromUrl} />
      </div>
    );
    }

export default ImageRecognition;
