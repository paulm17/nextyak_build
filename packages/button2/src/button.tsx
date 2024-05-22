import * as React from "react";
import { StyledDiv } from "./button.css";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    return (
      <StyledDiv>Hello, next-yak!</StyledDiv>
    );
  },
);
Button.displayName = "Button";

export { Button };
