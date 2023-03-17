import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import SingleMovie from "./Screens/SingleMovie";
import MoviesPage from "./Screens/Movies";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dasboard/Profile";
import WatchPage from "./Screens/WatchPage";

function App() {
 
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App
