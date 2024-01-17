import ChipInput from "./component/ChipInput.js";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Pick Users</h1>
        <ChipInput />
      </div>
    </div>
  );
}

export default App;
