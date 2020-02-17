import React from "react"

import Input from "."

export default {
  title: "Input",
  component: Input
}

export const defaultInput = () => <Input />

export const withLabel = () => <Input label="Nombre" name="name" />

export const invalidInput = () => (
  <Input label="Nombre" name="name" error="Requerido" />
)
