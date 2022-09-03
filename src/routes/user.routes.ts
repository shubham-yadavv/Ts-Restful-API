import { Express, Response, Request } from "express";

function userRoutes(app: Express) {
  app.get("/users", (req: Request, res: Response) => {
    res.send("Hello World!");
  });
}


export default userRoutes;