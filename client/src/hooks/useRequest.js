import { useState } from "react";
import axios from "axios";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState([]);

  const doRequest = async () => {
    try {
      setErrors([]);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return { doRequest, errors };
};

export default useRequest;
