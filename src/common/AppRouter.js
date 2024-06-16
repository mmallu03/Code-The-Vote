import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "../pages/LandingPage";
// import NoPageFound from "../pages/NoPageFound";
import UserStories from "../Components/userStories";
import Quiz from "../Components/Quiz";
import Leaderboard from "../Components/Leaderboard";
import RideForm from "../Components/RideForm";
import Profile from "../Components/Profile";
// import SignUp from '../pages/SignUpPage';
import ProfileForm from "../Components/ProfileForm";
import DriverProfile from "../Components/DriverProfile";
import RiderProfile from "../Components/RiderProfile";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="create-ride" element={<RideForm />} />
        <Route path="user-stories" element={<UserStories />} />
        <Route path="*" element={<Profile />} />
        <Route path="signup" element={<ProfileForm />} />
        <Route path="driverprofile" element={<DriverProfile />} />
        <Route path="riderprofile" element={<RiderProfile />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
