import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {ADDITION, SUBTRACT, MULTIPLY, DIVIDE, CLEAR} from "../../modules/counter";


export function Calculator() {

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const result = useSelector(state => state.calculation);
    const dispatch = useDispatch();

    function firstUserInput(event) {
        setFirstInput(event.target.value)
    }

    function secondUserInput(event) {
        setSecondInput(event.target.value)
    }

    function calculationAdd() {
        dispatch({
            type: ADDITION,
            inputs: {
                firstInput,
                secondInput
            }
        })
    }

    function calculationSubtract() {
        dispatch({
            type: SUBTRACT,
            inputs: {
                firstInput,
                secondInput
            }
        })
    }

    function calculationMultiply() {
        dispatch({
            type: MULTIPLY,
            inputs: {
                firstInput,
                secondInput
            }
        })
    }

    function calculationDivide() {
        dispatch({
            type: DIVIDE,
            inputs: {
                firstInput,
                secondInput
            }
        })
    }

    function clearForm() {
        dispatch({
            type: CLEAR,
             result,
             }
        )
    }

    return <>
        <Card className={"text-center p-3 cardStyle m-5 borderStyle"}>
            <h1 className={"text-center cardHeader m-3"}>Free Calculator</h1>
            <input className={"inputField m-2"} onChange={firstUserInput} value={firstInput} type={"number"} placeholder={"First number here"} /><br/>
            <input className={"inputField m-2"} onChange={secondUserInput} value={secondInput} type={"number"} placeholder={"Second number here"} /><br/>
            <Button className={"m-2 text-center"} variant="success" onClick={calculationAdd}>+</Button>{' '}
            <Button className={"m-2 text-center"} variant="primary" onClick={calculationSubtract}>-</Button>{' '}
            <Button className={"m-2 text-center"} variant="warning" onClick={calculationMultiply}>*</Button>{' '}
            <Button className={"m-2 text-center"} variant="danger" onClick={calculationDivide}>/</Button>{' '}
            <div className={"p-4"}>
                <h3 className={"cardHeader"}>Result: {result}</h3>
                <button className={"p-2 m-4"} onClick={clearForm}>Clear</button>
            </div>
        </Card>
    </>
}