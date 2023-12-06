import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
export default function AuthPage({ setUser }) {
  const [showSignUpForm, setShowSignUpForm] = useState(true)

  function handleClick() {
    setShowSignUpForm(!showSignUpForm)
  }
  return (
    <main>
      <button onClick={handleClick}> { showSignUpForm ? 'Login' : 'Sign Up' } </button>
      { showSignUpForm ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
    
    </main>
  );
}

