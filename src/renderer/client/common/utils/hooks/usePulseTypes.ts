import { useCallback, useEffect, useState } from 'react';
import { PulseType } from '../../types';
import pulseTypeService from '../services/pulseTypeService';

type UsePulseType = {
  pulseTypes: PulseType[];
  error: Error | null | undefined;
};

const usePulseTypes = (): UsePulseType => {
  const [pulseTypes, setPulseTypes] = useState<PulseType[]>([]);
  const [error, setError] = useState<Error | null | undefined>(null);
  const getPulseTypes = useCallback(async () => {
    try {
      const data = await pulseTypeService.getAsync();
      setPulseTypes(data);
    } catch (requestError) {
      setError(requestError as Error);
    }
  }, [setPulseTypes, setError]);
  useEffect(() => {
    getPulseTypes();
  }, [getPulseTypes]);

  return { pulseTypes, error };
};

export default usePulseTypes;
