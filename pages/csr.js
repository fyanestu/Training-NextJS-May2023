import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState({ page: 1, limit: 10 });

  let timeout;

  useEffect(() => {
    setIsLoading(true);

    timeout = setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            ...params,
          },
        })
        .then((res) => {
          setData(res.data);
          console.log("data", res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setData([]);
          console.log("err", err);
          setIsLoading(false);
        });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [params]);

  return (
    <div className="w-full">
      <h1>Client Side Rendering</h1>
      <button onClick={() => setParams({ ...params, page: params.page + 1 })}>
        Click to Change Page
      </button>
      <div className="space-y-6 block">{isLoading ? "LOADING" : "SUCCESS"}</div>
    </div>
  );
}
