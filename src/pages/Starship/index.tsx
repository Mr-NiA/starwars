import { FC } from "react";
import { useParams } from "react-router";
import ItemDetails from "src/components/elements/ItemDetails";
import ItemList from "src/components/elements/ItemList";
import Record from "src/components/elements/RecordItem";
import Row from "src/components/elements/Row";
import Spinner from "src/components/elements/Spinner";
import useRequest from "src/components/hooks/useRequest";
import { swapiService } from "src/service";

const StarshipPage: FC = () => {
  const { id } = useParams();
  const [Starships, isLoadingStarships, errorStarships] = useRequest(
    swapiService.getAllStarships
  );
  const [currentStarship, isLoadStarship, errorStarship] = useRequest(
    swapiService.getStarship,
    id!
  );

  const StarshipDetails = (props: any) => (
    <ItemDetails {...props}>
      <Record {...props} field="model" label="Model" />
      <Record {...props} field="length" label="Length" />
      <Record {...props} field="costInCredits" label="Cost" />
    </ItemDetails>
  );

  const _renderStarship = () => {
    if (id) {
      if (isLoadStarship) {
        return <Spinner />;
      } else if (currentStarship) {
        return (
          <StarshipDetails
            item={currentStarship}
            img={swapiService.getStarshipImage({
              id: currentStarship.id,
            })}
          />
        );
      } else if (errorStarship) {
        return errorStarship;
      } else return null;
    }
  };

  if (isLoadingStarships) return <Spinner />;
  else if (Starships && !isLoadingStarships)
    return (
      <Row left={<ItemList data={Starships} />} right={_renderStarship()} />
    );
  else if (errorStarships) return <h2>Starships error</h2>;
  else return null;
};

export default StarshipPage;
