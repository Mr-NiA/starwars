import "./styles.scss";
import { FC } from "react";

const ErrorIndicator: FC = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
