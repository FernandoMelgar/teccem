import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LogBookPage from "./pages/laboratory/logbook_page";
import SafetyProjectPage from "./pages/safety_and_security/safety_and_security_page";
import LaboratoryPage from "./pages/laboratory/laboratory_page";
import TeamPage from "./pages/team/team_page";
import SocialImpactPage from "./pages/social_impact/social_impact_page";
import NotebookPage from "./pages/notebook/notebook_page";
import HomePage from "./pages/home/home_page";
import DemoPage from "./pages/demo_page";
import AttributionsPage from "./pages/attributions/attributions_page";
import HumanPracticesPage from "./pages/social_impact/human_practices_page";
import CollaborationsPage from "./pages/collaborations/collaborations_page";
import NotFoundPage from "./components/not_found";
import ProjectDescriptionPage from "./pages/project_description/project_description_page";
import Navbar from "./components/navbar";
import IgemFooter from "./sections/footer_section";
import EngineeringPage from "./pages/engineering/engineering_page";

//  <Route path="/laboratory/safety" element={<SafetyProjectPage/>}/>
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<HomePage />} />
        <Route path="/teccem" element={<HomePage />} />
        <Route path="/teccem/attributions" element={<AttributionsPage />} />
        <Route path="/teccem/safety" element={<SafetyProjectPage />} />
        <Route path="/teccem/human-practices" element={<HumanPracticesPage />} />
        <Route path="/teccem/collaborations" element={<CollaborationsPage />} />
        <Route path="/teccem/description" element={<ProjectDescriptionPage />} />
        <Route path="/teccem/engineering" element={<EngineeringPage />} />
        
        <Route path="about" element={<LogBookPage />} />
        <Route path="/laboratory" element={<LaboratoryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/social-impact" element={<SocialImpactPage />} />
        <Route path="/laboratory/notebook" element={<NotebookPage />} />
        <Route path="/communication" element={<SocialImpactPage />} />
        <Route path="/education" element={<SocialImpactPage />} />
        <Route path="/sustainable" element={<SocialImpactPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <IgemFooter />
    </div>
  );
}