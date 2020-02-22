// @flow
import React from "react";

import Button from ".";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: { inline: true }
  }
};

export const defaultButton = () => <Button onClick={() => {}}>Click me</Button>;

export const mediumButton = () => (
  <Button onClick={() => {}} size="medium">
    Click me
  </Button>
);

// export const underlineButton = () => (
//   <Button onClick={() => {}} size="medium" underline>
//     Click me
//   </Button>
// );
