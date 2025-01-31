import { Toaster } from 'react-hot-toast';
import Game from './components/game/Game';

export default function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <Game />
      <Toaster />
    </div>
  );
}
