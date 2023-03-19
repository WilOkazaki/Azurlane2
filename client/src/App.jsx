import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import NotFound from "./Screens/NotFound";
import SingleMovie from "./Screens/SingleMovie";
import MoviesPage from "./Screens/Movies";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dasboard/Profile";
import WatchPage from "./Screens/WatchPage";
import MovieList from "./Screens/Dasboard/Admin/MovieList";
import AddMovie from "./Screens/Dasboard/Admin/AddMovie";


function App() {
 
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/addmovie" element={<AddMovie />} />
    </Routes>
  );
}

export default App
