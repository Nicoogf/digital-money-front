import Aplication from "./component/Aplication/Aplication";
import { Background } from "./component/Background/Background";

export default function Home() {
  return (
    <main className="h-screen flex items-center">
  
      <Background />
      <Aplication />
      
    </main>
  );
}
