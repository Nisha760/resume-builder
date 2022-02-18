import React from 'react'
import FormCotainer from './FormCotainer'
import styles from '../styles/FormContainer.module.css'
import Select from './subcomponents/Select';

const monthArr = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const yearArr = [];
let currentYear = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  yearArr.push(currentYear);
  currentYear--;
}


function Education() {
  return (
    <div>
      <FormCotainer>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div>Education</div>
            <div>Start with your most recent educational institution.</div>
          </div>

          <form className={styles.formContainer}>
            <div className={styles.inputText}>
              <label>School Name</label>
              <input type='text' />
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>City/Town</label>
                <input type='text' />
              </div>
              <div className={styles.inputText}>
                <label>Country</label>
                <input type='text' />
              </div>
            </div>
            <div className={styles.inputText}>
              <label>Degree</label>
              <input type='text'/>
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>Graduation Date</label>
                <Select optionsArray={monthArr} name="month" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel} >Graduation Date</label>
                <Select optionsArray={yearArr} name="year" title="year" />
              </div>
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

export default Education