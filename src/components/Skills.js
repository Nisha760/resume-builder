import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FormCotainer from './FormCotainer';
import styles from '../styles/FormContainer.module.css';
import SkillInput from './subcomponents/SkillInput';
import { addSkillAction, deleteSkillAction } from '../redux/actions/skill';

const arr = ['', '', '', '', ''];
let index = 0;


function Skills() {
  const skillState = useSelector(state=>state.skills) ;
  const dispatch = useDispatch() ;

  const skillRef = useRef() ;
  // const [skills, setSkills] = useState({
  //   index, 
  //   skillsArr: []
  // });

  useEffect(()=>{
    skillRef.current.value = '' ;
  })
 

  const handleSkill = (e)=>{
    e.preventDefault() ;
    

    // if(skillRef.current.value !== '')
    // {
      dispatch({
        type: addSkillAction(),
        payload: skillRef.current.value
      })
    // }
     
  }

  return (
    <div>
      <FormCotainer>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <div>Skills</div>
            <div>Add a few skills to show employers what you're good at</div>
          </div>

          <form className={styles.formContainer}>


            {
              skillState.skillsArr.map((ele, i) => {
                return (

                  <SkillInput key={ele.key} id={ele.key} value={ele.value} />
                )
              })
            }

            <div className={`${styles.inputText} ${styles.addSkill}`}>
              {/* <div>icon</div> */}
              <input type='text' ref={skillRef} placeholder={`add skill`} />
            </div>

            <button className={styles.addSkillButton}  onClick={handleSkill}>Add Skill</button>

            <button type='submit' className={styles.submitButton}>
              Enter Work Experience
            </button>

            {/* <div>
              {
                
              }
            </div> */}
          </form>
        </div>
      </FormCotainer>
    </div>
  )
}

export default Skills