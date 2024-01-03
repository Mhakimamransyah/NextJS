import { useCallback, useState } from "react"

export const useMutatation = () => {

  const [data, setData] = useState({
    res: null,
    isLoading: false,
    isError: false
  });

  const mutate = useCallback(({ method, payload, url, onSuccess }) => {

    setData({
      ...data,
      isLoading: true
    });

    fetch(url, {
      method: method,
      body: payload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json()).then(result => {
      setData({
        ...data,
        res: result
      });
      onSuccess();
    }).catch(e => {
      setData({
        ...data,
        isError: true
      });
    })
  });

  return { ...data, mutate };

}