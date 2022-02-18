import React from 'react'
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css' ;
import Options from './subcomponents/Options';
import Select from './subcomponents/Select';

const monthArr = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const yearArr = [];
let currentYear = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  yearArr.push(currentYear);
  currentYear--;
}


function WorkExperience() {
  return (
    <div>
      <FormCotainer>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div>Work Experience</div>
            <div>Start with your recent position</div>
          </div>

          <form className={styles.formContainer}>
            <div className={styles.inputText}>
              <label>Job Title</label>
              <input type='text' />
            </div>
            <div className={styles.inputText}>
              <label>Comapany</label>
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
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>Start Date</label>
                <Select optionsArray={monthArr} name="month" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel} >Start Date</label>
                <Select optionsArray={yearArr} name="year" title="year" />
              </div>
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>End Date</label>
                <Select optionsArray={monthArr} name="month2" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel}>End Date</label>
                <Select optionsArray={yearArr} name="year2" title="Year" />
              </div>
            </div>
            <button type='submit' className={styles.submitButton}>
              Enter Work Experience
            </button>
          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default WorkExperience