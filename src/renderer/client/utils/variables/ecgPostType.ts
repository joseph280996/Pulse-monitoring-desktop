type StartType = 'start';
type StopType = 'stop';
type EcgPostType = {
  START: StartType;
  STOP: StopType;
};

const ECG_POST_TYPE: EcgPostType = {
  START: 'start',
  STOP: 'stop',
};

export default ECG_POST_TYPE;
