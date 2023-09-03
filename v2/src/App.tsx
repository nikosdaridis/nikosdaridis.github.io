import { useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const Colorpal = lazy(() => import("./pages/Colorpal"));
const ColorpalOnboarding = lazy(() => import("./pages/ColorpalOnboarding"));

function handleFaviconTitle(favicon: string, title: string): void {
  let head = document.querySelector("head");
  let newFavicon = document.createElement("link");
  let newTitle = document.createElement("title");

  newFavicon.setAttribute("rel", "icon");
  newFavicon.setAttribute("href", favicon);
  newTitle.textContent = title;

  head?.appendChild(newTitle);
  head?.appendChild(newFavicon);
}

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
          element={
            <Homepage
              setFaviconTitle={handleFaviconTitle}
              theme={theme}
              setTheme={handleTheme}
            />
          }
        />
        <Route path="colorpal">
          <Route
            index
            element={
              <Colorpal
                setFaviconTitle={handleFaviconTitle}
                theme={theme}
                setTheme={handleTheme}
              />
            }
          />
          <Route
            path="onboarding"
            element={
              <ColorpalOnboarding setFaviconTitle={handleFaviconTitle} />
            }
          />
          <Route
            path="*"
            element={
              <Colorpal
                setFaviconTitle={handleFaviconTitle}
                theme={theme}
                setTheme={handleTheme}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Homepage
              setFaviconTitle={handleFaviconTitle}
              theme={theme}
              setTheme={handleTheme}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
