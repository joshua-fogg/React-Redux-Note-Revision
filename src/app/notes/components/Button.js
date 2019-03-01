import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    padding: 8px 16px;
    font-size: 1rem;
    border:0;
    background-color: ${props => props.color || props.theme.buttonBackground};
    color: ${props => props.theme.buttonText};
`
export default (props) => <Btn {...props}>{props.children}</Btn>
