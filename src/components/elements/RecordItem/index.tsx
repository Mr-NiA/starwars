import { FC } from "react";

interface IPropsRecord {
  item?: any;
  field: string | number;
  label: string;
}

const Record: FC<IPropsRecord> = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export default Record;
