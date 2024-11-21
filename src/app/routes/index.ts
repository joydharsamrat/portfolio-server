import express from "express";
import { testRoutes } from "../modules/test/test.route";
import { projectRoutes } from "../modules/projects/project.routes";
import { experienceRoutes } from "../modules/experience/experience.routes";
import { blogRoutes } from "../modules/blog/blog.routes";

const router = express.Router();

const moduleRoutes = [
  { path: "/test", route: testRoutes },
  { path: "/projects", route: projectRoutes },
  { path: "/experiences", route: experienceRoutes },
  { path: "/blogs", route: blogRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
