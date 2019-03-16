import React from 'react';
import getOcrFromUrl from './services/ocrService';
import ImageCognitiveService from './ImageCognitiveService';

function Ocr() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/' +
      'Atomist_quote_from_Democritus.png/338px-Atomist_quote_from_Democritus.png';

    return (
      <div>
          <h2>Optical Character Recognition (OCR)</h2>
          <ImageCognitiveService defaultImageUrl={defaultImageUrl} cognitiveServiceHandler={getOcrFromUrl} />
      </div>
    );
    }

export default Ocr;
