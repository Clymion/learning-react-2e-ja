import { Route, Routes } from 'react-router';
import AddColorForm from './AddColorForm';
import { ColorDetails } from './ColorDetails';
import ColorList from './ColorList';
import './Colors.css';
import { ColorProvider } from './hooks';
export * from './hooks';

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        ></Route>
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  );
}
