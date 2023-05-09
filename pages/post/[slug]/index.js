import axios from "axios";
import React from "react";

export default function Multi(props) {
  let { data, slug } = props;

  return (
    <div>
      <h1>Post Detail - {slug}</h1>
      <div>
        <pre>
          {typeof data !== "undefined" &&
            typeof data === "object" &&
            Object.keys(data).length > 0 &&
            Object.entries(data).map(([key, value]) => {
              return (
                <div>
                  <span>{key}</span>
                  <span> - </span>
                  <span>{value}</span>
                </div>
              );
            })}
        </pre>
      </div>
    </div>
  );
}

/* export async function getStaticPaths() {
  let paths = [];

  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      paths = res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  if (Array.isArray(paths) && paths.length > 0) {
    paths = paths.map((item) => ({
      params: { id: `${item?.id}` },
    }));
  }

  return {
    paths: paths ?? [],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let { slug } = context.params;
  let data = null;

  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    .then((res) => {
      if (
        typeof res?.data !== "undefined" &&
        typeof res?.data === "object" &&
        Object.keys(res?.data).length > 0
      ) {
        data = res.data;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });

  return {
    props: {
      data,
      slug,
    },
  };
} */
