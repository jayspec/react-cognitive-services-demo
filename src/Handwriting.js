import React from 'react';
import getHandwritingFromUrl from './services/handwritingService';
import ImageCognitiveService from './ImageCognitiveService';

function Handwriting() {
    const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cursive_Writing_on_Notebook_paper.jpg/800px-Cursive_Writing_on_Notebook_paper.jpg';

    return (
      <div>
          <h2>Handwriting Recognition</h2>
          <ImageCognitiveService defaultImageUrl={defaultImageUrl} cognitiveServiceHandler={getHandwritingFromUrl} />
      </div>
    );
    }

export default Handwriting;


