import React, { useRef } from 'react'
import styles from '../../styles/Options.module.css'

function Options({ optionsArray, name, toggleOptions, setSelectOption }) {
    // const optionRef = useRef() ;

    const handleOption = (e) => {
        setSelectOption(e.target.value);
        toggleOptions(prev=> !prev) ;
    }

    return (
        <div className={styles.optionContainer}>

            
                {
                    
                    optionsArray.map((ele) => {
                        return (
                            <label key={ele} htmlFor={ele}>
                                <div className={styles.option}>
                                    {ele}
                                    <input type='radio' id={ele} name={name} value={ele} onClick={handleOption} />
                                </div>
                            </label>
                        )
                    })
                    
                }
            
        </div>
    )
}

export default Options