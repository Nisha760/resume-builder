import { initialSkill } from "../states/skill";

const skillReducer = (state = initialSkill, action) => {
    switch (action.type) {
        case 'add skill':
            {
                let newState = { ...state, index: ++state.index };
                newState.skillsArr.push({
                    key: newState.index,
                    value: action.payload
                })
                console.log(newState)
                return newState;
            }

        case 'delete skill':
            {
                let newState = { ...state };
                let obj = state.skillsArr.find((o) => {
                    return (o.value === action.payload);
                })

                let newskillsArr = state.skillsArr.filter(ele => ele !== obj);
                newState = {
                    ...newState,
                    skillsArr: newskillsArr
                }
                return newState ;
            }
        default: return state
    }
}

export { skillReducer };