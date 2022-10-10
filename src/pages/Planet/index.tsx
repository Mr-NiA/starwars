import { FC } from "react";
import { useParams } from "react-router";
import ItemDetails from "src/components/elements/ItemDetails";
import ItemList from "src/components/elements/ItemList";
import Record from "src/components/elements/RecordItem";
import Row from "src/components/elements/Row";
import Spinner from "src/components/elements/Spinner";
import useRequest from "src/components/hooks/useRequest";
import { swapiService } from "src/service";

const PlanetPage: FC = () => {
  const { id } = useParams();
  const [planets, isLoadingPlanets, errorPlanets] = useRequest(
    swapiService.getAllPlanets
  );
  const [currentPlanet, isLoadPlanet, errorPlanet] = useRequest(
    swapiService.getPlanet,
    id!
  );

  const PlanetDetails = (props: any) => (
    <ItemDetails {...props}>
      <Record {...props} field="population" label="Population" />
      <Record {...props} field="rotationPeriod" label="Rotation Period" />
      <Record {...props} field="diameter" label="Diameter" />
    </ItemDetails>
  );

  const _renderPlanet = () => {
    if (id) {
      if (isLoadPlanet) {
        return <Spinner />;
      } else if (currentPlanet) {
        return (
          <PlanetDetails
            item={currentPlanet}
            img={swapiService.getPlanetImage({
              id: currentPlanet.id,
            })}
          />
        );
      } else if (errorPlanet) {
        return errorPlanet;
      } else return null;
    }
  };

  if (isLoadingPlanets) return <Spinner />;
  else if (planets && !isLoadingPlanets)
    return <Row left={<ItemList data={planets} />} right={_renderPlanet()} />;
  else if (errorPlanets) return <h2>Planets error</h2>;
  else return null;
};

export default PlanetPage;
