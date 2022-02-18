import React from 'react'
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css' ;

function ContactInfo() {
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
              <input type='text' />
            </div>
            <div className={styles.inputText}>
              <label>Email</label>
              <input type='text' />
            </div>

            <button type='submit' className={styles.submitButton}>
              Save and Continue
            </button>
          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default ContactInfo ;