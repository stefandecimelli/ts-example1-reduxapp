import './App.css';
import Form from './form';
import Name from './name';

export function App() {
  return (
    <main className="App p-2 flex justify-center flex-col bg-background-colour">
      <h1 className={"text-header text-2xl font-bold mb-4"}>
        Example App: Using TypeScript and Redux
      </h1>
      <Form />
      <Name />
    </main>
  );
}
