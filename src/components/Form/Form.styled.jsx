import styled from '@emotion/styled'
import { Field, Form } from 'formik'


export const InputStyled = styled(Field)`
    color: red;
`;
export const DataForm = styled(Form)`
    box-sizing: border-box;
    width: 400px;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    padding-right: 60px;
    
`;

export const InputWrapper = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;