import nc from "next-connect";
import ErrorHandler from "@app/src/handlers/error.handler";
import axios from "axios";

const handler = nc(ErrorHandler);

handler
  .get(async (req, res) => {
    try {
      const response = await axios
        .get("https://dummyjson.com/products")
        .then((result) => {
          console.log(result);
          if (
            Array.isArray(result?.data?.products) &&
            result?.data?.products.length > 0
          ) {
            return {
              pagination: {
                limit: result?.data?.limit ?? 10,
                skip: result?.data?.skip ?? 0,
                total: result?.data?.total ?? 0,
              },
              data: result?.data?.products ?? [],
            };
          }
          return [];
        })
        .catch((err) => {
          return [];
        });
      return res.json({
        message: "OK",
        data: response,
      });
    } catch (err) {
      res.statusCode(500);
      return res.json({
        error: true,
        statusCode: 500,
        message: err?.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      return res.json({
        ...req.body,
      });
    } catch (err) {
      res.statusCode(500);
      return res.json({
        error: true,
        statusCode: 500,
        message: err?.message,
      });
    }
  });

export default handler;
