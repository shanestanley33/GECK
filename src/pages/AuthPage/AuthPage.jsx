import SignUpForm from '../../components/SignUpForm/SignUpForm';
export default function AuthPage({ setUser }) {
  return (
    <main>
      <SignUpForm setUser={setUser} />
      <h1>Auth Page</h1>
    </main>
  );
}