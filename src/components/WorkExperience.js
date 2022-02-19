import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css';
import Select from './subcomponents/Select';
import { jobAction, companyAction, cityAction, startDateMonthAction, startDateYearAction, endDateMonthAction, endDateYearAction, countryAction } from '../redux/actions/experience';

const monthArr = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const yearArr = [];
let currentYear = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  yearArr.push(currentYear);
  currentYear--;
}


function WorkExperience() {
  const experience = useSelector(state => state.experience);
  const dispatch = useDispatch();

  const jobRef = useRef();
  const companyRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const [startDateMonth, setStartDateMonth] = useState('') ;
  const [startDateYear, setStartDateYear] = useState('') ;
  const [endDateMonth, setEndDateMonth] = useState('') ;
  const [endDateYear, setEndDateYear] = useState('') ;

  useEffect(()=>{
    dispatch({
      type: startDateMonthAction(),
      payload: startDateMonth
    })
  }, [startDateMonth])

  useEffect(()=>{
    dispatch({
      type: startDateYearAction(),
      payload: startDateYear
    })
  }, [startDateYear])
  useEffect(()=>{
    dispatch({
      type: endDateMonthAction(),
      payload: endDateMonth
    })
  }, [endDateMonth])
  useEffect(()=>{
    dispatch({
      type: endDateYearAction(),
      payload: endDateYear
    })
  }, [endDateYear])

  const handleSubmit = (e)=>{
    e.preventDefault() ;
    dispatch({
      type: jobAction() ,
      payload: jobRef.current.value
    })
    dispatch({
      type: companyAction(),
      payload: companyRef.current.value
    })
    dispatch({
      type: cityAction(),
      payload: cityRef.current.value
    })
    dispatch({
      type: countryAction(),
      payload: countryRef.current.value
    })

    // console.log(experience)
    // console.log(experience.job) ;
  }

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
              <input ref={jobRef} type='text' />
            </div>
            <div className={styles.inputText}>
              <label>Company</label>
              <input ref={companyRef} type='text' />
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>City/Town</label>
                <input ref={cityRef} type='text' />
              </div>
              <div className={styles.inputText}>
                <label>Country</label>
                <input ref={countryRef} type='text' />
              </div>
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>Start Date</label>
                <Select optionsArray={monthArr} setValue={setStartDateMonth} name="month" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel} >Start Date</label>
                <Select optionsArray={yearArr} setValue={setStartDateYear} name="year" title="year" />
              </div>
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>End Date</label>
                <Select optionsArray={monthArr} setValue={setEndDateMonth} name="month2" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel}>End Date</label>
                <Select optionsArray={yearArr} setValue={setEndDateYear} name="year2" title="Year" />
              </div>
            </div>
            <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
              Enter Work Experience
            </button>
            {
              experience.job
            }
          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default WorkExperience