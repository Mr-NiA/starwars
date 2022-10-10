import { FC } from "react";
import { useParams } from "react-router";
import ItemDetails from "src/components/elements/ItemDetails";
import ItemList from "src/components/elements/ItemList";
import Record from "src/components/elements/RecordItem";
import Row from "src/components/elements/Row";
import Spinner from "src/components/elements/Spinner";
import useRequest from "src/components/hooks/useRequest";
import { swapiService } from "src/service";

const PeoplePage: FC = () => {
  const { id } = useParams();
  const [people, isLoadingPeople, errorPeople] = useRequest(
    swapiService.getAllPeople
  );
  const [person, isLoadingPerson, errorPerson] = useRequest(
    swapiService.getPerson,
    id!
  );

  const PersonDetails = (props: any) => {
    return (
      <ItemDetails {...props}>
        <Record {...props} field="gender" label="Gender" />
        <Record {...props} field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
  };

  const _renderPerson = () => {
    if (id) {
      if (isLoadingPerson) {
        return <Spinner />;
      } else if (person) {
        return (
          <PersonDetails
            item={person}
            img={swapiService.getPersonImage({
              id: person.id,
            })}
          />
        );
      } else if (errorPerson) {
        return errorPerson;
      } else return null;
    }
  };

  if (isLoadingPeople) return <Spinner />;
  else if (people && !isLoadingPeople)
    return <Row left={<ItemList data={people} />} right={_renderPerson()} />;
  else if (errorPeople) return <h2>Peoples error</h2>;
  else return null;
};

export default PeoplePage;
