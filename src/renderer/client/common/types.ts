import { FormEvent } from 'react';

export type FormikHandleSubmitType = (
  e?: FormEvent<HTMLFormElement> | undefined
) => void;

export interface ObjectWithStringIndexing {
  [key: string]: any;
}

export type ReceivedDatum = {
  timeStamp: number;
  data: number;
};

export interface IWsMessageType {
  type: string;
}
