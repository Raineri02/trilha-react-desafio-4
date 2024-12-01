import React from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, disabled }) => {
  return (
    <button type="submit" disabled={disabled} style={{ opacity: disabled ? 0.5 : 1 }}>
      {title}
    </button>
  );
};

export default Button;
