export default function ProofOfConceptPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://static.igem.wiki/teams/4260/wiki/imagen/team/partnership/proof-of-concept.png)",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="w-full h-full py-20">
        <h1 className="text-6xl text-white text-center">PROOF OF CONCEPT</h1>
        <div
          className="max-w-4xl m-auto p-8 mt-8 rounded-md text-white"
          style={{ backgroundColor: "rgba(199, 48, 169,.80git )" }}
        >
          <h3 className="h3">overview</h3>
          <p className="p">
            This year’s project goal was to develop both a biosensor and a
            degradation system for Endocrine Disruptors present in waterways
            used for agriculture; these two systems, when coupled, would be able
            to prove effective at detecting and neutralizing EDCs present in
            irrigation waters. Therefore, preventing the spread of these
            contaminants to crops, and hence, halting the consumption of this
            nocive compound by humans. Due to the complex nature of implementing
            both systems, we ran different experiments to prove their
            effectiveness and applicability in a real-world scenario.
          </p>
          <h3 className="h3">Exposure of crops to EDCs</h3>
          <p className="p">
            To determine the extent of the effects that EDCs have on plants when
            exposed chronically to these compounds, an experiment was conducted
            where Italian Lettuces received different doses of Carbamazepine so
            that possible morphological and physiological changes could be
            observed in the plants. Once the exposure periods ended, a clear
            morphological difference between the contaminated plants and the
            ones free of CBZ could be observed (Fig 1.)
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/proof-degra-lechuga23.jpg"
            alt="Degra lechuga 23"
            className="figure"
          />
          <p className="figure_desc">
            Fig 1a. CBZ (45 mg/mL) exposed plants after 22 days.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/proof-degra-lechuga27.jpg"
            alt="Degra lechuga 27"
            className="figure"
          />
          <p className="figure_desc">
            Fig 1b. Plants not exposed to CBZ after 22 days.
          </p>
          <p className="p">
            Furthermore, when conducting a significance and statistical analysis
            to the measurements taken from the plants (weight, leaf size, root
            size), it was found that the size of the leaves coming from plants
            exposed to Carbamazepine were significantly smaller than the leaves
            from unexposed ones (Figure 2).
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/proof-significancia.jpg"
            alt="significancia"
            className="figure"
          />
          <p className="figure_desc">
            Fig 2. Significance analysis of size of plants.
          </p>
          <p className="p">
            Thus, confirming that CBZ had a negative impact on the growth and
            development of this specific crop.{" "}
          </p>
          <h3 className="h3">Biosensor</h3>
          <p className="p">
            Regarding the biosensor, it is important to mention two highlights
            in our wet lab that lead us to take important decisions:
          </p>
          <h3 className="h3">How to use chitosan for immobilization?</h3>
          <p className="p">
            Chitosan beads had many advantages but after the experiment reported
            in Measurement, it was stated the need for hERa to be superficially
            linked to the chitosan to let its ligand-binding domain roam free
            for EDCs to be caught and sensed. Additionally the use of gold
            nanoparticles enforces the signals sent to biosensor hardware and
            software.
          </p>
          <h3 className="h3">
            s ESR1 being expressed with the improvements made to the part?
          </h3>
          <p className="p">
            Expression tests in E.coli BL21 transformed cells showed in SDS-PAGE
            the possible existence of hERa protein in the third lane, this
            concentration belonged to the periplasmic space where it was
            expected to be thanks to the signal peptide ompA. See Bjosensor
            Results.{" "}
          </p>
          <h3 className="h3">Degradation System</h3>
          <p className="p">
            Regarding the degradation system that was implemented, we utilized a
            laccase to carry out the degradation assays of EDCs (namely CBZ and
            BPA). And, besides corroborating in the available literature the
            effectiveness of this reaction, the behavior of the laccase was
            analyzed in a Zetasizer at different conditions to confirm its
            functionality in open-air waterways.
          </p>
          <p className="p">
            By testing different pH conditions (Figure 4), it was determined
            that the protein (peak Y) was the most folded and, therefore more
            stable, at a pH 6; while the aggregates (peak X) were also the
            smallest at this pH.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/proof-lacasa-zetasizer.jpg"
            alt="zetasizer"
            className="figure"
          />
          <p className="p">
            Hence concluding that the ideal conditions for a laccase to be
            deployed and put in action would be in a slightly acidic to neutral
            environment, just as irrigation waters usually are.
          </p>
          <h3 className="h3">Future steps</h3>
          <p className="p">
            Even though the research and development that has been carried out
            shows the viability and the real life application of our project,
            the team strives to carry out more experiments in order to expand
            the knowledge regarding the phenomena explored in this research.
            Henceforth, some future actions will be:
          </p>
          <ul class="list-disc pl-8">
            <li>
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li>
              Quantify the enzymatic activity of the laccase in specific
              substrates (EDCs).
            </li>
            <li>
              Run experiments in situ to understand the interactions between the
              biosensor and the degradation system.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
