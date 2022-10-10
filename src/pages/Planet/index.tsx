import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetails from "src/components/elements/ItemDetails";
import ItemList from "src/components/elements/ItemList";
import Record from "src/components/elements/RecordItem";
import Row from "src/components/elements/Row";
import Spinner from "src/components/elements/Spinner";
import SwapiService, { IPlanet } from "src/service";

const serv = new SwapiService();

const PlanetPage: FC = () => {
  const { id } = useParams();
  const [planets, setPlanets] = useState<IPlanet[]>([] as IPlanet[]);
  const [selectedItem, setSelectedItem] = useState<IPlanet>();
  const [isLoading, setIsLoading] = useState(false);
  const [selIsLoading, setSelIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setSelIsLoading(true);
      try {
        serv.getPlanet(+id).then((response) => {
          setSelectedItem(response);
          setSelIsLoading(false);
        });
      } catch (e) {
        console.log("e :>> ", e);
        setSelIsLoading(false);
      }
    }
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    try {
      serv.getAllPlanets().then((response) => {
        setIsLoading(false);
        setPlanets(response);
      });
    } catch (e) {
      console.log("e :>> ", e);
      setIsLoading(false);
    }
  }, []);

  const PlanetDetails = (props: any) => (
    <ItemDetails {...props}>
      <Record {...props} field="population" label="Population" />
      <Record {...props} field="rotationPeriod" label="Rotation Period" />
      <Record {...props} field="diameter" label="Diameter" />
    </ItemDetails>
  );

  console.log("planet", planets);
  if (isLoading) return <Spinner />;
  else if (planets && !isLoading)
    return (
      <Row
        left={<ItemList data={planets} />}
        right={
          selIsLoading ? (
            <Spinner />
          ) : selectedItem ? (
            <PlanetDetails
              item={selectedItem}
              img={serv.getPlanetImage({ id: selectedItem.id })}
            />
          ) : null
        }
      />
    );
  else return null;
};

export default PlanetPage;
