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
import AttributionsPage from "./pages/attributions/attributions_page";
import HumanPracticesPage from "./pages/social_impact/human_practices_page";
import CollaborationsPage from "./pages/collaborations/collaborations_page";
import NotFoundPage from "./components/not_found";
import ProjectDescriptionPage from "./pages/project_description/project_description_page";
import EngineeringPage from "./pages/engineering/engineering_page";
import EducationPage from "./pages/social_impact/education_page";
import HardwarePage from "./pages/engineering/hardware_biosensor";
import ContributionsPage from "./pages/team/contributions_page";
import Communication from "./pages/communication/communication";
import { Divider } from "react-daisyui";

export default function App() {
  return (
    <div className="App">
      <Routes basename={process.env.PUBLIC_URL}>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <Navbar />
              <HomePage />
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
          path="/teccem/description"
          element={
            <div>
              <Navbar />
              <ProjectDescriptionPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/engineering"
          element={
            <div>
              <Navbar />
              <EngineeringPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/education"
          element={
            <div>
              <Navbar />
              <EducationPage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/hardware"
          element={
            <div>
              <Navbar />
              <HardwarePage />
              <IgemFooter />
            </div>
          }
        />
        <Route
          path="/teccem/contributions"
          element={
            <div>
              <Navbar />
              <ContributionsPage />
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
              <Communication />
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
        <Route
          path="/demo"
          element={
            <div>
              <Navbar />
              <DemoPage />
              <IgemFooter />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
