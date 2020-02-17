import React from "react"
import styled from "styled-components"
import classnames from "classnames"

type Props = {
  size: string,
  className?: string,
  for?: string
}

const StyledLabel = styled.label`
  color: black;

  &.red {
    color: red;
  }
`

const Label = ({ color, className, ...rest }: Props) => {
  const labelClass = classnames(
    {
      [`${color}`]: color
    },
    className
  )

  return <StyledLabel className={labelClass} {...rest} />
}

Label.defaultProps = {
  color: "black"
}

export default Label
