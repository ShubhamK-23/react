import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  const generateKey = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    generateKey();
  }, [length, charAllowed, numAllowed, generateKey]);

  const copyKey = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-lg mx-auto" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6 border-b">
        <h3 className="text-2xl font-bold whitespace-nowrap leading-none tracking-tight">Generate Password</h3>
        <p className="text-sm text-gray-500 text-muted-foreground">
          Customize your password and check the boxes to inlude numbers and special characters.
        </p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-20" htmlFor="length">
            Length
          </label>
          <input type="range" min="8" max="20" value={length} className="w-full bg-black" onChange={(e) => setLength(e.target.value)} />
          <span className="text-sm font-medium">{length}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <input type="checkbox" id="numbers" checked={numAllowed} onChange={() => setNumAllowed(prev => !prev)} />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" id="special" checked={charAllowed} onChange={() => setCharAllowed(prev => !prev)} />
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="special">Special Characters</label>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
          <input type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="password" readOnly value={password} ref={passwordRef} />
        </div>
        <button className="bg-black text-white hover:bg-gray-900 rounded-md text-sm font-medium px-4 py-2" onClick={copyKey}>
            Copy
        </button>

      </div>
    </div>
    </div>
  );
}

export default App;
