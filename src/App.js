import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;
function App() {
  useEffect(() => {
    tg.ready();
    console.warn("READY");
  }, []);
  const onClose = () => {
    tg.close();
    console.warn("CLOSE");
  };
  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}
export default App;
