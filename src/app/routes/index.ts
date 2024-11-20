import express from "express";
import { testRoutes } from "../modules/test/test.route";
import { projectRoutes } from "../modules/projects/project.routes";

const router = express.Router();

const moduleRoutes = [
  { path: "/test", route: testRoutes },
  { path: "/projects", route: projectRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
