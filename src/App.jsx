import { useState } from "react";
import "./App.css";

function App() {
  const [palabra, setPalabra] = useState("");
  const [palabraInvertida, setPalabraInvertida] = useState("");

  const invertirPalabra = () => {
    return setPalabraInvertida(palabra.split(' ').map(invertir => invertir.split('').reverse().join('')).join(' '));
  }

  return (
    <div className="w-full h-screen card flex justify-center items-center">
      <div className="shadow-xl p-10 rounded-xl w-[400px]">
        <div class="mb-3">
          <label
            for="palabra"
            class="text-sm text-black font-bold"
          >
            Palabra
          </label>
          <input
            type="text"
            id="palabra"
            onChange={(e) => setPalabra(e.target.value)}
            placeholder="Agregar palabra"
            class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
          />
        </div>
        <p><b>Original:</b> {palabra}</p>
        <p><b>Invertida:</b> {palabraInvertida}</p>
        <button
          onClick={invertirPalabra}
          class="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-blue-500 text-sm text-white"
        >
          Invertir palabra
        </button>
      </div>
    </div>
  );
}

export default App;
