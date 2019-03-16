import React, { useState } from 'react';

function ImageCognitiveService(props) {
    const [imageUrl, setImageUrl] = useState(props.defaultImageUrl);
    const [cognitiveServiceResultJson, setCognitiveServiceResultJson] = useState("");
  
    function updateImage(event) {
      setCognitiveServiceResultJson("");
      setImageUrl(event.target.value);
    }

    function getResultsFromCognitiveService() {
      props.cognitiveServiceHandler(imageUrl)
        .then(result => {
            setCognitiveServiceResultJson(result);
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
            onChange={e => updateImage(e)}
            placeholder="Image URL"
            type="text"
            name="imageUrl"
            required />
        <button type="button" onClick={() => getResultsFromCognitiveService()}>
          Query Cognitive Services
        </button>
        </form>
        <div>
            <img src={imageUrl} width="400" alt="" />
        </div>
        <div>
            {cognitiveServiceResultJson}
        </div>
      </div>
    );
    }

export default ImageCognitiveService;


