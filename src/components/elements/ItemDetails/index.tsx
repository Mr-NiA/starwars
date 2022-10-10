import { FC } from "react";
import "./styles.scss";

interface IProps {
  item: any;
  children: any;
  img: string;
}

const ItemDetails: FC<IProps> = ({ item, children, img }) => {
  if (!item) return <span>Select a item from a list</span>;
  else
    return (
      <div className="item-details card">
        <img className="item-image" src={img} alt="item" />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">{children}</ul>
        </div>
      </div>
    );
};

export default ItemDetails;
