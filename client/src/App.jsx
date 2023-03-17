import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import SingleMovie from "./Screens/SingleMovie";
import MoviesPage from "./Screens/Movies";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

function App() {
 
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App
