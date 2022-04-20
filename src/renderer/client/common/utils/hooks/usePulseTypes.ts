import { useCallback, useEffect, useState } from 'react';
import tcmAPIRequestController from '../../tcmAPI';

type PulseType = {
  id: number;
  name: string;
};

type UsePulseType = {
  pulseTypes: PulseType[];
  error: Error | null | undefined;
};

const usePulseTypes = (): UsePulseType => {
  const [pulseTypes, setPulseTypes] = useState<PulseType[]>([]);
  const [error, setError] = useState<Error | null | undefined>(null);
  const getPulseTypes = useCallback(async () => {
    const { data, error: requestError } = await tcmAPIRequestController.get(
      '/pulse-type'
    );
    setPulseTypes(data);
    if (requestError) {
      setError(requestError);
    }
  }, [setPulseTypes, setError]);
  useEffect(() => {
    getPulseTypes();
  }, [getPulseTypes]);

  return { pulseTypes, error };
};

export default usePulseTypes;
