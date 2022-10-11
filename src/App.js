import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LogBookPage from "./pages/laboratory/logbook_page";
import SafetyProjectPage from "./pages/safety_and_security/safety_and_security_page";
import Navbar from "./components/navbar";
import IgemFooter from "./sections/footer_section";
import LaboratoryPage from "./pages/laboratory/laboratory_page";
import TeamPage from "./pages/team/team_page";
import SocialImpactPage from "./pages/social_impact/social_impact_page";
import NotebookPage from "./pages/notebook/notebook_page";
import HomePage from "./pages/home/home_page";
import DemoPage from "./pages/demo_page";
import MapPage from "./pages/map/map_page";
import AttributionsPage from "./pages/attributions/attributions_page";

//  <Route path="/laboratory/safety" element={<SafetyProjectPage/>}/>
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<HomePage />} />

        <Route path="/teccem/attributions" element={<AttributionsPage />} />
        <Route path="/teccem/safety" element={<SafetyProjectPage />} />

        <Route path="/teccem/collaborations" element={<MapPage />} />
        <Route path="/teccem" element={<HomePage />} />
        <Route path="about" element={<LogBookPage />} />
        <Route path="/laboratory" element={<LaboratoryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/social-impact" element={<SocialImpactPage />} />
        <Route path="/laboratory/notebook" element={<NotebookPage />} />

        <Route path="/communication" element={<SocialImpactPage />} />
        <Route path="/human-practices" element={<SocialImpactPage />} />
        <Route path="/education" element={<SocialImpactPage />} />
        <Route path="/sustainable" element={<SocialImpactPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
      <IgemFooter />
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
