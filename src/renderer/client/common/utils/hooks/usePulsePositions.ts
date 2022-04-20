import { useCallback, useEffect, useState } from 'react';
import tcmAPIRequestController from '../../tcmAPI';

export type PulsePositionType = {
  id: number;
  name: string;
};

type UsePulsePosition = {
  pulsePositions: PulsePositionType[];
  error: Error | null | undefined;
};

const usePulsePositions = (): UsePulsePosition => {
  const [pulsePositions, setPulsePositions] = useState<PulsePositionType[]>([]);
  const [error, setError] = useState<Error | null | undefined>();
  const getPulsePosition = useCallback(async () => {
    const { data, error: requestError } = await tcmAPIRequestController.get(
      '/hand-position'
    );
    setPulsePositions(
      [
        {
          id: 0,
          name: '',
        },
      ].concat(data)
    );
    if (requestError) {
      setError(requestError);
    }
  }, []);
  useEffect(() => {
    getPulsePosition();
  }, [getPulsePosition]);
  return { pulsePositions, error };
};

export default usePulsePositions;
