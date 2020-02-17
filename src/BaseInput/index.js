// @flow
import React from "react"
import styled from "styled-components"
import { FaExclamationCircle } from "react-icons/fa"

import FormText from "../FormText"

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 7px;
  }
`

const StyledInput = styled.input`
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
  margin-right: ${props => (props.invalid ? "7px" : 0)};
`

const WrapperInput = styled.div`
  border: 1px solid;
  border-color: ${props =>
    props.invalid ? props.theme.color.red : props.theme.color.gray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
`

export type BaseProps = {
  error?: string,
  name: string,
  type?: string
}

type Props = {
  header?: string | any,
  footer?: string | any
} & BaseProps

const Input = ({
  header: Header,
  footer: Footer,
  error,
  name,
  type
}: Props) => {
  return (
    <ContainerInput>
      {Header}
      <WrapperInput invalid={!!error}>
        <StyledInput id={name} type={type} invalid={!!error} />
        {error && <FaExclamationCircle color="red" />}
      </WrapperInput>
      {error && <FormText color="red">{error}</FormText>}
      {Footer}
    </ContainerInput>
  )
}

Input.defaultProps = {
  type: "text"
}

export default Input
