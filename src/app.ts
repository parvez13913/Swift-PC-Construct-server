import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
// import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/");

// global Error Handler
// app.use(globalErrorHandler);

// Handle NotFound Route
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(httpStatus.NOT_FOUND).json({
//     success: false,
//     message: "Not Found",
//     errorMessages: [
//       {
//         path: req.originalUrl,
//         message: "API Not Found",
//       },
//     ],
//   });
//   next();
// });

export default app;
