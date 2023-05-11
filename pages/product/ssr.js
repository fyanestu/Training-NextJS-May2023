import axios from "axios";
import Image from "next/image";
import React from "react";

/**
 *
 * @param {Object} props
 * @param {Object} props.pagination
 * @param {Number} props.pagination.limit
 * @param {Number} props.pagination.skip
 * @param {Number} props.pagination.total
 * @param {Array} props.data
 * @returns {JSX.Element}
 * @constructor
 */
export default function SSR(props) {
  let { data, pagination } = props;
  return (
    <div>
      {Array.isArray(data) && data.length > 0
        ? data.map((item) => {
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
        : "is empty"}
    </div>
  );
}

export async function getServerSideProps() {
  let response = await axios
    .get("http://localhost:3000/api/product")
    .then((res) => {
      if (res?.data?.data && Array.isArray(res?.data?.data)) {
        let data = res?.data;
        return {
          pagination: {
            limit: data?.limit ?? 10,
            skip: data?.skip ?? 0,
            total: data?.total ?? 0,
          },
          data: data?.data ?? [],
        };
      }
    })
    .catch((err) => {
      return {
        pagination: {
          limit: 10,
          skip: 0,
          total: 0,
        },
        data: [],
      };
    });

  return {
    props: {
      ...response,
    },
  };
}
