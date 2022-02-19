import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css' ;
// import { nameActionCreator, emailActionCreator } from '../redux/actions/Contact';

function ContactInfo() {
  const contact = useSelector(state=> state.contact) ;
  const dispatch = useDispatch() ;
  const nameRef = useRef() ;
  const emailRef = useRef() ;

  const handleSubmit = (e)=>{
    e.preventDefault() ;
    dispatch({
      type: nameRef.current.name,
      payload: nameRef.current.value
    }) ;

    dispatch({
      type: emailRef.current.name,
      payload: emailRef.current.value
    })
  }

  return (
    <div>
      <FormCotainer>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div>Tell us about yourself</div>
            <div>With this info, recruiters will be able to find you</div>
          </div>

          <form className={styles.formContainer}>
            <div className={styles.inputText}>
              <label>Name</label>
              <input ref={nameRef} name='name' type='text' />
            </div>
            <div className={styles.inputText}>
              <label>Email</label>
              <input ref={emailRef} name='email' type='text' />
            </div>

            <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
              Save and Continue
            </button>
          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default ContactInfo ;