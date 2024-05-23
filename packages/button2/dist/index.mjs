// src/button.tsx
import * as React from "react";

// src/button.css.ts
import { styled } from "next-yak";
var StyledDiv = styled.div`
  color: #333;
  padding: 16px;
  background-color: #f0f0f0;
`;

// src/button.tsx
var Button = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    return /* @__PURE__ */ React.createElement(StyledDiv, null, "Hello, next-yak!");
  }
);
Button.displayName = "Button";
export {
  Button as Button2
};
