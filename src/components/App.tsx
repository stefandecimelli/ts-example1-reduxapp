import './App.css';
import Form from './form';
import Name from './name';

export default function App() {
  return (
    <main className="App p-2 flex justify-center flex-col">
      <h1 className={"text-2xl"}>Example App: Using TypeScript and Redux</h1>
      <Form />
      <Name />
    </main>
  );
}
