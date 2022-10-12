import Modal from "../../components/modal";

export default function ProjectDescriptionPage() {
  return (
    <div style={{ backgroundColor: "#622320" }}>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-fondorojo.png)",
          widht: "100vw",
          minHeight: "100vh",
        }}
      >
        <div className="h-full w-full">
          <div className="py-20 flex flex-col items-center justify-between h-full">
            <h1 className="text-6xl text-white">Project Description</h1>
            <div
              className="bg-black"
              style={{ width: "300px", height: "250px" }}
            ></div>
            <div className="flex justify-around w-full px-16">
              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-agricultura.png"
                  alt="Icon Agriculture"
                  style={{ width: 75 }}
                />
              </div>
              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-biosensor.png"
                  alt="Biosensor"
                  style={{ width: 75 }}
                />
              </div>
              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-contaminantes.png"
                  alt="Contaminantes"
                  style={{ width: 75 }}
                />
              </div>

              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-edc.png"
                  alt="Contaminantes"
                  style={{ width: 75 }}
                />
              </div>
              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-degradacion.png"
                  alt="Contaminantes"
                  style={{ maxHeight: 100, objectFit: "cover" }}
                />
              </div>
              <div className="  px-8 py-4 rounded-xl">
                <img
                  src="https://static.igem.wiki/teams/4260/wiki/imagen/home/project-description/projectdescription-visiongeneral.png"
                  alt="Contaminantes"
                  style={{ maxHeight: 100, objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="text-center clickable">
              <label
                htmlFor="project_description_modal"
                className="modal-button text-white m-auto font-bold text-2xl underline"
              >
                Click me!
              </label>
            </div>
          </div>
        </div>
      </div>
      <Modal modalId="project_description_modal">
        <h2 className="font-bold text-2xl">Project description</h2>
        <p className="p">
          Our main focus is Endocrine Disrupting Chemicals (EDCs), a concern
          that will only worsen with the passing of time. This problem was
          approached by the team TecCEM 2021, thus we believe in the necessity
          of obtaining practical solutions. Thus we are working this year around
          improving the past work but also going further by proposing new
          features guiding a practical solution. But what are EDCs and why is it
          problematic?
        </p>
        <h3 className="h3">The danger gent, What is an EDC?</h3>
        <p className="p">
          EDCs (Endocrine Disrupting Chemicals) are molecules present in the
          environment; anywhere from the soil to the air we breathe, even in the
          water we drink and the food we eat. According to the U.S.
          Environmental Protection Agency an EDC is: “an exogenous agent that
          interferes with synthesis, secretion, transport, metabolism, binding
          action, or elimination of natural blood-borne hormones that are
          present in the body and are responsible for homeostasis, reproduction,
          and developmental process.”[1]In short EDCs can interfere with
          endocrine or hormonal systems.
        </p>
        <h3 className="h3">Effects of EDCs on the human body</h3>
        <p className="p">
          Now with the previous definition we can comprehend the negative
          effects on us. Going deeper into their effects, EDCs interfere with
          the body's natural hormone system. They act like a “hormone mimic”,
          leading the body to believe they are hormones, interfering with its
          natural functions. Some can increase or decrease the total amount of
          hormones in our bloodstream, affecting how they are produced,
          synthesized and even stored up in our body. [2] Because of their
          capacity to modify the normal hormonal activity it can lead to
          consequences such as: alterations in sperm quality and fertility,
          abnormalities in sex organs, endometriosis, early puberty, altered
          nervous system function, immune function, certain cancers, respiratory
          problems, metabolic issues, diabetes, obesity, cardiovascular
          problems, growth, neurological and learning disabilities, among
          others. [2]
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/humanbodyorgans.png"
          alt="Human Body Organs"
          className="figure"
        />
        <p className="p">
          EDCs have the potential to impact any system from the human body;
          affecting the endocrine system like the thyroids, the whole
          cardiovascular system, and reproductive organs
        </p>
        <p className="p">
          At a cellular level the effects of EDCs can go into the cell and bind
          the ligand binding complex of hormone receptors. The influence on the
          receptor pathway can cause an increase or decrease of gene
          transcription and have an after effect into the protein level and
          tissue response.[17] EDCs also can impact DNA methylation processes
          including DNA hypomethylation and hypermethylation at CpG islands near
          gene promoting regions. [17] Actually, EDCs can act on non-coding RNA
          and cause changes on its expression. [17]
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/edcs-estrogenhormon.png"
          alt="Estrogenhormon"
          className="figure"
        />
        <h3 className="h3">Sources of EDCs</h3>
        <ul className="list-disc pl-8">
          <li>
            Industrial waste: lead to major contamination into soil and
            groundwater with industrial chemicals. Also, much of this chemical
            waste end up in wastewaters that can end up finding its way to our
            food, like fish, animals or crops that were in contact with
            contaminated water. [3]
          </li>
          <li>
            Common consumer products or packaged containers like: household
            products, fabrics for clothing, fabrics treated with flame
            retardants, cosmetics, lotions, products with fragrances, soaps,
            anti-bacterials, cleaning products, among others. Processed foods
            can also accumulate EDCs from their manufacturing, packing,
            transportation or storage. [2]
          </li>
          <li>
            Discarded drugs into wastewater: Such as metformin, which is used
            for treating type II diabetes, and carbamazepine, a drug commonly
            used to prevent or treat seizures.
          </li>
          <li>
            Natural” EDCs: coming from plants or humans, such as estrogen
            excretion or Soy-based products containing phytoestrogens, which are
            chemicals produced by plants that mimic estrogen. [2]
          </li>
          <li>
            Household construction materials: like furniture, usually in the
            form of dust. [2]
          </li>
          <li>
            Pesticides, fungicides and herbicides: are common sources of EDCs
            that lead to the contamination of crops.
          </li>
        </ul>
        <p className="p">
          {" "}
          This list of common EDCs is provided by the Endocrine Society where we
          can find common household products:{" "}
        </p>
        <table class="table table-compact">
          <thead>
            <tr>
              <th>
                <span>Common EDCs </span>
              </th>
              <th>
                <span>Used in</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Bisphenol A (BPA), Phthalates, Phenol</span>
              </td>
              <td>
                <span>Plastics and Food Storage Materials</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Carbamazepine (CBZ)</span>
              </td>
              <td>
                <span>Anticonvulsant drug</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>DDT, Chlorpyrifos, Atrazine, 2, 4-D, Glyphosate</span>
              </td>
              <td>
                <span>Pesticides</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Lead, Phthalates, Cadmium</span>
              </td>
              <td>
                <span>Children's Products</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Polychlorinated biphenyls (PCBs) and Dioxins</span>
              </td>
              <td>
                <span>
                  Industrial Solvents or Lubricants and their Byproducts
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Brominated Flame Retardants, PCBs</span>
              </td>
              <td>
                <span>Electronics and Building Materials</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Phthalates, Parabens, UV Filters</span>
              </td>
              <td>
                <span>Personal Care Products, Medical Tubing, Sunscreen</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Triclosan</span>
              </td>
              <td>
                <span>Antibacterial Soaps, Colgate Total</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Perfluorochemicals</span>
              </td>
              <td>
                <span>
                  Textiles, Clothing, Non-Stick Food Wrappers, Microwave Popcorn
                  Bags, Old Teflon Cookware
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="p">
          EDC exposure can occur when interacting with the presented products by
          drinking impure water, breathing polluted air, ingesting food, or
          coming in contact with contaminated soil. Farmers are at a greater
          risk of developing a reproductive or endocrine abnormality because of
          their close contact with EDCs from pesticides, fungicides, industrial
          chemicals and wastewater. The use of these products can also lead to
          the contamination of crops consumed by humans and animals, increasing
          the risk of exposure even further. [3]
        </p>
        <p className="p">
          Another problematic factor is related to EDCs half-life, which for
          industrial convenience were designed to be long. After many decades,
          some of the substances that were banned decades ago are still present
          in the environment in high concentrations, mainly because they can’t
          be easily metabolized and even, in some cases, are broken down into
          more toxic compounds than the original molecule. [3]
        </p>
        <h3 className="h3">Water contamination</h3>
        <p className="p">
          It’s also necessary to understand the mechanisms by which water bodies
          get contaminated with EDCs. Data provided by UNESCO states that 59% of
          total water consumed in developed countries is destined for industrial
          use, 30% for agricultural consumption and 11% for domestic activities.
          More than 80% of hazardous waste is produced by industrialized
          countries. Another worrying figure is that 70% of waste generated from
          industries in developing countries is dumped to bodies of water
          without any previous treatment. [12] In Mexico, 76% of the water is
          used for agriculture, 14% is destined for public supply, 5% to
          thermoelectric plants and 5% to industry. [13] 54% of Mexico’s
          wastewater is not treated, and this can become a big public health
          issue since this water is then reutilized for agricultural activities
          and in some cases, for human consumption. [10]
        </p>
        <p className="p">
          As previously established, water can get contaminated by several
          domestic and industrial sources, for example treatment plants,
          effluents from hospitals, chemicals used in agricultural activities
          and livestock, septic tanks and others [10]. These are dumped into
          water bodies without any consequences , because of the lack of
          regulation regarding EDCs in many countries. Therefore, these types of
          pollutants are difficult for wastewater treatment plants to eliminate,
          because they are designed to remove organic matter and nutrients that
          are in higher concentrations than the EDCs.
        </p>
        <h3 className="h3">Case of river contamination with EDCs </h3>
        <p className="p">
          Here we can see a case about a river in Mexico contaminated with EDCs,
          and some of the sources. The study was conducted by Calderón, G.M, et
          al., [14] on a river near Cuautla, the second largest city in the
          state of Morelos, with a territorial extension of 85 km and a
          population of about 304,704 inhabitants. The study had the purpose of
          knowing how EDCs reach the river and the estrogenic activities in it.
          The authors found that the main sources of contamination of the river
          were wastewater coming from both a supermarket and a cinema mall in
          the area, contributing to residual amounts of bisphenol A derived from
          products made of polymeric materials like food packaging and other
          household items. Other EDCs like steroids 17β-estradiol (E2) and
          17α-ethynylestradiol (EE2) were suspected to come from domestic
          discharges released to the environment through human excretion of
          urine and feces, and EDCs related to pesticides where traced back to
          local agricultural zones; the concentrations for all compounds ranged
          from 0.14 to 5.77 ng L-1. For a point of comparison, it has been found
          that endocrine effects on fish can occur in concentrations between
          0.1-10 ng L-1. The study concluded that the values of estrogenic
          activity and environmental risk were high, compared to treated water
          concentrations of estrogenic compounds from water treatment plants in
          the US that are around 0.078 ng E2Eq L− 1, which could lead to serious
          effects on the river’s ecosystem and the environmental diversity. This
          study exemplifies what a high concentration of EDCs can cause on the
          environment and why the growing numbers of cases like this one, not
          only in Mexico, but all around the world should be a great cause of
          concern.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/riocuatlaconta.png"
          alt="Rio cuatlaconta"
          className="figure"
        />
        <p className="figure_desc">
          Image from: Lara, A. L. F. (2019, September 25). Morelos: Contamina
          Yecapixtla el río Cuautla (El Sol de Cuautla) –. Agua.org.mx.
          https://agua.org.mx/morelos-contamina-yecapixtla-el-rio-cuautla-el-sol-de-cuautla/
        </p>
        <h3 className="h3">Detection problems </h3>
        <p className="p">
          Another challenge that this problem faces is related to its detection
          and quantification. Since these chemicals are not easy to find, it is
          imperative to find solutions. Identifying these compounds requires
          highly sensitive analytical techniques, usually to detect
          concentrations on a scale of nanograms per liter. The most used
          techniques nowadays are gas and liquid chromatography coupled with
          mass spectrometry. Additionally it requires an efficient sample
          treatment procedure to avoid any interferences. All of these
          techniques are very expensive and require large investments and
          specialized personnel. In developing countries like Mexico this
          problem is more evident, as for governments it is economically
          difficult to have access to this type of technology. [10]
        </p>
        <h3 className="h3">Effects of EDCs on crops </h3>
        <p className="p">
          After observing how and what can cause EDCs in water, we went further
          in our analysis trying to find the bridge between humans and EDCs,
          where we find crops from agricultural activities as a possible
          spreading point.
        </p>
        <p className="p">
          In recent years it has been of great interest information related to a
          plants ability to uptake and translocate EDCs, as well as the
          consequences on the plant and its possible mechanisms to degrade these
          compounds. [18]The contact between plants and EDCs can come from
          irrigation water, the plant's uptake of these EDCs can cause their
          transformation into other harmful chemicals, which is why is so
          important the plant's capacity to treat these compounds for it to
          reduce the exposure to humans and other living beings that consume
          it.[4]
        </p>
        <p className="p">
          Irrigation with untreated water is a common practice in agriculture,
          but also allows a great pathway for crop contamination. For instance
          in the soils of Tula Valley in Mexico, one of the largest irrigation
          districts in the world that uses untreated wastewater, where there is
          presence of plenty of EDCs such as 4-nonylphenol, triclosan, and
          bisphenol A, as well as Carbamazepine; the last one with sufficient
          capacity for being persistent on soil and with mobility, giving out
          potential contamination of groundwater. [5]
        </p>
        <p className="p">
          Evaluating individually some of the effects of EDCs on crops are:
        </p>

        <div className="overflow-x-auto w-full">
          <table className="table " style={{ width: "200px" }}>
            <thead>
              <tr>
                <th>
                  <span>EDC</span>
                </th>
                <th>
                  <span>Crop</span>
                </th>
                <th>
                  <span>Effects</span>
                </th>
                <th>
                  <span>References</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Carbamazepine</span>
                </td>
                <td>
                  <span>Lettuce </span>
                </td>
                <td>
                  <span>
                    There was a decrease in the total biomass of the plant{" "}
                  </span>
                  <span>Decrease in the length of the roots </span>
                  <span>
                    Red coloration in the leaves, product of anthocyanins
                    produced by stress.{" "}
                  </span>
                </td>
                <td>
                  <span>
                    Barata, S. (2021). Evaluation of the accumulation and
                    toxicity of pharmaceuticals in lettuce plants.
                    https://www.repository.utl.pt/bitstream/10400.5/22877/1/TESE_Doutoramento_Ines%20Leitao_2021_VDefinitiva.pdf
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Bisphenol A</span>
                </td>
                <td>
                  <span>Tomatoes,</span>
                  <span>wheat,</span>
                  <span>lettuce</span>
                </td>
                <td>
                  <span>It inhibits cell elongation and division. </span>
                  <span>
                    Other morphological abnormalities such as reduction in the
                    length of stem and roots and darkening of roots and leafs.{" "}
                  </span>
                </td>
                <td>
                  <span>
                    Ferrara, G., Loffredo, E., &amp; Senesi, N. (2006).
                    Phytotoxic, clastogenic and bioaccumulation effects of the
                    environmental endocrine disruptor bisphenol A in various
                    crops grown hydroponically. Planta, 223(5), 910–916.
                    https://doi.org/10.1007/s00425-005-0147-2
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Bisphenol A</span>
                </td>
                <td>
                  <span>Mung bean</span>
                </td>
                <td>
                  <span>Over prolonged exposure:</span>
                  <span>Stem growth was reduced </span>
                  <span>Stem length and surface area were reduced </span>
                  <span>Inhibition of root development </span>
                  <span>Average size of stomata decreased </span>
                  <span>
                    Morphological abnormalities as leaf spots, necrosis and
                    destruction of cells and vascular tissues are observed in
                    the leaves.{" "}
                  </span>
                </td>
                <td>
                  <span>
                    Kim, D., Kwak, J. I., &amp; An, Y.-J. (2018). Effects of
                    bisphenol A in soil on growth, photosynthesis activity, and
                    genistein levels in crop plants (Vigna radiata).{" "}
                  </span>
                  Chemosphere
                  <span>, </span>
                  209
                  <span>
                    , 875–882. https://doi.org/10.1016/j.chemosphere.2018.06.146
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Triclosan </span>
                </td>
                <td>
                  <span>Radish,</span>
                  <span>Lettuce </span>
                </td>
                <td>
                  <span>
                    Accumulation was observed, specially on the roots, where in
                    the case of radish is the edible part of the plant.{" "}
                  </span>
                </td>
                <td>
                  <span>
                    Cristóbal, A., Mendoza, J., Dra, C., &amp; Tatiana, G. R.
                    (n.d.).{" "}
                  </span>
                  Determinación de triclosán en tejido vegetal y evaluación de
                  su fracción bioaccesible. Memoria para optar al título de
                  Químico Farmacéutico
                  <span>
                    . Uchile.Cl. Retrieved October 6, 2022, from
                    https://repositorio.uchile.cl/bitstream/handle/2250/141697/Determinacion-de-triclosan-en-tejido-vegetal-y-evaluacion-de-su-fraccion-bioaccesible.pdf?sequence=1&amp;isAllowed=y
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="p">
          Many other effects of EDCs can be observed on different types of
          crops, but more research is needed to know correctly the relevance and
          consequences of consuming them.
        </p>
        <h3 className="h3">Economical implications</h3>
        <p className="p">
          As most of the effects of EDCs in plants are morphological, the value
          of the crop is reduced, so a smaller and damaged product will be less
          competitive in the market, and especially if the international
          community criticizes the way it was farmed, just like it happens with
          Mexican maize. Thanks to a long term debate between using or not
          genetically modified seeds of maize to combat a plague, mexican
          farmers have to rely on using pesticides and face, in the
          international market, that their products have less value because of
          the damages with which they were offered. This has generated a vast
          economical problem where Mexico has to import most of the maize it
          consumes. [11] But also, impacts farmer families who depend
          exclusively on agricultural activities, in other words, the economic
          problem affects around 5.5 millions of farmers and 40% of national
          maize consumption. [19]
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/maizrojo.png"
          alt="Maiz Rojo"
          className="figure"
        />
        <h3 className="h3">Our work</h3>
        <p className="p">
          Our previous team (iGEM TecCEM 2021) had a project related with the
          identification and quantification of EDCs in water, and since this is
          a growing problem which does not have the needed attention, we decided
          to continue on it.
        </p>
        <p className="p">
          As mentioned before, detection and quantification of EDCs is a
          necessary but complicated task, since it needs expensive and
          sophisticated equipment as well capacitated personnel to get it done.
          Mexico doesn't have the facilities for this type of equipment so a
          more efficient device to detect EDCs is required. iGEM TecCEM 2021
          worked exactly on that, a biosensor that is easier to use, smaller,
          faster and cheaper. Although it was a great prototype of biotechnology
          and engineering work, further improvements were necessary to achieve
          the desired goal. So based upon the work of our previous team we
          decided to adopt the same problem and improve the biosensor that has
          already been built, in order to tackle the problems of the use of EDCs
          on irrigation water and the non-accessible quantification methods for
          analyzing water samples, including the purpose of aiding the creation
          of regulations to control the production of these chemicals. The
          proposed biosensor works using Human Estrogen Receptor Alpha as a
          biological recognition component immobilized on gold nanoparticles
          that are used as amplifiers, and an aptasensor based on a Quartz
          Crystal Microbalance, to make working with small masses of EDCs
          easier. Furthermore, a software was developed to give this information
          back to the end user in an objective and simple way.
        </p>
        <p className="p">
          This is a great step to the solution of the problem, but we wanted to
          go further and directly combat EDCs present in the environment. As we
          identified there can be great health and economic approaches that EDCs
          can cause in agriculture from the farmers to consumers, so we decided
          to create a synthetic biology tool that ensures the degradation of
          EDCs. This with the objective to benefit farmers economically but also
          to increase the crops quality, providing healthier food to the
          population. We propose an enzymatic degradation system using laccases
          from Trametes versicolor immobilized in a zeolitic imidazole framework
          by adsorption. Noteworthy that this system is low cost, easy to use,
          fast, and biosecure; mainly because our end users would be farmers.
        </p>
        <p className="p">
          Finally, as lab workers we have one more concern, “Antibiotic
          resistance” or “antimicrobial resistance”. There has been an increase
          in the number of microorganisms resistant to commonly used
          antibiotics, increasing the concern around the world of the morbidity
          and mortality rates associated with this problem [15]. With this in
          mind, our safety project focuses on the creation of an alternative to
          antibiotic-based selection markers, mainly focusing on Escherichia
          coli. The proposal is around Isoeugenol, because of its high
          antimicrobial activity, and its capability to cover a wide range of
          gram-positive and gram-negative bacteria as well as other
          microorganisms [16]. The mechanism by which Isoeugenol works is
          altering the integrity of the inner membrane of bacteria, spilling the
          inner fluids and causing cell death. [20] As for microorganisms
          capable of metabolizing it (such as Pseudomonas), it was chosen to
          work with Isoeugenol Monooxygenase (IsoMo) because it leads to the
          direct conversion of Isoeugenol to vanillin [20]. Isoeugenol and IsoMo
          are used as a selection system. Isoeugenol is also a viable option
          because of being a more economical option than other widly used
          ambiotics like Ampicillin; the amounts of isoeugenol needed are less
          and because it is more resistant to higher temperatures.
        </p>
        <h3 className="h3">References</h3>
        <p className="reference">
          [1] Sayles, G. D. (2002). Environmental engineering and endocrine
          disrupting chemicals. Journal of Environmental Engineering (New York,
          N.Y.), 128(1), 1–2.
          https://doi.org/10.1061/(asce)0733-9372(2002)128:1(1)
        </p>
        <p className="reference">
          [2] Endocrine-disrupting chemicals (EDCs). (2022, January 24).
          Endocrine.org; Endocrine Society.
          https://www.endocrine.org/patient-engagement/endocrine-library/edcs
        </p>
        <p className="reference">
          [3] Diamanti-Kandarakis, E., Bourguignon, J.-P., Giudice, L. C.,
          Hauser, R., Prins, G. S., Soto, A. M., Zoeller, R. T., & Gore, A. C.
          (2009). Endocrine-disrupting chemicals: an Endocrine Society
          scientific statement. Endocrine Reviews, 30(4), 293–342.
          https://doi.org/10.1210/er.2009-0002
        </p>
        <p className="reference">
          [4] Pridemore, C. M. (2021). The effects of endocrine disrupting
          chemicals on plants the effects of endocrine disrupting chemicals on
          plants. Marshall University.
          https://mds.marshall.edu/cgi/viewcontent.cgi?article=2416&context=etd
        </p>
        <p className="reference">
          [5] Gibson, R., Durán-Álvarez, J. C., Estrada, K. L., Chávez, A., &
          Jiménez Cisneros, B. (2010). Accumulation and leaching potential of
          some pharmaceuticals and potential endocrine disruptors in soils
          irrigated with wastewater in the Tula Valley, Mexico. Chemosphere,
          81(11), 1437–1445. https://doi.org/10.1016/j.chemosphere.2010.09.006
        </p>
        <p className="reference">
          [6] Barata, S. (2021). Evaluation of the accumulation and toxicity of
          pharmaceuticals in lettuce plants.
          https://www.repository.utl.pt/bitstream/10400.5/22877/1/TESE_Doutoramento_Ines%20Leitao_2021_VDefinitiva.pdf
        </p>
        <p className="reference">
          [7] Ferrara, G., Loffredo, E., & Senesi, N. (2006). Phytotoxic,
          clastogenic and bioaccumulation effects of the environmental endocrine
          disruptor bisphenol A in various crops grown hydroponically. Planta,
          223(5), 910–916. https://doi.org/10.1007/s00425-005-0147-2
        </p>
        <p className="reference">
          [8] Kim, D., Kwak, J. I., & An, Y.-J. (2018). Effects of bisphenol A
          in soil on growth, photosynthesis activity, and genistein levels in
          crop plants (Vigna radiata). Chemosphere, 209, 875–882.
          https://doi.org/10.1016/j.chemosphere.2018.06.146
        </p>
        <p className="reference">
          [9] Cristóbal, A., Mendoza, J., Dra, C., & Tatiana, G. R. (n.d.).
          DETERMINACIÓN DE TRICLOSÁN EN TEJIDO VEGETAL Y EVALUACIÓN DE SU
          FRACCIÓN BIOACCESIBLE. Memoria para optar al título de Químico
          Farmacéutico. Uchile.Cl. Retrieved October 6, 2022, from
          https://repositorio.uchile.cl/bitstream/handle/2250/141697/Determinacion-de-triclosan-en-tejido-vegetal-y-evaluacion-de-su-fraccion-bioaccesible.pdf?sequence=1&isAllowed=y
        </p>
        <p className="reference">
          [10] Gustavo Ronderos-Lara, J., Saldarriaga-Noreña, H., Guillermo
          Reyes-Romero, P., Alberto Chávez-Almazán, L., Vergara-Sánchez, J.,
          Alfonso Murillo-Tovar, M., & Torres-Segundo, C. (2021). Emerging
          Compounds in Mexico: Challenges for their identification and
          elimination in wastewater. In Emerging Contaminants. IntechOpen.
        </p>
        <p className="reference">
          [11] Forbes. (2015, February 12). ¿Por qué México está rezagado en la
          producción de maíz? Forbes México.
          https://www.forbes.com.mx/por-que-mexico-esta-rezagado-en-la-produccion-de-maiz/
        </p>
        <p className="reference">
          [12] UNESCO. Agua para todos, agua para la vida, s.l.: Ediciones
          UNESCO y Mundi-Prensa. 2003.
        </p>
        <p className="reference">
          [13] INEGI. (2018). Agua. Cuéntame de México. INEGI. From:
          https://cuentame.inegi.org.mx/territorio/agua/usos.aspx?tema=T
        </p>
        <p className="reference">
          [14]Calderón-Moreno, G. M., Vergara-Sánchez, J., Saldarriaga-Noreña,
          H., García-Betancourt, M. L., Domínguez-Patiño, M. L., Moeller-Chávez,
          G. E., Ronderos-Lara, J. G., Arias-Montoya, M. I., Montoya-Balbas, I.
          J., & Murillo-Tovar, M. A. (2019). Occurrence and risk assessment of
          steroidal hormones and phenolic endocrine disrupting compounds in
          surface water in Cuautla River, Mexico. Water, 11(12), 2628.
          https://doi.org/10.3390/w11122628
        </p>
        <p className="reference">
          [15] Frieri, M., Kumar, K. & Boutin, A. (2017). Antibiotic resistance.
          Journal of Infection and Human Health. Vol. 10. Issue 4.
          https://doi.org/10.1016/j.jiph.2016.08.007
        </p>
        <p className="reference">
          [16] Hyldgaard, M., Mygind, T., Piotrowska, R., Foss, M. & Meyer, R.
          (2015). Isoeugenol has a non-disruptive detergent-like mechanism of
          action. Frontiers in Microbiology, 6. DOI:10.3389/fmicb.2015.00754
        </p>
        <p className="reference">
          [17] Nowak, K., Jabłońska, E., & Ratajczak-Wrona, W. (2019).
          Immunomodulatory effects of synthetic endocrine disrupting chemicals
          on the development and functions of human immune cells. Environment
          International, 125, 350–364.
          https://doi.org/10.1016/j.envint.2019.01.078
        </p>
        <p className="reference">
          [18] Eggen, T., Asp, T. N., Grave, K., & Hormazabal, V. (2011). Uptake
          and translocation of metformin, ciprofloxacin and narasin in forage-
          and crop plants. Chemosphere, 85(1), 26–33.
          https://doi.org/10.1016/j.chemosphere.2011.06.041
        </p>
        <p className="reference">
          [19] Soto, J. (2020). Dar valor a las y los agricultores, también es
          actuar por México. Greenpeace México. Retrieved 10 September 2022,
          from
          https://www.greenpeace.org/mexico/blog/9122/dar-valor-a-las-y-los-agricultores-tambien-es-actuar-por-mexico/.
        </p>
        <p className="reference">
          [20] Yamada, M., Okada, Y., Yoshida, T., & Nagasawa, T. (2008).
          Vanillin production using Escherichia coli cells over-expressing
          isoeugenol monooxygenase of Pseudomonas putida. Biotechnology letters,
          30(4), 665-670.
        </p>
      </Modal>
    </div>
  );
}
