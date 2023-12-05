import SignUpForm from '../../components/SignUpForm/SignUpForm';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/plants" element={<PlantPage />} />
              <Route path="/plants/add" element={<AddPlantPage />} />
              <Route path="/plants/update" element={<UpdatePlantPage />} />
              <Route path="/plants/delete" element={<DeletePlantPage />} />
              <Route path="/plants/comments" element={<CommentsPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser} />
    </main>
  );
}