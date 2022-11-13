import { useCallback, useMemo, useState } from "react";

type InitialState<StateType> = {
  [Key in keyof StateType]: boolean;
};

function useFlags<StateType>(initialState: InitialState<StateType>) {
  const [loadingState, setLoadingState] = useState(initialState);

  const isLoading = useMemo(() => Object.values(loadingState).some((loading) => loading), [loadingState]);

  const handleChangeLoadingState = useCallback(
    (key: keyof StateType, value: boolean) => {
      setLoadingState((state) => ({
        ...state,
        [key]: value,
      }));
    },
    [setLoadingState],
  );

  return {
    isLoading,
    handleChangeLoadingState,
  };
}

export default useFlags;
