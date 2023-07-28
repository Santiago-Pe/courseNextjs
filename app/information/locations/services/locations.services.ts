import { Location } from "../models";

export const getLocation = (): Promise<Location[]> => {
  const url = "https://rickandmortyapi.com/api/location";
  // const urlWithId = `${url}/${id}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};
