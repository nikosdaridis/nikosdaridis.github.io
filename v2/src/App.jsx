import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ColorPalOnboarding from "./pages/ColorPalOnboarding";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="colorpal">
          <Route index element={<ColorPalOnboarding />} />
          <Route path="onboarding" element={<ColorPalOnboarding />} />
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
