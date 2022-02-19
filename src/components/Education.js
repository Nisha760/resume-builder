import React, { useEffect, useRef, useState } from 'react'
import FormCotainer from './FormCotainer'
import styles from '../styles/FormContainer.module.css'
import Select from './subcomponents/Select';
import { useDispatch, useSelector } from 'react-redux';
import { schoolAction, schoolCityAction, schoolCountryAction, degreeAction, graduationDateMonthAction, graduationDateYearAction } from '../redux/actions/education';

const monthArr = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const yearArr = [];
let currentYear = new Date().getFullYear();

for (let i = 0; i < 100; i++) {
  yearArr.push(currentYear);
  currentYear--;
}


function Education() {
  const education = useSelector(state => state.education) ;
  const dispatch = useDispatch() ;

  const schoolNameRef = useRef() ;
  const schoolCityRef = useRef() ;
  const schoolCountryRef = useRef() ;
  const schoolDegreeRef = useRef() ;

  const [graduationMonth, setGraduationMonth] = useState('') ;
  const [graduationYear, setGraduationYear] = useState('') ;

  useEffect(()=>{
    dispatch({
      type: graduationDateMonthAction(),
      payload: graduationMonth
    })
  }, [graduationMonth])

  useEffect(()=>{
    dispatch({
      type: graduationDateYearAction(),
      payload: graduationYear
    })
  }, [graduationYear])

  const handleSubmit = (e)=>{
    e.preventDefault() ;
    dispatch({
      type: schoolAction(),
      payload: schoolNameRef.current.value
    })
    dispatch({
      type: schoolCityAction(),
      payload: schoolCityRef.current.value
    })
    dispatch({
      type: schoolCountryAction(),
      payload: schoolCountryRef.current.value
    })
    dispatch({
      type: degreeAction(),
      payload: schoolDegreeRef.current.value
    })

    console.log(education) ;
  }

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
              <input ref={schoolNameRef} type='text' />
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>City/Town</label>
                <input ref={schoolCityRef} type='text' />
              </div>
              <div className={styles.inputText}>
                <label>Country</label>
                <input ref={schoolCountryRef} type='text' />
              </div>
            </div>
            <div className={styles.inputText}>
              <label>Degree</label>
              <input ref={schoolDegreeRef} type='text'/>
            </div>
            <div className={styles.twoInput}>
              <div className={styles.inputText}>
                <label>Graduation Date</label>
                <Select optionsArray={monthArr} setValue={setGraduationMonth} name="month" title="Month" />
              </div>
              <div className={styles.inputText}>
                <label className={styles.secondLabel} >Graduation Date</label>
                <Select optionsArray={yearArr} setValue={setGraduationYear} name="year" title="year" />
              </div>
            </div>
            <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
              Save and Continue
            </button>
            {
              education.schoolName
            }
            {education.schoolCity}
            {education.schoolCountry}
            {education.degree}
            {education.graduationDate[0]}
            {education.graduationDate[1]}

          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default Education