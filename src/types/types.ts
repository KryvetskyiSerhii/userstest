export enum locations {
  MAIN = "/",
  COMMENTS = "/comments",
}

export interface RouterProps {
  path: locations;
  component: React.ComponentType;
  name: string;
}

export interface Theme {
  border: string;
  textColor: string;
  background: string;
}

interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Albums {
  id: number;
  userId: number;
  title: string;
}

export interface StateProps {
  users: User[];
  status: string;
  comments: Comments[];
  albums: Albums[];
  isAlbumModalVisible: boolean;
}
