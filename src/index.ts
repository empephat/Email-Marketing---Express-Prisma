import express from 'express';
import passport from 'passport';
import session from 'express-session'
import dotenv from 'dotenv';
import './strategies/google-strategy'


dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json())

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) throw new Error("SESSION_SECRET must be set");

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1.5 hour
    },
  })
);

app.use(passport.initialize())
app.use(passport.session())


//Routes
// app.use("/api", loginRoute)
// app.use("/api", logoutRoute)
// app.use("/api", authRoutes);
// app.search("/api", campaignManagement)


// Google OAuth-routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});