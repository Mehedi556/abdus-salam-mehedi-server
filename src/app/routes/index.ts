import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ExperienceRoutes } from "../modules/Experience/experience.route";
import { SkillsRoutes } from "../modules/Skills/skills.route";
import { BlogRoutes } from "../modules/blogs/blog.route";
import { ProjectRoutes } from "../modules/Projects/project.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/experiences',
        route: ExperienceRoutes
    },
    {
        path: '/skills',
        route: SkillsRoutes
    },
    {
        path: '/blogs',
        route: BlogRoutes
    },
    {
        path: '/projects',
        route: ProjectRoutes
    },

]

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;