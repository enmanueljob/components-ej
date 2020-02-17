import React from "react"

import PasswordField from "."

export default {
  title: "Password Field",
  component: PasswordField,
  parameters: {
    info: {
      inline: true
    }
  }
}

export const defaultPasswordField = () => <PasswordField />

export const withLabel = () => (
  <PasswordField label="Password" name="password" />
)

export const invalidPasswordField = () => (
  <PasswordField label="Password" name="password" error="Requerido" />
)

export const showPassword = () => (
  <PasswordField
    label="Password"
    name="password"
    error="Requerido"
    showPassword
  />
)
