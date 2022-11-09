import { useEffect, useState } from "react";

const useRequest = <T,>(
  callback: (id: string) => Promise<T>,
  id?: string
): [T, boolean, string] => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await callback(id ?? "");
        setData(result);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [callback, id]);

  return [data, isLoading, error];
};

export default useRequest;
