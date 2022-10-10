import Modal from "../../components/modal";
import { PageWithBackgroundVideo } from "../../components/page";
import bg1 from "./bg/safety_bg1.mp4";

export default function SafetyProjectPage() {
  return (
    <div>
      <PageWithBackgroundVideo videoUrl={bg1}>
        <div className="relative h-full w-full flex justify-center items-end text-white">
        <div
            className="absolute rounded-md p-16 m-auto"
            style={{ overflow: "scroll", top:0, left:0, width:'70%', height:'70%', bottom: 0, right:0, backgroundColor: 'rgba(181,94,248,0.40)'}}
          >
            <h1
              className="mb-5 text-6xl font-bold"
              style={{ fontFamily: "Cano", color: "rgb(255, 231, 135)" }}
            >
              Problem
            </h1>
            <p className="p">
              Over time, humanity has widely used antibiotics principally for
              their high effectiveness and low cost. Beyond the treatment of
              infections, antibiotics are great selectable markers for molecular
              biology procedures. They can help identify cells that have been
              efficiently transformed [1]. Genetic transformation consists of
              the insertion of foreign DNA into a host cell, usually in an
              expression cassette. DNA delivery is commonly carried out in 2
              ways: by direct DNA transfer either utilizing viral properties or
              microorganisms such as Agrobacterium tumefaciens. Regardless of
              the method used for the genetic transformation, a selectable
              marker must be used to verify the correct insertion of DNA [1].
            </p>
            <p className="p ">
              There are different types of selectable markers and some of the
              most commonly used are those based on confering microorganisms the
              ability to resist the presence of antibiotics [2]. With this
              mechanism, we can be confident to only obtain growth of the
              microorganism we have conferred resistance to since all others
              will die; however, this has raised multiple concerns due to the
              risk it represents towards the environment and human health.{" "}
              <label
                htmlFor="problem_moreInfo_modal"
                className="underline text-blue-400"
              >
                [more information]
              </label>
            </p>
            <img
              src="https://static.igem.wiki/teams/4260/wiki/fig1-sp.png"
              alt="Fig1-sp"
              className="figure"
            />
            <p className="figure_desc ">
              Figure 1. Antibiogram comparison. It can be observed how the
              inhibition of antibiotics has decreased considerably; halos from
              the left petri dish are much bigger than those of right petri
              dish. [Photograph: Science History Images/Alamy, retrieved from
              “The Guardian”]
            </p>
            <p className="p ">
              Antibiotic resistance or “antimicrobial resistance” is the term
              used to define this problem. Throughout the years, the number of
              microorganisms that have become resistant to commonly used
              antibiotics has increased, growing concern around the world
              because of the morbidity and mortality rates it is associated to
              [5]. In fact, a review commissioned by the United Kingdom
              government argued that by 2050, 10 million people per year will
              die due to antimicrobial resistance [6].
            </p>
            <p className="p ">
              In 2016 Jasovský, Littmann, Zorzet & Cars determined that 214,000
              neonatal deaths from sepsis per year were attributed to
              “drug-resistant pathogens [7], They also mentioned that “In
              summary, drug-resistant pathogens could reverse the recent
              positive trend of falling global mortality rates from infectious
              diseases, which have decreased from 23% to 17% of total deaths
              over the last 15 years” being this alarming but also realistic
              conclusions [7]
            </p>

            <h3 className="h3 pt-8 ">References</h3>
            <p className="reference">
              [1] Das, A., Thakur, S., Shukla, A., Singh, P., Ansari, J., &
              Singh, N. P. (2020). Genetic transformation. En Chickpea: Crop
              Wild Relatives for Enhancing Genetic Gains (pp. 205–224).
              Elsevier. https://doi.org/10.1016/b978-0-12-818299-4.00008-7{" "}
            </p>
            <p className="reference">
              [2] Jones, H. D. (2003). GENETIC MODIFICATION | Transformation,
              General Principles. En Encyclopedia of Applied Plant Sciences (pp.
              377–382). Elsevier. https://doi.org/10.1016/b0-12-227050-9/00197-6
            </p>
            <p className="reference">
              [3] Suárez, C. & Gudiol, F. (2009). Antibióticos betalactámicos.
              Formación médica continua. 10.1016/j.eimc.2008.12.001
            </p>
            <p className="reference">
              [4] Bush, K. & Bradford, P. (2016). β-Lactams and β-Lactamase
              Inhibitors: An Overview. Cold Spring Harbor Perspectives in
              Medicine. 10.1101/cshperspect.a025247
            </p>
            <p className="reference">
              [5] Frieri, M., Kumar, K. & Boutin, A. (2017). Antibiotic
              resistance. Journal of Infection and Human Health. Vol. 10. Issue
              4. https://doi.org/10.1016/j.jiph.2016.08.007
            </p>
            <p className="reference">
              [6] de Kraker, M., Stewardson, A. & Harbarth, S. (2016). Will 10
              Million People Die a Year due to Antimicrobial Resistance by 2050?
              PLoS Med 13(11): e1002184.
              https://doi.org/10.1371/journal.pmed.100218
            </p>
            <p className="reference">
              [7] Jasovský, D., Littman, J., Zorzet, A. & Cars, O. (2016).
              Antimicrobial resistance-a threat to the world’s sustainable
              development. Taylor & Francis.
              https://doi.org/10.1080/03009734.2016.1195900
            </p>
          </div>
        </div>
        <Modal modalId="problem_moreInfo_modal">
          <h3 className="h3">More Information</h3>
          <p className="p">
            A selection marker is a gene inserted into both, cloning and
            expression vectors, that helps host cells produce enzymes that allow
            them to defend themselves from the action mechanism of antibiotics.
            The most commonly used antibiotics (such as penicillin, ampicillin,
            amoxicillin, cephalosporins, and others) are “beta-lactams” [3],
            these inhibit the proper peptidoglycan (a component of bacterial
            cell wall), thus the gene in selection markers that aim to give
            bacteria resistance towards beta-lactams have to coding sequence for
            beta-lactamase enzyme. This can hydrolyze beta-lactams, allowing the
            synthesis of the cell wall and allowing the bacteria to live [4].
          </p>
        </Modal>
      </PageWithBackgroundVideo>
    </div>
  );
}