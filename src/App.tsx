import Home from "./pages/Home";
import { FormspreeProvider } from "@formspree/react";

function App() {
  return (
    <FormspreeProvider
      project={
        import.meta.env.VITE_FORMSPREE_PROJECT_ID || "MISSING_PROJECT_ID"
      }
    >
      <div className="bg-[url('assets/background.jpg')] bg-cover bg-[center_top]">
        <div className="bg-gradient-to-t from-cyan-600 via-white/50 to-white/25">
          <Home />
        </div>
      </div>
    </FormspreeProvider>
  );
}

export default App;
