import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";

const Home = lazy(() => import("./pages/Home"));

export default function AppRouter() {
  return (
    <main>
            <Router>
              <Suspense fallback={<LoadingComponent />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Suspense>
            </Router>
    </main>
  );
}
