import Card from "@app/src/components/Card";
import axios from "axios";

export default function index(props) {
  // console.log(props);
  return (
    <div className="h-screen w-full bg-white bg-fixed mx-auto max-w-[900px]">
      <h1 className="text-primary">Home</h1>
      <div>
        <Card
          id={1}
          title={"Test Title"}
          thumbnail={"/logo-bank-mega.png"}
          description={"Ini test description"}
        />
        <Card
          id={2}
          title={"Test Title 2"}
          thumbnail={"/logo-bank-mega-syariah.png"}
          description={"Ini test description syariah"}
        >
          <div>Coba children</div>
        </Card>
      </div>
      <div>
        {props.data.map((item) => {
          return (
            <div
              key={item.id}
              className={"text-black bg-gray-100 rounded-xl mb-4 p-4"}
            >
              <p>ID: {item.id}</p>
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let query = ctx.query;
  const params = {
    page: 1,
    limit: 10,
  };
  if (
    typeof query?.page !== "undefined" &&
    query?.page !== "" &&
    query?.page !== null
  ) {
    Reflect.set(params, "page", query?.page);
  }

  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log("res", res);
      return res.data;
    })
    .catch((err) => {
      // console.log("err", err);
      return [];
    });
  return {
    props: { data: response },
  };
}
