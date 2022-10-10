import Modal from "../../components/modal";


const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ante nec sapien consectetur\n" +
  "                        vehicula. Maecenas elementum justo et ex aliquet consectetur. Aenean diam ipsum, dictum a odio\n" +
  "                        sed, accumsan varius lorem. Maecenas massa quam, volutpat nec lectus at, sagittis euismod erat.\n" +
  "                        Ut libero elit, interdum vitae metus vel, tempus laoreet nunc. Nunc convallis elit ut arcu\n" +
  "                        condimentum, a tempor arcu ornare. Vestibulum ante ipsum primis in faucibus orci luctus et\n" +
  "                        ultrices posuere cubilia curae; Donec tempor tempus nisl, at luctus nisl tincidunt id.\n" +
  "\n" +
  "                        Fusce sodales tellus ac semper iaculis. Aliquam fringilla, diam ut porttitor commodo, orci ipsum\n" +
  "                        condimentum arcu, eu laoreet lacus purus nec leo. In pharetra neque non dolor consectetur, id\n" +
  "                        pretium mauris suscipit. Maecenas volutpat urna ex, eget vestibulum erat ullamcorper nec. Nunc\n" +
  "                        molestie lorem non arcu feugiat, in scelerisque tortor dignissim. Vestibulum vestibulum, orci id\n" +
  "                        fermentum faucibus, diam ligula semper orci, id rutrum ligula libero eu elit. Nulla ac interdum\n" +
  "                        felis. Nullam convallis dictum rutrum. Nunc feugiat, libero ultricies rutrum porttitor, justo\n" +
  "                        turpis molestie mauris, quis congue magna augue et mi.";

