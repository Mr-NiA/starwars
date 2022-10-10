import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface IProps {
  data: any;
}

const ItemList: FC<IProps> = ({ data }) => {
  return (
    <ul className="item-list list-group">
      {data.map(({ id, name }: any) => (
        <Link to={id} key={id}>
          <li className="list-group-item">{name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default ItemList;
