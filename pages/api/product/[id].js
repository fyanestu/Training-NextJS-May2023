import nc from "next-connect";
import ErrorHandler from "@app/src/handlers/error.handler";
import axios from "axios";
import { ProductValidator } from "@app/src/validator/product.validator";
import ProductController from "@app/src/controllers/product.controller";

const handler = nc(ErrorHandler);
/**
 * DEFAULT dari next js
 * @param req
 * @param res
 */
handler.get(async (req, res) => {
  try {
    const response = await axios
      .get("https://dummyjson.com/products")
      .then((result) => {
        return {
          pagination: {
            limit: result?.data?.limit ?? 10,
            skip: result?.data?.skip ?? 0,
            total: result?.data?.total ?? 0,
          },
          data: result?.data?.products ?? [],
        };
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

    return res.json(response);
  } catch (err) {
    res.status(500);
    return res.json({
      error: true,
      status: 500,
      message: err?.message,
    });
  }
});

export default handler;