export default function SocialImpactPage() {
  return (
    <div
      className="hero pt-16"
      style={{ backgroundImage: `url(https://static.igem.wiki/teams/4260/wiki/social-impact/social-impact-bg.png)`, minHeight: 200 }}
    >
      <div className="p-10 text-center">
        <h1
          className="text-7xl"
          style={{ fontFamily: "Cano", color: "rgb(248,255,152)" }}
        >
          Social Impact
        </h1>
        <div
          className="inline-block w-2/3 mt-6 text-white rounded-md"
          style={{
            backgroundColor: "rgba(255, 255,255,.1)",
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <p className="p-2" style={{ textAlign: "justify" }}>
            {lorem}
          </p>
        </div>
        <div className=" m-8">
          <img
            className="m-auto"
            src="https://static.igem.wiki/teams/4260/wiki/social-impact-venn-800.png"
            alt="Social Impact Venn diagram"
            usemap="#image-map"
            style={{ width: 800, minWidth: 800, maxWidth: 800 }}
          />
          <map name="image-map">
            <area
              target=""
              alt="Human Practices"
              title="Human Practices"
              onClick={() => {
                document.getElementById("social_impact_modal").click();
              }}
              coords="339,2,462,2,564,61,629,170,508,169,400,231,290,167,170,168,229,62"
              shape="poly"
            />
            <area
              target=""
              alt="Sustainability"
              title="Sustainability"
              href=""
              coords="630,170,737,229,796,334,798,457,737,563,630,619,628,499,567,397,630,292"
              shape="poly"
            />
            <area
              target=""
              alt="Collaborations"
              title="Collaborations"
              href=""
              coords="398,558,624,624,567,728,461,785,339,786,229,724,171,621,292,623"
              shape="poly"
            />
            <area
              target=""
              alt="Education and communication"
              title="Education and communication"
              href=""
              coords="168,168,169,294,231,393,171,499,169,619,59,559,0,456,-1,332,65,227"
              shape="poly"
            />
          </map>
        </div>

        <section className="pt-16">
          <h1 className="text-4xl" style={{ color: "rgb(248,255,152)" }}>
            Human Practices
          </h1>
          <div
            className="inline-block w-1/2 mt-6 text-white rounded-md"
            style={{
              backgroundColor: "rgba(255, 255,255,.1)",
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <p className="p-2" style={{ textAlign: "justify" }}>
              {lorem}
            </p>
          </div>
        </section>
        <section className="pt-16">
          <h1 className="text-4xl" style={{ color: "rgb(248,255,152)" }}>
            Sustainability
          </h1>
          <div
            className="inline-block w-1/2 mt-6 text-white rounded-md"
            style={{
              backgroundColor: "rgba(255, 255,255,.1)",
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <p className="p-2" style={{ textAlign: "justify" }}>
              {lorem}
            </p>
          </div>
        </section>
        <section className="pt-16">
          <h1 className="text-4xl" style={{ color: "rgb(248,255,152)" }}>
            Education & Communication
          </h1>
          <div
            className="inline-block w-1/2 mt-6 text-white rounded-md"
            style={{
              backgroundColor: "rgba(255, 255,255,.1)",
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <p className="p-2" style={{ textAlign: "justify" }}>
              {lorem}
            </p>
          </div>
        </section>
        <section className="pt-16">
          <h1 className="text-4xl" style={{ color: "rgb(248,255,152)" }}>
            Colaborations
          </h1>
          <div
            className="inline-block w-1/2 mt-6 text-white rounded-md"
            style={{
              backgroundColor: "rgba(255, 255,255,.1)",
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <p className="p-2" style={{ textAlign: "justify" }}>
              {lorem}
            </p>
          </div>
        </section>
        <Modal modalId="social_impact_modal">
          <div className="p-8">
            <h3 className="h3">Solution</h3>
            <p className="p">
              In spite of this, antibiotics are necessary for synthetic biology
              experimental procedures. Therefore, the objective of this year’s
              TecCEM’s safety project was to create an alternative to
              antibiotic-based selection markers, being our main focus its
              functionality with the most commonly used microorganism
              Escherichia coli, and contribute to the reduction of antibiotic
              use in laboratories.
            </p>
            <p className="p">
              Once having understood the action system of selection markers, as
              a first step it was necessary to find a replacement for
              antibiotics as an inhibitory compound. For this purpose, we
              decided to look for compounds in natural substances that were
              known for having antimicrobial activity, such as honey, cinnamon,
              garlic, and others. Secondly, it was crucial to find reported
              genes that could help the microorganism degrade the inhibitory
              compound. And finally, it was important to consider that the final
              product of the conversion of the chosen compound was not capable
              of causing cell death.
            </p>
            <p className="p">
              The starting point was research about essential oils, from which
              we learned that cinnamon and clover essential oils were
              outstanding for their inhibitory action, related to the presence
              of the aromatic compound: eugenol, being present in over 70% in
              cinnamon essential oil [8]. Over all other inhibitory compounds,
              this one caught our attention because it is commercialized as a
              pure component, thus no extraction from cinnamon oil would be
              necessary, representing an advantage. However, when looking up the
              degradation pathway of this compound, as shown in Figure 2, many
              steps were involved in the transformation of eugenol, meaning that
              the bacteria would have to express them all and code for those
              proteins in order to degrade it; and usually ,the expression of
              too many genes is complicated [9]. With this in mind, we decided
              to explore other options and eventually found isoeugenol, the
              isomer of eugenol.
            </p>
            <img
              className="figure"
              src="https://static.igem.wiki/teams/4260/wiki/biotransformation-pathway-eugenol-to-vanillin.png"
              alt="Biotrasnformation pathway eugenol to vanillin"
            />
            <p className="figure_desc">
              Figure 2. Biotransformation pathway of eugenol to vanillin. The
              conversion of isoeugenol to vanillin requires the expression of
              five different genes [Retrieved from Overhage, Steinbüchel &
              Priefert]
            </p>
            <p className="p pt-8">
              Isoeugenol belongs to the group of phenylpropenes and has shown
              comparable and even superior antimicrobial activity to its highly
              antimicrobial original form eugenol [10], probably owed to its
              free hydroxyl group and its position of double bonds in the α, and
              β positions of the side chain, and a methyl group in the γ
              position (Figure 3) [11].
            </p>
            <img
              className="figure"
              src="https://static.igem.wiki/teams/4260/wiki/safety-project/isougenol-structure.png"
              alt="Isougenol Structure"
            />
            <p className="figure_desc">
              Figure 3. 3D Structure of Isoeugenol. Image generated with
              Discovery Studio.
            </p>
            <p className="p">
              Isoeugenol’s antimicrobial activity covers a wide range of
              gram-positive and gram-negative bacteria, including Escherichia
              coli, Bacillus licheniformis, Micrococcus luteus, Pseudomonas
              aeruginosa, Salmonella type B, Staphylococcus aureus [10], as well
              as other microorganisms like Saccharomyces cerevisiae, and
              Aspergillus nigger [12], which means that it could lead to the
              development of a selection marker useful not only for bacteria but
              also fungi and yeasts. Its action mechanism consists of altering
              the integrity of the inner membrane of bacteria, causing spillage
              of fluids and cell death [10].
            </p>
            <p className="p">
              Nevertheless, there are reports of other microorganisms that are
              able to metabolize it, such as Pseudomonas bacteria (known for
              being able to grow under harsh conditions) by the action of the
              enzyme Isoeugenol Monooxygenase (EC 1.13.11.88, Figure 4), which
              allows a one-step conversion of it into vanillin. Isoeugenol
              monooxygenase (IsoMo) from Pseudomonas putida IE27, reported by
              Yamada, Okada, Yoshida & Nagasawa in 2008 besides from this, it
              does not lead to the formation of undesired co-products that could
              have an inhibitory effect on E. coli, such as vanillic acid or
              acetaldehyde [13]. Vanillin, on its own, causes an inhibition on
              E. coli but at much higher concentrations than isoeugenol [14].
            </p>
            <img
              className="figure"
              src="https://static.igem.wiki/teams/4260/wiki/safety-project/molecular-docking-result.png"
              alt="Molecular docking result"
            />
            <p className="figure_desc">
              Figure 6. Result of molecular docking of IsoMo (purple) and
              Isoeugenol (yellow). The hydrogen bond with Met350 is highlighted
              in blue. Own figure.
            </p>
            <h3 className="h3 pt-8">References</h3>
            <p className="reference">
              [8] Schmidt, E., et.al. (2013). Composition and Antioxidant
              Activities of the Essential Oil of Cinnamon (Cinnamomum zeylanicum
              Blume) Leaves from Sri Lanka. Journal of Essential Oil Bearing
              Plants. Vol. 9. Issue 2.
              https://doi.org/10.1080/0972060X.2006.10643490
            </p>
            <p className="reference">
              [9] Overhage, J., Steinbüchel, Al. & Priefert, H. (2003). Highly
              Efficient Biotransformation of Eugenol to Ferulic Acid and Further
              Conversion to Vanillin in Recombinant Strains of Escherichia coli.
              Applied and Environmental Microbiology.
              https://doi.org/10.1128/AEM.69.11.6569-6576.2003
            </p>
            <p className="reference">
              [10] Hyldgaard, M., Mygind, T., Piotrowska, R., Foss, M. & Meyer,
              R. (2015). Isoeugenol has a non-disruptive detergent-like
              mechanism of action. Frontiers in Microbiology, 6.
              DOI:10.3389/fmicb.2015.00754
            </p>
            <p className="reference">
              [11] Zemek, J., Valent, M., Pódová,M., Košíková, B. & Joniak, D.
              (1987). Antimicrobiai properties of aromatic compounds of plant
              origin. Folia Microbiol 32, 421–425 (1987).
              https://doi.org/10.1007/BF02887573
            </p>
            <p className="reference">
              [12] Zemek, J., Košíková, B., Augustín, J., & Joniak, D. (1979).
              Antibiotic properties of lignin components. Folia Microbiologica,
              24(6), 483–486. DOI:10.1007/bf02927180
            </p>
            <p className="reference">
              [13] Yamada, M., Okada, Y., Yoshida, T., & Nagasawa, T. (2008).
              Vanillin production using Escherichia coli cells over-expressing
              isoeugenol monooxygenase of Pseudomonas putida. Biotechnology
              letters, 30(4), 665-670.
            </p>
            <p className="reference">
              [14] Fitzgerald, D., Stratford, M., Gasson, M., Ueckert, J., Bos,
              A. & Narbad, A. (2004). Mode of antimicrobial action of vanillin
              against Escherichia coli, Lactobacillus plantarum and Listeria
              innocua. Journal of Applied Microbiology. Voll. 97. Issue 1.
              https://doi.org/10.1111/j.1365-2672.2004.02275.x
            </p>

            <p className="reference">
              [15] Ryu, J. Y., Seo, J., Park, S., Ahn, J. H., Chong, Y.,
              Sadowsky, M. J., & Hur, H. G. (2013). Characterization of an
              isoeugenol monooxygenase (Iem) from Pseudomonas nitroreducens Jin1
              that transforms isoeugenol to vanillin. Bioscience, biotechnology,
              and biochemistry, 120715.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
