
const Questions = (my_question) =>{

        const questions_increment = my_question.prop2;
        const questions = my_question;

        return (
        <>
        <div>{questions.prop[questions_increment].question}</div>,
        </>
        )
    
}

export default Questions;