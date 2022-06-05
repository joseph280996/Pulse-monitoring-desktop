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

export type PulseType = {
  id: number;
  name: string;
};

export type PulsePositionType = {
  id: number;
  name: string;
};

export type RecordType = {
  id: number;
  pulseTypeID?: number;
  handPositionID?: number;
  data: ReceivedDatum[];
  patientID?: number;
};

export type WSMessageType = {
  type: string;
  recordedData: ReceivedDatum[];
};
