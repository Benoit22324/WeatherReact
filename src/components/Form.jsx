import InputCity from "./InputCity"
import Submit from "./Submit"

const Form = () => {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
                <InputCity />
                <Submit />
            </div>
        </>
    )
}

export default Form