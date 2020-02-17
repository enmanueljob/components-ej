// @flow
import React from "react"
import VendorLoader from "react-loader-spinner"
import { withTheme } from "styled-components"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

type Props = {
  loading: boolean,
  type?: string,
  size?: number,
  theme: { [x: string]: any }
}

const Loader = ({ theme, loading, type, size }: Props) => (
  <VendorLoader
    type={type}
    color={theme.color.gray}
    height={size}
    width={size}
    visible={loading}
  />
)

Loader.defaultProps = {
  loading: true,
  type: "Oval",
  size: 50
}

export default withTheme(Loader)
