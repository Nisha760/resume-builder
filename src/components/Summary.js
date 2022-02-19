import React, { useEffect, useRef, useState } from 'react'
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css';
import Editor from './subcomponents/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { summaryAction } from '../redux/actions/summary';
// import JoditEditor from "jodit-react";

function Summary() {
  const summary = useSelector(state=>state.summary) ;
  const dispatch = useDispatch();
  const textareaRef = useRef();
  // const [content, setContent] = useState('')

  useEffect(()=>{
    console.log(summary)
  })

  // const handletext = () => {
  //   // console.log(textareaRef.current.value)
  //   setContent(prev => {
  //     if (prev != textareaRef.current.value) {
  //       return textareaRef.current.value
  //     } else {
  //       return prev
  //     }
  //   })
  // }

  const handleSubmit = (e)=>{
    e.preventDefault() ;

    dispatch({
      type: summaryAction(),
      payload: textareaRef.current.value
    })
  }
  return (
    <>

      <div>
        <FormCotainer>
          <div className={styles.formWrapper}>
            <div className={styles.header}>
              <div>Summary</div>
              <div>Briefly describe the value that you bring through your skills, background and experience</div>
            </div>

            <form className={styles.formContainer}>
              <textarea ref={textareaRef} 
                placeholder="Customise your summary to the job you are applying to.">

              </textarea>

              <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
                Save and Continue
              </button>
              <div>
                {summary.summary}
              </div>
            </form>
          </div>
        </FormCotainer>
      </div>
      {/* <Editor
        config={config2}
        value={content1}
        onChange={(c) => {
          setContent1(c);
          console.log(c);
        }}
      /> */}
    </>
  )
}

export default Summary;