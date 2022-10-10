export interface IPerson {
  id: number;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
}
export interface IStarship {
  id: number;
  name: number | string;
  model: number | string;
  manufacturer: number | string;
  costInCredits: number | string;
  length: number | string;
  crew: number | string;
  passengers: number | string;
  cargoCapacity: number | string;
}

export interface IPlanet {
  id: number;
  name: number | string;
  population: number | string;
  rotationPeriod: number | string;
  diameter: number | string;
}

export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson).slice(0, 5);
  };

  getPerson = async (id: number) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const { results } = await this.getResource(`/planets/`);
    return results.map(this._transformPlanet);
  };

  getPlanet = async (id: number) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship).slice(0, 5);
  };

  getStarship = async (id: number) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }: { id: number }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }: { id: number }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }: { id: number }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _extractId = (item: any) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet: any & IPlanet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = (starship: any & IStarship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = (person: any & IPerson) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
