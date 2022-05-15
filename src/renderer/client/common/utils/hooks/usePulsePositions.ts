import { useCallback, useEffect, useState } from 'react';
import { PulsePositionType } from '../../types';
import pulsePositionService from '../services/pulsePositionService';

type UsePulsePosition = {
  pulsePositions: PulsePositionType[];
  error: Error | null | undefined;
};

const usePulsePositions = (): UsePulsePosition => {
  const [pulsePositions, setPulsePositions] = useState<PulsePositionType[]>([]);
  const [error, setError] = useState<Error | null | undefined>();
  const getPulsePosition = useCallback(async () => {
    try {
      const data = await pulsePositionService.getAsync();
      setPulsePositions(
        [
          {
            id: 0,
            name: '',
          },
        ].concat(data)
      );
    } catch (requestError) {
      setError(requestError as Error);
    }
  }, []);
  useEffect(() => {
    getPulsePosition();
  }, [getPulsePosition]);
  return { pulsePositions, error };
};

export default usePulsePositions;
