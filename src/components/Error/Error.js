import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import translate from 'translate';

function Error(props) {
  
  const { error } = props;

  const [translateWord, setTranslateWord] = useState('');

  useEffect(() => {
    async function translateWord() {
      const word = await translate(error, {
        to: "ru",
        engine: "google",
        key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
      });
      setTranslateWord(word);
    }
    translateWord();
  }, [error]);

  return (
    <div>
      <div style={{color: 'red'}}>
        {translateWord}
      </div>
    </div>
  )
}

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(mapStateToProps, null)(Error);