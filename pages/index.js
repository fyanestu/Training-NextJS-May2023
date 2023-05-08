import React from "react";

export default function index(props) {
  console.log(props);
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const data = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem voluptatibus vel illum, dolore odio? Placeat cupiditate neque suscipit pariatur quia animi, praesentium provident quis fugiat doloremque quibusdam, accusamus delectus.",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem voluptatibus vel illum, dolore odio? Placeat cupiditate neque suscipit pariatur quia animi, praesentium provident quis fugiat doloremque quibusdam, accusamus delectus.",
    },
  ];
  return {
    props: { data },
  };
}
