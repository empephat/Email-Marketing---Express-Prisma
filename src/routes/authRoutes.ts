import { NextFunction, Request, Response, Router } from "express";
import passport from "passport";
const router = Router();

// Google OAuth-routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

export default router;
