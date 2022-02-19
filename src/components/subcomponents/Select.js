import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Select.module.css'
import Options from './Options';


//styles from FormContainer.module.css
function Select({ optionsArray, title, name, setValue }) {
    const [optionState, toggleOptions] = useState(false);
    const [selectedOption, setSelectOption] = useState(null);

    useEffect(()=>{

        if(selectedOption !== null)
            setValue(selectedOption) ;
    }, [selectedOption])
    const handleToggleOptions = () => {
        toggleOptions((prev) => !prev);
        console.log(name) ;
    }
    return (
        <div className={styles.selectWrapper}>
            <div className={styles.select} onClick={handleToggleOptions}>
                {
                    selectedOption === null
                    ? title
                    : selectedOption
                }
            </div>

            {/* <div className={styles.optionsBox}> */}
                {

                    optionState
                        ? <Options optionsArray={optionsArray} toggleOptions={toggleOptions} name={name} setSelectOption={setSelectOption} />
                        : null
                }
            {/* </div> */}
        </div>
    )
}

export default Select;