import ICountry from "./ICountry";
import ICountryAnswer from "./ICountryAnswer";
import ICountryQuestion from "./ICountryQuestion";

interface IStoreState {
  answeredCountries: ICountryAnswer[];
  points: number;
  countries: ICountry[];
  countryQuestions: ICountryQuestion[];
}

export default IStoreState;
