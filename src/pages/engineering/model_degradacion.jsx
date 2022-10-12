export default function ModelPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://static.igem.wiki/teams/4260/wiki/imagen/project/biosensor/fondos-de-biosensor/project-biosensor.png)",
        minHeight: "100vh",
      }}
    >
      <div className="p-10 max-w-2xl m-auto pt-20 text-white">
        <h1 className="text-6xl text-center text-white font-bold">
          <strong>Mathematical Model</strong>
        </h1>
        <h2 className="h2">
          <br />
          <strong>Abstract and overview</strong>
        </h2>
        <p className="p">
          A mathematical equation was solved in order to model substrate
          degradation using a free enzyme that catalyzes its reaction through
          the bi bi ping-pong reaction mechanism, as is the case of the
          concentration of EDCs degraded by recombinant laccase, requiring only
          enzyme kinetics values as input. The developed model is useful to
          validate experimental results regarding enzymatic degradation,
          however, it can also be used to design and plan experiments in order
          to determine experimental parameters to achieve a desired result
          (exact quantities of reactants needed, optimal measurement times, for
          example), or to predict experimental results under certain initial
          conditions of concentration of substrates and/or enzyme. This is a
          very important feature because the model can project a reduction in
          the number of experimental units to be executed, reducing the number
          of experiments necessary to reach a result and, therefore, reducing
          the generation of waste. Finally, a very valuable aspect of our model
          is its versatility and ease of use, since it can be adjusted to each
          person's experimental data and, in addition to experimental work in
          the laboratory, can be used as a tool to teach a type of
          non-Michaelian enzyme kinetics.
          <br />
        </p>
        <h2 className="h2">
          <br />
          <strong>Overview</strong>
        </h2>
        <p className="p">
          <br />
          <em>What are laccases?</em>
          <br />
          <br />
          Laccases, also known as benzenediol:oxygen oxidoreductases or
          p-diphenol oxidases (EC 1.10.3.2) are blue multicopper oxidases (MCO)
          that catalyze the oxidation of aromatic and phenolic substrates by
          transferring one electron and thus, reducing oxygen to water [1].
          Laccases can only oxidize phenols and aromatic or aliphatic amines
          with lower redox potentials than themselves and small enough to access
          their active center. However, large molecules and other “not true
          substances of laccases” can be oxidized with the help of redox
          mediators, which are lower molecular weight organic compounds that act
          as electron carriers between the laccase and the substrate [2]. <br />
          It is also important to mention that most of the laccases that have
          been studied so far come from fungi, where they play an important role
          in the breakdown of whole wood components (such as cellulose,
          hemicellulose, and lignin) as part of a wide range of physical roles
          including morphogenesis, fungal plant-pathogen/host interaction,
          defense against stress, lignin degradation, sporulation, pigment
          production, and fruiting body formation [2]. We take advantage of this
          broad capacity to degrade phenolic compounds and aromatic amines from
          Trametes versicolor laccase, which is quite well characterized,
          throughout our project to oxidize and, therefore, degrade two of the
          endocrine disruptors (EDC, for its acronym in English) more common. As
          it can be seen, the only requirement for their catalytic action is
          oxygen, which makes laccases highly attractive for the degradation of
          a large number of substrates in bioremediation [2].
          <br />
          <br />
          As shown in Figure 1a, the irrigation water used on the lettuce
          contains EDCs like bisphenol A (BPA) and carbamazepine (CBZ), which
          cause phytotoxic effects in crops [3]. For example, it has been
          reported that lettuce in contact with BPA and CBZ suffers shortage in
          the length of roots and leaves [4], reduction of the activity of the
          photosystem II [5], and oxidative stress in roots and leaves, leading
          to an increase in enzymatic activity of superoxide dismutase,
          catalase, guaiacol peroxidase and ascorbate oxidase for reducing such
          stress [6]. As presented in Figure 1b, our project Hydro Defense:
          Defending Crops Against Disruptors seeks to degrade these EDCs by the
          oxidative action of the laccase. It is in this way, a further system
          can be developed for degrading BPA and CBZ with laccase, so that they
          don’t reach the crops that we humans and other living organisms
          consume.
          <br />
          <br />
          Figure 1. a) Phytotoxic effect in lettuce crops after irrigating with
          water contaminated with BPA and CBZ. b) Degradation of BPA and CBZ
          with Trametes versicolor laccase before irrigation. [Elaborated in
          BioRender]
          <br />
          T--TecCEM--Degradation_Phytotoxiceffect → acceso
          <br />
          <br />
          <em>How is the catalytic site organized?</em>
          <br />
          <br />
          The structure of laccases is organized in three consecutive domains
          and the stabilization is due to disulphide bonds between domains I and
          II as well as in between domains I and III [7]. As presented in Figure
          2, in general laccases contain four atoms of copper distributed in
          different binding sites and are classified in three types: i) one
          copper type 1 (T1) responsible for the blue color of the laccase
          enzyme, ii) one copper type 2 (T2) that generates a characteristic
          electron paramagnetic resonance signal, and iii) two coppers type 3
          (T3); the latter ones form a three-nuclear copper cluster site (T2/T3
          site). The four copper ions in the active site transfer the electrons
          throughout the substrate oxidation catalyzed by laccase. It is thought
          that T1 copper accepts electrons from the reducing substrates, which
          are then transferred to the T2/T3 site, where oxygen is reduced to
          water. Therefore, the net result consists of the oxidation of four
          substrate molecules into four radicals and the reduction of one oxygen
          molecule into two water molecules [2, 8]. These unstable chemical
          products (free radicals) cause domino reactions, leading to complex
          chemical transformations such as lignin synthesis and degradation [9].
          <br />
          <br />
          Figure 2. Laccase 3D structure and copper atoms in its catalytic site
          [7, 10].
          <br />
          T--TecCEM--Degradation_Laccase_CatalyticSite → acceso
          <br />
          <br />
          <em>How does laccase catalyze its reaction?</em>
          <br />
          <br />
          Studies [11, 12] suggest that the catalytic activity of laccases is
          not governed by the Michaelis-Menten behavior. Instead, laccases
          catalyze their reaction through the Ping-Pong Bi-Bi mechanism, which
          means that the reaction is being catalyzed by a single enzyme but it
          involves two substrates and two products. As presented in Figure 3, in
          a Ping-Pong Bi-Bi mechanism, also characteristic of reactions carried
          out by lipases and polyketide synthases, the first substrate A reacts
          with the enzyme E, this EA complex gives rise to the formation of a
          substituted enzyme intermediate (chemically different form of the
          enzyme) F in complex with the first product P, which is then released.
          All of these are regarded as the Ping step. Later, in the Pong step,
          the second substrate B interacts and reacts with the substituted
          enzyme intermediate F (chemically modified enzyme) assembling the
          complex FB, which allows the formation of the second product as the
          complex QE since both the second product Q and the original enzyme E
          are liberated [13, 14]. This means that the original enzyme is
          regenerated at the end of the reaction.
          <br />
          <br />
          Figure 3. Schematic of the Ping-Pong Bi-Bi mechanism by which laccase
          catalyzes its reaction [14]. E = original enzyme, A = first substrate,
          P = first product, F = substituted enzyme intermediate, B = second
          substrate, and Q = second product.
          <br />
          T--TecCEM--Degradation_Laccase_ReactionSchematic → acceso
          <br />
          <br />
          <br />
        </p>
        <h2 className="h2">
          <br />
          <strong>Aims and objectives</strong>
        </h2>
        <p className="p">
          The main goal of our model’s solution is to predict and validate the
          enzymatic degradation of two commonly found EDCs (bisphenol A and
          carbamazepine) by the Ping-Pong Bi-Bi reaction mechanism of our
          recombinant laccase. However, we also seek to help others accomplish
          safer and more eco-friendly experiments by determining the amount of
          reactants required and thus, reducing both waste liberation and
          exposure to hazardous compounds. Furthermore, the solution of the
          model is not only intended for helping future iGEM teams and other
          colleagues of the scientific community, but to contribute as well to
          the educational field as a tool for teaching a type of non-Michaelian
          enzyme kinetics. <br />
          <br />
          The model’s goals can be broken down into the following particular
          objectives:
          <br />
          1. To validate and predict experimental results of substrate
          degradation through the Ping-Pong Bi-Bi enzymatic mechanism.
          <br />
          2. To design and plan experiments by determining the exact amount of
          reactants required and/or the adequate measurement times for achieving
          a desired result.
          <br />
          3. To estimate the amount of reactants required in order to accomplish
          safer and more eco-friendly experiments and thus, reducing both waste
          liberation and exposure to hazardous compounds.
          <br />
          4. To have an intuitive and easy-to-use interface that will be useful
          to future iGEM teams and other members of the scientific community,
          that can be adjusted to their own experimental data.
          <br />
          5. To work as a teaching tool for the Ping-Pong Bi-Bi non-Michaelian
          enzyme kinetics.
          <br />
          6. To establish and provide the basis for solving the mathematical
          model of an immobilized system.
          <br />
          <br />
        </p>
        <h2 className="h2">
          <br />
          <strong>Model structure</strong>
        </h2>
        <p className="p">
          The equation that models the rate of enzyme catalyzed reaction v
          according to the Ping-Pong Bi-Bi reaction mechanism (Figure 4) is
          presented as Equation 1 [15]. Specifically, in the reaction catalyzed
          by the laccase, the first substrate A corresponds to oxygen (O2) and
          the first product P refers to water. This reaction must occur in order
          for the second substrate B (BPA or CBZ) to be oxidized and degraded
          into its corresponding product. For example, due to the laccase
          enzymatic activity, BPA is transformed into 2,2-bis(4-phenyl
          quinone)propane [16]. In such reaction, O2 is the first substrate A.
          Then, the first oxidation reaction occurs while the complex EA is
          being transformed into the complex FP, which means that the laccase
          acquired a chemically different form. Later on, water is released as
          the first product P and now BPA can bond to the substituted enzyme
          intermediate F. They interact to assemble the complex FB which is
          transformed into the complex QE as the second product 2,2-bis(4-phenyl
          quinone)propane (Q) is being formed. This means that the enzyme has
          returned to its original conformation E and, once the second product Q
          dissociates, the enzyme is free once again.
          <br />
          <br />
          Figure 4. Schematic of the Ping-Pong Bi-Bi mechanism by which laccase
          catalyzes its reaction [14]. E = original enzyme, A = first substrate,
          P = first product, F = substituted enzyme intermediate, B = second
          substrate, and Q = second product.
          <br />
          T--TecCEM--Degradation_Laccase_BiBiMechanism → acceso
          <br />
          <br />
          v = (V_max [O_2] [EDC])/(〖Km〗_EDC [O_2] + 〖Km〗_(O_2 ) [EDC] +
          [EDC][O_2])
          <br /> (Eq. 1)
          <br />
          <br />
          However, as we want to model the degradation reaction of two EDCs (BPA
          and CBZ), we can rewrite Equation 1 as follows:
          <br />
          <br />
          (d[BPA])/dt = -(V_max [O_2] [BPA])/(〖Km〗_BPA [O_2] + 〖Km〗_(O_2 )
          [BPA] + [BPA][O_2])
          <br /> (Eq. 2)
          <br />
          <br />
          (d[CBZ])/dt = -(V_max [O_2] [CBZ])/(〖Km〗_CBZ [O_2] + 〖Km〗_(O_2 )
          [CBZ] + [CBZ][O_2])
          <br /> (Eq. 3)
          <br />
          <br />
          Note: the parameters and variables are defined in the next section.
          <br />
          <br />
          <br />
          <strong>Model parameters</strong>
          <br />
          <strong>Table 1.</strong> Variables and parameters of the laccase
          degradation model
          <br />
          <br />
          <strong>Methods</strong>
          <br />
          <em>Algorithm</em>
          <br />
          <br />
          The differential equation was solved in Matlab using the lsqcurvefit
          function, which employs the Levenberg-Marquardt (LMA or just LM)
          algorithm, also known as the damped least-squares method (DLS). As
          this curve-fitting method is a combination of the gradient descent and
          the Gauss-Newton, it is useful for solving nonlinear least squares
          problems; which means that the objective is to reduce the sum of the
          squared errors. In fact, because both of its base methods are
          iterative algorithms, the LM algorithm uses a series of calculations
          based on guesses for the x-values, in order to find a solution. The
          interesting part of the algorithm is that, at each iteration, it
          chooses either the gradient descent or the Gauss-Newton for estimating
          the solution [17].
          <br />
          <br />
          The most remarkable and advantageous feature of this algorithm is that
          it is more robust (since it can choose between two models at each
          iteration) and it converges faster than the Gauss-Newton or gradient
          descent on their own [18]. However, it is important to bear in mind
          that for some functions, the algorithm can get lost in “parameter
          spacer”, which easily hinders convergence to the solution [19]. An
          example of successful data fitting with the Levenberg-Marquardt for
          modeling kinetics has already been reported [20]. In this study, the
          LM method was applied to fit the parameters in the Monod model (which
          describes bacterial kinetic degradation) into a nonlinear regression
          curve, expressing the substrate concentration as a function of time.
          <br />
          <br />
          <em>Assumptions</em>
          <br />
          <br />
          It is important to mention that the model assumes steady-state for the
          oxygen, in order to consider a constant distribution to the system as
          laccase consumes this substrate for catalyzing its reaction. <br />
          <br />
          Because neither the oxygen concentration nor the Km of oxygen were
          measured in our experiments, the oxygen concentration was assumed to
          be constant. This is due to the fact that when carrying out
          experiments with concentrations in high volumes of water and small
          amounts of enzyme and substrate, as would be the case with the
          degradation of EDCs by laccase in large bodies of water, the total
          oxygen concentration does not present significant changes. Also, in
          the case of bioreactors, it is possible to monitor oxygen consumption
          and dissolved oxygen in the medium, so it is possible to supply the
          amount necessary to keep it constant. Finally, the phenomenon of
          surface reaeration was considered, which consists of the dissolution
          of the oxygen present in the atmospheric air within bodies of water.
          Laccase consumes the oxygen present in the medium in which it is found
          when carrying out its reaction, creating an oxygen gradient. When this
          gradient is created, the oxygen present in the atmosphere migrates
          towards the water, always seeking balance.
          <br />
          <br />
          <strong>Results and model discussion</strong>
          <br />
          <br />
          Our results consist of the solution of a model that suits the
          Ping-Pong Bi-Bi mechanism and has already been introduced, both in the
          model structure and parameters sections. The input parameters for the
          model (Table 1 in model parameters section) were measured through an
          enzymatic assay for degrading BPA with laccase; however, as part of
          our Design, Build, Test and Learn Process (DBTL), the team wasn’t able
          to fully validate theoretically and experimentally the model up to the
          date of submission. This was mainly due to the fact that oxygen was
          not being considered as the important substrate it is for catalyzing
          laccase’s reaction; therefore oxygen concentration was not controlled
          and neither were its parameters measured. Throughout the first DBTL
          process, the team designed the model seeking to approximate the
          Ping-Pong Bi-Bi mechanism via the Michaelis-Menten equation. In such
          way, the experiments were designed and the model was built in Matlab,
          but experimentally it was observed that the enzyme was not carrying
          out its activity as expected. When reviewing the model, the team
          hypothesized that not enough oxygen was being provided for the enzyme
          to catalyze the degradation reaction. Thus, the model was redesigned
          and rebuilt based on Segel’s kinetics mathematical description [15]
          for the Ping-Pong Bi-Bi mechanism. Nevertheless, as mentioned before,
          the input parameters from the experiment were not tested up to the
          date of submission. Please find attached all the model files on the
          Contributions to future iGEM teams section.
          <br />
          <br />
          <em>Further steps</em>
          <br />
          <br />
          Both theoretical and experimental validation are the most important
          steps to carry out in the future; the correct description of the
          Ping-Pong Bi-Bi mechanism by this model can only be ensured by
          performing these validations. In the immediate future, the team seeks
          to test the experimental results of the BPA degradation assay in the
          Matlab simulation for experimental validation. If so, the model will
          be ready for predictions and decision-making, once you perform the
          corresponding enzymatic assays for calibrating the model and solving
          for variables within the equation to obtain the parameters required
          for achieving a desired result (exact quantities of reactants needed,
          optimal measurement times, and so on) or to predict experimental
          results given an initial concentration of enzymes and substrate.{" "}
          <br />
          <br />
          <strong>Contributions to future iGEM teams</strong>
          <br />
          <br />
          Other iGEM teams, colleagues, members of the scientific community, and
          people in general can adapt the model to their own Ping-Pong Bi-Bi
          enzymatic degradation system, since the solution allows the input of
          values and parameters based on your own experimental results. The team
          seeks to contribute not only to the scientific community with an
          easy-to-use tool (with input being a simple Excel spreadsheet with the
          experimental results) but also to the educational sector, with the
          purpose of teaching more complex reaction mechanisms such as the Bi-Bi
          Ping-Pong. Actually, as part of the DBTL process, the team developed
          the solution of 2 other models that describe enzyme kinetics with the
          Michaelis-Menten equation. The first model consists of a system of
          ordinary differential equations (ODEs) that describes the
          enzyme-catalyzed reaction according to Michaelis Menten [21], while
          the second one was based on a system of EDCs degradation with active
          lacase of Myceliophthora thermophila within an enzymatic membrane
          inside a reactor [22]. Both of these models were first used as an
          attempt to approximate the Ping-Pong Bi-Bi mechanism with
          Michaelis-Menten in order to model laccase’s kinetics when being
          present in its free and immobilized form. However, as mentioned in the
          results section, these models weren’t appropriate because the oxygen
          as substrate was not considered.
          <br />
          <br />
          Yet, the team attaches below all model files (as well as the whole
          solution for the Michaelis-Menten models in the Appendix section) as
          an effort for establishing a base for improving the Ping-Pong Bi-Bi
          enzyme kinetics description and for the development of an educational
          calculator as a tool that can graphically compare both mechanisms.
          This idea emerged from the need of comparing both mechanisms and
          understanding the Ping-Pong Bi-Bi, which is a knowledge the team would
          like to share so that more people are interested and familiar with
          non-Michaelian kinetics (especially when most educational courses and
          books give a great emphasis on the Michaelis-Menten behavior).
          <br />
          <br />
          <em>Michaelis-Menten model</em> <br />
          <br />
          <strong>SOFTWARE</strong> Adjuntar los siguientes archivos en wiki
          <br />
          https://drive.google.com/file/d/1tjkYMMP-kUf4N7_G4yfeKLg0ph3XiNbq/view?usp=sharing{" "}
          <br />
          https://drive.google.com/file/d/1_hQQuMkFimmRt8q2ZgOXf1OiezTei6l5/view?usp=sharing{" "}
          <br />
          https://drive.google.com/file/d/1xJxN8sBoDSajc8Y5uVMWYi1sYwz6vkTk/view?usp=sharing{" "}
          <br />
          <br />
          <em>Ping-Pong Bi-Bi model </em>
          <br />
          <br />
          <strong>SOFTWARE</strong> Pedir a Rodrigo Labastida los archivos del
          último modelo para incluirlos como adjuntos en la wiki
          <br />
          <br />
          <strong>Conclusions</strong>
          <br />
          Two systems of differential equations based on the Michaelis-Menten
          enzyme kinetics as well as an equation that describes the Ping-Pong
          Bi-Bi reaction mechanism were solved using Matlab. The equation that
          models the Ping-Pong Bi-Bi reaction catalyzed by the laccase has not
          been validated experimentally up to the date of the present
          submission; however, it will be tested in the immediate future in
          order to determine its validation. When valid, this equation will not
          only be useful for predicting and confirming experimental results of
          laccase assays but it might be calibrated to model the enzymatic
          activity of other enzymes that catalyze their reaction with such
          mechanism. In both scenarios, the solution can predict results but, by
          solving for other variables, it is also capable of predicting
          reactants for a better planning and design of experiments. Moreover,
          as a result of a better measurement, the equation can lead to a
          reduction in the number of experimental units and experiments to be
          executed, ultimately reducing the generation of waste. <br />
          <br />
          Finally, as a contribution from what was learned of our system
          throughout our DBTL process, the Matlab files with the models solution
          were provided not only for the use of future iGEM teams and other
          people from the scientific community, but also to establish a base for
          constructing a better approach to mathematically describe the kinetics
          of free and immobilized enzymes whose behavior follows the Ping-Pong
          Bi-Bi mechanism. Apart from that, the solution of the models can be
          used as an educational tool to teach a type of non-Michaelian enzyme
          kinetics, showing how does the mechanism work and how different it is
          from the Michaelis-Menten as a graphic comparison between mecanisms.
          <br />
          <br />
          <strong>Appendix</strong>
          <br />
          <br />
          On the following document, please find attached the complete solution
          of both Michaelis-Menten enzyme kinetics models with their respective
          assumptions:
          <br />
          <br />
          <strong>SOFTWARE</strong> Adjuntar este archivo en wiki como word o
          pdf
          <br />
          DEG MODEL.docx <br />
          <br />
          <strong>References</strong>
          <br />
          <br />
          <br />
          [1] Piscitelli, A., Pezzella, C., Giardina, P., Faraco, V., and
          Giovanni, S. (2010). Heterologous laccase production and its role in
          industrial applications. Bioengineered Bugs, 1(4): 252-262.
          https://doi.org/10.4161/bbug.1.4.11438 <br />
          <br />
          [2] Rodríguez-Couto, S. (2018). Solid-State Fermentation for Laccases
          Production and Their Application. Current Developments in
          Biotechnology and Bioengineering; 221-234.
          http://doi.org/10.1016/B978-0-444-63990-5.00011-6 <br />
          <br />
          [3] Ferrara, G., Loffredo, E., and Sensei, N. (2006). Phytotoxic,
          clastogenic and bioaccumulation effects of the environmental endocrine
          disruptor bisphenol A in various crops grown hydroponically. Planta,
          223, 910-916. https://doi.org/10.1007/s00425-005-0147-2 <br />
          <br />
          [4] Barata-Leitão, I. I., (2021). Evaluation of the Accumulation and
          Toxicity of Pharmaceuticals in Lettuce Plants. Lisboa University.
          https://www.repository.utl.pt/bitstream/10400.5/22877/1/TESE_Doutoramento_Ines%20Leitao_2021_VDefinitiva.pdf{" "}
          <br />
          <br />
          [5] Zhang, J., Wang, L., Li, M., Jiao, L., Zhou, Q., and Huang, X.
          (2015). Effects of bisphenol A on chlorophyll fluorescence in five
          plants. Environmental Science and Pollution Research 22, 17724-17732.
          https://doi.org/10.1007/s11356-015-5003-8
          <br />
          <br />
          [6] Leitão, I., Mourato, M. P., Carvalho, L., Oliveira, M. C.,
          Marques, M. M., and Martins, L. L. (2021). Antioxidative response of
          lettuce (Lactuca sativa) to carbamazepine-induced stress.
          Environmental Science and Pollution Research, 28, 45920-45932.
          https://doi.org/10.1007/s11356-021-13979-3 <br />
          <br />
          [7] Agrawal, K., Chaturvedi, V., and Verma, P. (2018). Fungal laccase
          discovered but yet undiscovered. Bioresources and Bioprocessing, 5(4).
          https://doi.org/10.1186/s40643-018-0190-z <br />
          <br />
          [8] Baldrian, P. (2005). Fungal laccases - occurrence and properties.
          FEMS Microbiology Reviews, 30(2): 215-242.
          https://doi.org/10.1111/j.1574-4976.2005.00010.x
          <br />
          <br />
          [9] Arregui, L., Ayala, M., Gómez-Gil, X., Gutiérrez-Soto, G.,
          Hernández-Luna, C. E., Herrera de los Santos, M., Levin, L.,
          Rojo-Domínguez, A., Romero-Martínez, D., Saparrat, M. C. N.,
          Trujillo-Roldán, M. A., and Valdez-Cruz, N. A. (2019). Laccases:
          structure, function, and potential application in water
          bioremediation. Microbial Cell Factories, 18(200).
          https://doi.org/10.1186/s12934-019-1248-0 <br />
          <br />
          [10] Cardullo, N., Muccilli, V., and Tringali, C. (2022).
          Laccase-mediated synthesis of bioactive natural products and their
          analogues. RSC Chemical Biology, 6(3), 614-647.
          https://doi.org/10.1039/D1CB00259G <br />
          <br />
          [11] Kulys, J., Krikstopaitis, K., Ziernys, A., and Schneider, P.
          (2002). Laccase-catalyzed oxidation of syringates in presence of
          albumins. Journal of Molecular Catalysis B: Enzymatic, 18(1-3):
          99-108. https://doi.org/10.1016/S1381-1177(02)00073-5 <br />
          <br />
          [12] Kurniawati, S., & Nicell, J. A. (2009). A comprehensive kinetic
          model of laccase-catalyzed oxidation of aqueous phenol. Biotechnology
          Progress, 25(3): 763-773. https://doi.org/10.1002/btpr.111 <br />
          <br />
          [13] Pérez-Galende, P., Hidalgo-Cuadrado, N., Kostetsky, E. Y., Roig,
          M. G., Villar, E., Shnyrov, V. L., & Kennedy, J. F. (2015). Kinetics
          of Spanish broom peroxidase obeys a Ping-Pong Bi-Bi mechanism with
          competitive inhibition by substrates. International Journal of
          Biological Macromolecules, 81: 1005-1011.
          https://doi.org/10.1016/j.ijbiomac.2015.09.042 <br />
          <br />
          [14] Frey, P. A., & Hegeman, A. D. (2007). Enzymatic reaction
          mechanisms. Oxford University Press. <br />
          <br />
          [15] Segel, I. H. (2014). Enzyme kinetics: Behavior and analysis of
          rapid equilibrium and steady-state enzyme systems. Wiley. <br />
          <br />
          [16] Bolli, A., Galluzo, P., Ascenzi, P., Del Pozzo, G., Manco, I.,
          Vietri, M. T., Mita, L., Altucci, L, Mita, D. G., & Marino, M. (2008).
          Laccase treatment impairs bisphenol A-induced cancer cell
          proliferation affecting estrogen receptor 𝛼-dependent rapid signals.
          IUBMB Life, 60(12): 843-852. https://doi.org/10.1002/iub.130 <br />
          <br />
          [17] Gavin, H. P. (2020). The Levenberg-Marquardt algorithm for
          nonlinear squares curve-fitting problems. Department of Civil and
          Environmental Engineering. Duke University.
          https://people.duke.edu/~hpgavin/ce281/lm.pdf <br />
          <br />
          [18] Nelles, O. (2011). Nonlinear system identification: From
          classical approaches to neural networks and fuzzy models. Springer.{" "}
          <br />
          <br />
          [19] Transtrum, M. K., and Sethna, J. (2012). Improvements to the
          Levenberg-Marquardt algorithm for nonlinear least-squares
          minimization. Laboratory of Atomic and Solid State Physics, Cornell
          University. https://arxiv.org/pdf/1201.5885.pdf <br />
          <br />
          [20] Van Hecke, T. (2017). The Levenberg-Marquardt method to fit
          parameters in the Monod kinetic model. Journal of Statistics and
          Management Systems, 20(5): 953-963.
          https://doi.org/10.1080/09720510.2017.1325090 <br />
          <br />
          [21] Altafini, C. (2007). ODEs models in Systems Biology.
          https://www.sissa.it/fa/altafini/teach/SISSA07/lect07D-prn-2.pdf{" "}
          <br />
          <br />
          [22] Carvalho, C. L. S., Gomes, F. M., and Pereira, F. M. (2020).
          Mathematical Modeling of Estrogen Degradation in Enzymatic Membrane
          Reactor. Industrial Biotechnology, 16(2): 50-55.
          https://doi.org/10.1089/ind.2020.29200.csc <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}
