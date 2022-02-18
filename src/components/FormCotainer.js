import React from 'react'
import styles from '../styles/FormContainer.module.css'

function FormCotainer({children}) {
    return (
        // <div className={styles.formWrapper}>
        //     <div className={styles.header}>
        //         <div>heading</div>
        //         <div>sub heading</div>
        //     </div>

        //     <form className={styles.formContainer}>
        //         <div className={styles.inputText}>
        //             <label>text</label>
        //             <input type='text' />
        //         </div>
        //         <button type='submit' className={styles.submitButton}>submit</button>
        //     </form>
        // </div>
        <>
            {children}
        </>
    )
}

export default FormCotainer