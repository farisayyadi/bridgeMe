import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  route?: string;
  size?: "small" | "big";
  type?: "primary" | "secondary" | "warning";
  disabled?: boolean;
  onClick?: () => void;
  testId?: string;
  className?: string;
  buttonType?: "button" | "submit";
}

const Button = ({
  text,
  route,
  size = "big",
  type = "primary",
  disabled = false,
  onClick,
  testId = "button-component",
  className,
  buttonType = "button",
}: ButtonProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!disabled) {
      // Only handle clicks if the button is not disabled
      if (route) {
        router.push(route); // Use the route prop here to handle navigation
      }
      if (onClick) {
        onClick();
      }
    }
  };

  const buttonClasses = classNames(
    styles.button,
    styles[size],
    styles[type],
    { [styles.disabled]: disabled },
    className
  );

  return (
    <button
      type={buttonType} // Set the button type dynamically
      className={buttonClasses}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={text}
      data-testid={testId}
      onClick={buttonType === "button" ? handleClick : undefined} // Only use onClick if not submit
    >
      {text}
    </button>
  );
};

export default Button;
