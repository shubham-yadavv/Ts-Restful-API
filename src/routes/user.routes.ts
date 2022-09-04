import { Express, Response, Request } from "express";
import { validateRequest } from "../middleware"
import { createUserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controller/user.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

}



