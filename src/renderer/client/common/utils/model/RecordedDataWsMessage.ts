import { ReceivedDatum, IWsMessageType } from '../../types';

type RecordedDataWsMessageConstructorType = {
  type: string;
  data: ReceivedDatum[];
};

class RecordedDataWsMessage implements IWsMessageType {
  private messageType: string;

  private recordedData: ReceivedDatum[];

  get data(): ReceivedDatum[] {
    return this.recordedData;
  }

  get type(): string {
    return this.messageType;
  }

  constructor(parsedMessage: RecordedDataWsMessageConstructorType) {
    this.messageType = parsedMessage.type;
    this.recordedData = parsedMessage.data;
  }
}

export default RecordedDataWsMessage;
