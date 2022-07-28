export interface ErrorRoot {
  errors: Error[];
}

export interface Error {
  code: string;
  message: string;
  data: Data;
}

export interface Data {}
