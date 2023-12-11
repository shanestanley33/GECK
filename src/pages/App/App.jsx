import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MainPlantPage from '../MainPlantPage/MainPlantPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import UpdatePlantPage from '../UpdatePlantPage/UpdatePlantPage';
import DeletePlantPage from '../DeletePlantPage/DeletePlantPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import NavBar from '../../components/NavBar/NavBar';
import PlantDetail from '../../components/PlantDetail/PlantDetail'

export default function App() {
  const [plant, setPlant] = useState(null)

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/plants" element={<MainPlantPage setPlant={setPlant}/>} />
              <Route path="/plants/add" element={<AddPlantPage />} />
              <Route path="/plants/update" element={<UpdatePlantPage />} />
              <Route path="/plants/delete" element={<DeletePlantPage />} />
              <Route path="/plants/comments" element={<CommentsPage />} />
              <Route path="/plants/:id" element={<PlantDetail plant={plant} />}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
          
      }
    </main>
  );
}