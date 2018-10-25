import * as constants from '../constants/actions';
import ICountry from '../types/ICountry';

export interface IAddCountry {
  country: ICountry;
  type: constants.ADD_COUNTRY;
}

export interface ISetCountries {
  countries: ICountry[];
  type: constants.SET_COUNTRIES;
}

export type CountryAction = IAddCountry | ISetCountries;

export const addCountry = (
  name: string,
  capital: string,
  largestCity: string | undefined = undefined,
  secondLargestCity: string | undefined = undefined,
): IAddCountry => ({
  country: {
    capital,
    largestCity,
    name,
    secondLargestCity,
  },
  type: constants.ADD_COUNTRY,
});

export const setCountries = (countries: ICountry[]): ISetCountries => ({
  countries,
  type: constants.SET_COUNTRIES,
});
