import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/FormContainer.module.css' ;
import skillStyle from '../../styles/SkillInput.module.css' ;
import { addSkillAction, deleteSkillAction } from '../../redux/actions/skill';
import {TiDeleteOutline} from 'react-icons/ti'

// setSkills, skills, id,
function SkillInput({ value}) {
    const dispatch = useDispatch()
 
    const handledelete = (e)=>{
        
        dispatch({
            type: deleteSkillAction(),
            payload: value
        })
    }
    return (
        // <div>
            <div className={`${styles.inputText} ${styles.skills}`}>
                {/* <div>icon</div> */}
                <div className={skillStyle.skill}>
                    {value}
                </div>
                <div className={skillStyle.delete}>
                    <TiDeleteOutline onClick={handledelete}/>
                </div>
            </div>
        
    )
}

export default SkillInput