// @flow
import React from "react"

import BaseInput from "../BaseInput"
import Label from "../Label"

import type { BaseProps } from "../BaseInput"

export type Props = {
  label?: string
} & BaseProps

const Input = ({ label, error, name, type }: Props) => {
  return (
    <BaseInput
      id={name}
      name={name}
      error={error}
      type={type}
      header={label && <Label htmlFor={name}>{label}</Label>}
    />
  )
}

Input.defaultProps = {
  type: "text"
}

export default Input
