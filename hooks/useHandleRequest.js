import axios from 'axios';
import { useCallback, useState } from 'react';

const useHandleRequest = () => {
  const [request, setRequest] = useState({
    result: [],
    isLoading: false,
    error: !!'',
    noData: false,
  });

  const handleRequest = useCallback((url) => {
    setRequest((state) => ({
      ...state,
      isLoading: true,
    }));
    return axios
      .get(url)
      .then((response) => {
        if (response.data?.length > 0) {
          setRequest((state) => ({
            ...state,
            result: response.data,
            noData: false,
          }));
        } else {
          setRequest((state) => ({
            ...state,
            noData: true,
            result: [],
          }));
        }
      })
      .catch((err) => {
        setRequest((state) => ({
          ...state,
          error: err.response.data,
        }));
      })
      .finally(() => {
        setRequest((state) => ({
          ...state,
          isLoading: false,
        }));
      });
  });

  return { request, setRequest, handleRequest };
};

export default useHandleRequest;
