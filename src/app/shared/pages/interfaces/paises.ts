export interface Paises {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  { [key: string]: Currency };
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Languages {
  fra?: string;
  spa?: string;
  sin?: string;
  tam?: string;
  eng?: EngEnum;
  ara?: Ara;
  som?: string;
  swe?: string;
  vie?: string;
  deu?: string;
  nor?: string;
  smo?: string;
  aym?: string;
  grn?: string;
  que?: string;
  mah?: string;
  cat?: string;
  zdj?: string;
  lao?: string;
  fin?: string;
  amh?: string;
  nya?: string;
  div?: string;
  nep?: string;
  ber?: string;
  pau?: string;
  cal?: string;
  cha?: string;
  por?: string;
  arc?: string;
  ckb?: string;
  ita?: string;
  mlt?: string;
  msa?: string;
  sag?: string;
  sqi?: string;
  zho?: string;
}

export enum Ara {
  Arabic = "Arabic",
}

export enum EngEnum {
  English = "English",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
