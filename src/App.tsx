import AppRouter from "./routes/AppRouter";
import NavigationHandler from "./routes/NavigationHandler";

function App() {
  return (
    <>
      <NavigationHandler />
      <AppRouter />
    </>
  );
}

export default App;