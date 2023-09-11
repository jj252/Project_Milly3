import {LOADED_QUESTIONS} from '../shared/LOADED_QUESTIONS';

export const SelectAllQuestions = () => {
    
    return (
        LOADED_QUESTIONS.filter((question) => question.name )
    )
}

