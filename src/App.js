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
import HumanPracticesPage from "./pages/social_impact/human_practices_page";
import CollaborationsPage from "./pages/collaborations/collaborations_page";
import NotFoundPage from "./components/not_found";
import { Footer } from "react-daisyui";

//  <Route path="/laboratory/safety" element={<SafetyProjectPage/>}/>
export default function App() {
  return (
    <div className="App">
      <Routes basename={process.env.PUBLIC_URL}>
        <Route
          path="/"
          element={
            <div>
              <Navbar /> <HomePage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem"
          element={
            <div>
              <Navbar />
              <HomePage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/attributions"
          element={
            <div>
              <Navbar />
              <AttributionsPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/safety"
          element={
            <div>
              <Navbar />
              <SafetyProjectPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/human-practices"
          element={
            <div>
              <Navbar />
              <HumanPracticesPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/collaborations"
          element={
            <div>
              <Navbar />
              <CollaborationsPage />
              <IgemFooter />
            </div>
          }
        />

        <Route
          path="about"
          element={
            <div>
              <Navbar />
              <LogBookPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/laboratory"
          element={
            <div>
              <Navbar />
              <LaboratoryPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/team"
          element={
            <div>
              <Navbar />
              <TeamPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/social-impact"
          element={
            <div>
              <Navbar />
              <SocialImpactPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/laboratory/notebook"
          element={
            <div>
              <Navbar />
              <NotebookPage />
              <IgemFooter />
            </div>
          }
        />

        <Route
          path="/communication"
          element={
            <div>
              <Navbar />
              <SocialImpactPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/human-practices"
          element={
            <div>
              <Navbar />
              <SocialImpactPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/education"
          element={
            <div>
              <Navbar />
              <SocialImpactPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/sustainable"
          element={
            <div>
              <Navbar />
              <SocialImpactPage />
              <IgemFooter />
            </div>
          }
        />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
