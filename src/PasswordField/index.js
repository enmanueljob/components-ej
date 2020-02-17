import React, { useState } from "react"
import styled from "styled-components"

import BaseInput from "../BaseInput"
import Label from "../Label"

import type { BaseProps } from "../BaseInput"

type Props = {
  showPassword: boolean,
  label?: string
} & BaseProps

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    border: none;
  }
`

const PasswordField = ({ showPassword, label, error, name }: Props) => {
  const [showPwd, setShowPwd] = useState(false)

  const inputType = showPwd ? "text" : "password"

  return (
    <BaseInput
      name={name}
      error={error}
      type={inputType}
      header={
        label && (
          <Header>
            <Label htmlFor={name}>{label}</Label>
            {showPassword && (
              <button onClick={() => setShowPwd(prevShowPwd => !prevShowPwd)}>
                {showPwd ? "Ocultar" : "Mostrar"}
              </button>
            )}
          </Header>
        )
      }
    />
  )
}

export default PasswordField
