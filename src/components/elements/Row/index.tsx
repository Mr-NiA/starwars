import { FC } from "react";

interface IProps {
  left: any;
  right?: any;
}

const Row: FC<IProps> = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      {right && <div className="col-md-6">{right}</div>}
    </div>
  );
};

export default Row;
