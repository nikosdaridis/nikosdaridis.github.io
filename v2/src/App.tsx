import { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Colorpal = lazy(() => import("./pages/Colorpal"));
const ColorpalOnboarding = lazy(() => import("./pages/ColorpalOnboarding"));

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("nd-theme") ?? "light",
  );

  function handleTheme(theme: string): void {
    setTheme(theme);
    localStorage.setItem("nd-theme", theme);
    document.getElementsByTagName("html")[0]?.setAttribute("theme", theme);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage theme={theme} setTheme={handleTheme} />}
        />
        <Route path="colorpal">
          <Route
            index
            element={<Colorpal theme={theme} setTheme={handleTheme} />}
          />
          <Route path="onboarding" element={<ColorpalOnboarding />} />
          <Route
            path="*"
            element={<Colorpal theme={theme} setTheme={handleTheme} />}
          />
        </Route>
        <Route
          path="*"
          element={<Homepage theme={theme} setTheme={handleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
