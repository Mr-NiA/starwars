import { useEffect, useState } from "react";

const useRequest = (callback: any, id?: string) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("id :>> ", id);
  useEffect(() => {
    setIsLoading(true);
    callback(id ?? "")
      .then((response: any) => setData(response))
      .catch((e: any) => setError(e))
      .finally(() => setIsLoading(false));
  }, [callback, id]);

  return [data, isLoading, error];
};

export default useRequest;
