import { useCallback, useEffect, useState } from "react"

export const useQueries = (url) => {
  ;

  const [data, setData] = useState({
    res: null,
    isLoading: false,
    isError: false
  });

  const fetchingData = useCallback(async ({ url }) => {

    setData({
      ...data,
      isLoading: true
    })
    console.log(url);
    try {

      const response = await fetch(url);
      const results = await response.json();

      setData({
        ...data,
        res: results,
        isLoading: false
      });

    } catch (e) {
      setData({
        ...data,
        isLoading: false,
        isError: true
      });
    }

  }, []);

  useEffect(() => {
    if (url) {
      fetchingData({ url: url });
    }
  }, [])

  return { ...data };

}