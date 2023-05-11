"use strict";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/product")
      .then((res) => {
        if (res?.data?.data && Array.isArray(res?.data?.data)) {
          let obj = {
            id: 1,
          };
          setData([...res?.data?.data]);
        }

        setLoading(false);
      })
      .catch((err) => {
        setData([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full pt-[100px]" style={{ paddingTop: 100 }}>
      <h1 className="text-black">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(data) && data.length > 0 ? (
        data.map((item) => {
          return (
            <div className={"text-black"} style={{ marginBottom: 40 }}>
              <p>id :{item.id}</p>
              <p>title : {item.title} </p>
              <p>description : {item.description} </p>
              <p>price : {item.price} </p>

              <Image
                src={item.thumbnail}
                alt={"product image"}
                width={300}
                height={300}
                className={""}
              />
            </div>
          );
        })
      ) : (
        "is empty"
      )}
    </div>
  );
}
