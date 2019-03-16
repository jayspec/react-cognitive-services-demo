import React, { useState } from 'react';

function TextCognitiveService(props) {
    const [text, setText] = useState(props.defaultText);
    const [cognitiveServiceResultJson, setCognitiveServiceResultJson] = useState("");
  
    function getResultsFromCognitiveService() {
      setCognitiveServiceResultJson("");
      props.cognitiveServiceHandler(text)
        .then(result => {
            setCognitiveServiceResultJson(result);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function handleChange(event) {
      setText(event.target.value);
    }

    return (
      <div>
        <form>
          <textarea rows="5" cols="80" value={text} onChange={e => handleChange(e)} >
          </textarea>
        <button type="button" onClick={() => getResultsFromCognitiveService()}>
          Query Cognitive Services
        </button>
        </form>
        <div>
            {cognitiveServiceResultJson}
        </div>
      </div>
    );
    }

export default TextCognitiveService;


