import React from 'react';
import getSentimentFromText from './services/sentimentAnalysisService';
import TextCognitiveService from './TextCognitiveService';

function Ocr() {
    const defaultText = 'I love artificial intelligence!';

    return (
      <div>
          <h2>Text Sentiment Analysis</h2>
          <TextCognitiveService defaultText={defaultText} cognitiveServiceHandler={getSentimentFromText} />
      </div>
    );
    }

export default Ocr;
