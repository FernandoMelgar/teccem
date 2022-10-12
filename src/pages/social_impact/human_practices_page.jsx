import { ModalGlass } from "../../components/modal";

export default function HumanPracticesPage() {
  return (
    <div
      className="h-full w-full pt-28"
      style={{
        backgroundImage:
          "url(https://static.igem.wiki/teams/4260/wiki/human-practices/human-practices-bg.png)",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <h1 className="text-7xl text-center text-white">Human Practices</h1>
      <img
        className="m-auto"
        src="https://static.igem.wiki/teams/4260/wiki/human-practices/tree-btn-1400.png"
        alt="Human Practieces tree"
        useMap="#tree_human_practices_map"
      />

      <map name="tree_human_practices_map">
        <area
          target=""
          alt="Choosing Our Problem"
          title="Choosing Our Problem"
          onClick={() => {
            document.getElementById("choosing_our_problem_modal").click();
          }}
          coords="601,111,799,142"
          shape="rect"
        />
        <area
          target=""
          alt="Approach with farmers"
          title="Approach with farmers"
          onClick={() => {
            document.getElementById("approach_with_farmers_ modal").click();
          }}
          coords="449,230,630,277"
          shape="rect"
        />
        <area
          target=""
          alt="There are no regulation"
          title="There are no regulation"
          onClick={() => {
            document.getElementById("no_regular_laws_modal").click();
          }}
          coords="760,244,1021,284"
          shape="rect"
        />
        <area
          target=""
          alt="We collected opinions"
          title="We collected opinions"
          onClick={() => {
            document.getElementById("collected_opinions_modal").click();
          }}
          coords="731,339,998,389"
          shape="rect"
        />
        <area
          target=""
          alt="We supported initiative"
          title="We supported initiative"
          onClick={() => {
            document.getElementById("supportedinitiative").click();
          }}
          coords="1018,297,1304,380"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed citizens"
          title="We interviewed citizens"
          onClick={() => {
            document.getElementById("weinterviewedcitizens").click();
          }}
          coords="940,395,1159,431"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed farmers"
          title="We interviewed farmers"
          onClick={() => {
            document.getElementById("weinterviewedfarmers").click();
          }}
          coords="951,464,1155,509"
          shape="rect"
        />
        <area
          target=""
          alt="We seeked to create"
          title="We seeked to create"
          onClick={() => {
            document.getElementById("weseeked").click();
          }}
          coords="1181,482,1338,539"
          shape="rect"
        />
        <area
          target=""
          alt="Dr. Edson Estrada told"
          title="Dr. Edson Estrada told"
          onClick={() => {
            document.getElementById("edson").click();
          }}
          coords="97,467,393,526"
          shape="rect"
        />
        <area
          target=""
          alt="We contributed to conserv"
          title="We contributed to conserv"
          onClick={() => {
            document.getElementById("conservationlake").click();
          }}
          coords="428,440,615,503"
          shape="rect"
        />
        <area
          target=""
          alt="Opinions from Master Rosa"
          title="Opinions from Master Rosa"
          onClick={() => {
            document.getElementById("masterrosa").click();
          }}
          coords="721,522,1071,607"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed experts"
          title="We interviewed experts"
          onClick={() => {
            document.getElementById("experts").click();
          }}
          coords="406,602,620,667"
          shape="rect"
        />
        <area
          target=""
          alt="Concluded by developing"
          title="Concluded by developing"
          onClick={() => {
            document.getElementById("concludeddeveloping").click();
          }}
          coords="103,661,399,765"
          shape="rect"
        />
        <area
          target=""
          alt="With the opinion of experts"
          title="With the opinion of experts"
          onClick={() => {
            document.getElementById("opinionexperts").click();
          }}
          coords="1010,679,1336,787"
          shape="rect"
        />
        <area
          target=""
          alt="Recieved help from the"
          title="Recieved help from the"
          onClick={() => {
            document.getElementById("oscar").click();
          }}
          coords="345,782,665,889"
          shape="rect"
        />
        <area
          target=""
          alt="Concluded through an "
          title="Concluded through an "
          onClick={() => {
            document.getElementById("economicmodel").click();
          }}
          coords="679,801,1054,908"
          shape="rect"
        />
        <area
          target=""
          alt="Government"
          title="Government"
          href=""
          coords="219,2405,397,2447"
          shape="rect"
        />
        <area
          target=""
          alt="Farmer"
          title="Farmer"
          href=""
          coords="260,2509,437,2553"
          shape="rect"
        />
        <area
          target=""
          alt="Mexican Society"
          title="Mexican Society"
          href=""
          coords="365,2593,531,2668"
          shape="rect"
        />
        <area
          target=""
          alt="Experts"
          title="Experts"
          href=""
          coords="591,2650,767,2694"
          shape="rect"
        />
        <area
          target=""
          alt="Tec professors"
          title="Tec professors"
          href=""
          coords="815,2567,974,2641"
          shape="rect"
        />
        <area
          target=""
          alt="Team members"
          title="Team members"
          href=""
          coords="1022,2422,1179,2496"
          shape="rect"
        />
        <area
          target=""
          alt="Instructors"
          title="Instructors"
          href=""
          coords="1022,2552,1181,2599"
          shape="rect"
        />
      </map>
      <ModalGlass modalId="choosing_our_problem_modal">
        <div className="text-white">
          <h3 className="h3">Choosing our problem </h3>
          <p className="p">
            At the beginning of the iGEM period we were asked which project we
            would like to present for the year 2022? The proposals were various,
            however, it was decided to continue on the problem of EDCs on which
            IGEM 2021 focused, using a biosensor for the quantification of them
            in bottled water. We believe that EDCs are highly important as,
            according to the Endocrine Society, since 2009, there is sufficient
            evidence that they are a serious risk to public health. Likewise,
            these compounds are diverse and it is believed that there are around
            1400 varieties present in the environment and in the food supply
            chain [1]. Today there is no accessible, fast and economic way, in
            Mexico, for its quantification, which is why it was decided to
            continue with this approach from the last project.
          </p>
          <p className="p">
            Once we knew that we were going to continue with the EDCs topic, a
            robust investigation was carried out in which it was found that most
            of the EDCs end up in the drains. Data from the National Institute
            of Statistics and Geography (INEGI) shows that there are around
            4,887 untreated sewage water discharge points in Mexican territory,
            with 56% being deposited into dams, rivers, and lakes [2]. On the
            other hand, the 46% of wastewater [3] that did pass through a water
            treatment plant does not have the technology to eliminate EDCs [4].
            That is why, for this project, it was decided not only to have a
            biosensor for the quantification of EDCs, but also to have a system
            for eliminating this compound.
          </p>
          <p className="p">
            Subsequently, to choose the approach and segment the problem, it was
            observed that in 2017, 6.19 million hectares destined for
            agricultural production are irrigated by some type of irrigation
            system, of these, 8.12% use sewage and treated water for irrigation,
            exposing 500 thousand hectares of Mexican territory to EDCs [4], as
            well as 5.5 million tons of agricultural products produced in that
            area [4,5]. It should be noted that in 2019 the percentage of
            irrigation with sewage and treated water increased to 12% [6], so we
            infer that this number will rise in the future.
          </p>
          <p className="p">
            Similarly, this is aligned with the objectives of sustainable
            development (OSD), since 70% of drinking water in Mexico is used for
            agricultural activity, leaving only 14% available for the
            population, causing scarcity in some urban areas [7]. Although it is
            expected that the percentage destined to agriculture will be reduced
            and exchanged for the use of treated or sewage water.
          </p>
          <p className="p">
            That is why it is important to start designing systems for the
            quantification and degradation of the EDCs present in irrigation of
            crops, in order to have higher quality agricultural products and
            less exposure of the population to these compounds.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="approach_with_farmers_ modal">
        <div className="text-white">
          <h3 className="h3">Approach with farmers</h3>
          <p className="p">
            To learn about the irrigation system in Mexico, farmers from a
            region with a semi-arid climate and, low rainfall called El Valle
            del Mezquital in the state of Hidalgo, were interviewed, where
            agriculture represents 59% of the total production of the state and
            within its main crops is corn grain, green alfalfa, beans, among
            others [9]. They told us that they use the water from the Endhó dam
            (figure 2) to irrigate their crops, which stores sewage water from
            Mexico City. Farmers are aware of the origin of their water they
            irrigate with, even if they believe that there is a higher yield in
            their crops with the use of waste water, they are concerned about
            using it due to possible dangers.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hp-eq-mezquital.jpg"
            alt="Mezquital"
            className="figure"
          />
          <p className="figure_desc">
            Figure 2: Map of Hidalgo segmented by quantity of sewage water
            discharges without treatment by municipality: Red (greater than 10
            up to 25); Brown (greater than 7 up to 10); Violet (greater than 4
            up to 7); Orange (greater than 2 to 4); Green (greater than 1 up to
            2). Source: Adaptado de INEGI. (2014).Cantidad de puntos de descarga
            de aguas residuales municipales sin tratamiento
            [Database].Indicadores. From
            https://www.inegi.org.mx/app/mapa/espacioydatos/default.aspx?ag=
          </p>
          <p className="p">
            The first approach with this community was of the utmost importance
            since we verified the use of wastewater in agricultural production
            and that despite being aware of this health risk, there is no
            specific solution to it.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="no_regular_laws_modal">
        <div className="text-white">
          <h3 className="h3">There are no regulation or laws</h3>
          <p className="p">
            The panorama of the regulation of EDCs in Mexico is just beginning,
            in 2021, article 25 of the Solid Waste Law of Mexico City came into
            force, where it stipulates the prohibition of the commercialization,
            distribution and delivery of products that contain intentionally
            added microplastics [11]. Likewise, various initiatives have been
            proposed in the Chamber of Deputies to modify article 269 of the
            General Health Law where the sale, manufacture, distribution and
            import of cosmetic products containing microplastics is prohibited
            [12-13]. However, even if microplastics are not necessarily EDCs,
            starting with the regulation of these is a good start to give
            guidelines to develop laws for EDCs.'
          </p>
          <p className="p">
            In Mexico, excluding Mexico City, there is no regulatory framework
            in which the use of EDCs such as bisphenol A is restricted. There is
            a present pressure from citizens and politicians towards the Federal
            Commission for the Protection against Sanitary Risks (COFEPRIS) so
            that it begins to regulate the use of EDCs in plastics and their
            derivatives in food containers,as well as for the Ministry of Health
            so that it carries out awareness campaigns among the population
            about the sanitary risks inherent to EDCs [14]. There is currently
            only one official Mexican standard on environmental health and
            biological exposure indices for personnel occupationally exposed to
            chemical substances that speaks of non-exposure to endocrine
            disruptors among other substances and a personal and biological
            environmental monitoring of the exposure must be carried out [15].
          </p>
          <p className="p">
            Finally, in terms of laws for monitoring the concentrations of EDCs
            in water, there are none. This means that both the authorities and
            the farmers do not take this parameter into account to control the
            quality of irrigation water, which besides causing terminal
            illnesses, affects agricultural production, which is the main
            primary activity in Mexico.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="collected_opinions_modal">
        <div className="text-white">
          <h3 className="h3">
            We collected opinions from politicians about the problem
          </h3>
          <p className="p">
            We had a meeting with the advisor coordinator of the Morena
            political party, Santos González. We presented our project to him,
            obtained comments and more information about the steps that are
            necessary to create a law initiative. From this meeting we also
            obtained contact with the Senator from Mexico, Dr. Ricardo Ávila
            Monreal, who also reviewed our project. Given their observations, we
            conclude that the problem, despite being of the utmost importance,
            is not yet recognized as a priority. However, the meeting with these
            politicians opened a window of opportunity for the inclusion of
            science in the regulatory.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="supportedinitiative">
        <div className="text-white">
          <h3 className="h3">
            We supported the initiative to create a law on microplastics and
            EDCs promoted by Deputy Julieta Macías
          </h3>
          <p className="p">
            We contacted the Deputy of Mexico, Julieta Macias, of the Movimiento
            Ciudadano political party, whom we had a meeting with her and with
            the coordinator of advisers of the Movimiento Ciudadano political
            party, Gustavo Ruiz Galindo, in the Chamber of Deputies. After
            showing them our project and receiving their comments, they invited
            us to work with them to create a law initiative related to
            microplastics and EDCs. To this day we are working with them to
            contribute to the progress of this law initiative by sending our
            research results from the project, as well as from the proposed
            biosensor and related literature, and even a possible connection
            with the research of doctoral candidate Sergio Cortez and his
            adviser Dr. Mauricio Rodríguez. In this way we act as mediators
            between the government and scientific community.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="weinterviewedcitizens">
        <div className="text-white">
          <h3 className="h3">We interviewed citizens</h3>
          <p className="p">
            It is essential to know the opinion of the farmers since they are
            the main users of our project. Therefore, we seek to get closer to
            learn about their growing processes, concerns and needs. In this
            way, we were able to adapt our project for ease of use and
            accessibility. This is how we understood that it is extremely
            important for the scientific community to work together with
            farmers, since it means a benefit for both parties. On the one hand,
            scientific progress, and on the other, the improvement of production
            processes that will impact the economy of farming families (more
            information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="weinterviewedfarmers">
        <div className="text-white">
          <h3 className="h3">We interviewed farmers</h3>
          <p className="p">
            We decided to create a survey in which we asked 244 people how
            visible the problem of EDCs is in the environment. They were also
            asked about the quality of the water in their community and of their
            vegetable products, as well as their consumption habits, which
            helped us to corroborate that there is a lack of information
            regarding the relationship between the quality of water and
            agricultural products, since most of them consider that the products
            they consume are of good quality despite the regular quality of the
            water in their community (more information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="weseeked">
        <div className="text-white">
          <h3 className="h3">
            We seeked to create awareness and dissemination
          </h3>
          <p className="p">
            Along with our investigation, we realize that there is not enough
            attention to this rising problem. Hence, by using our social media,
            talks, seminars and educational material, we share scientific news,
            ways to reduce plastic waste and forms for the risk mitigation of
            EDCs entry into our body. (more information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="masterrosa">
        <div className="text-white">
          <h3 className="h3">
            We receive opinions from Master Rosa Wolpert, National Education
            Officer at UNESCO, on how to motivate the study of science
          </h3>
          <p className="p">
            Last september 13th we met with Master Wolpert to seek
            recommendations for our project to be included in the educational
            agenda. For which she told us about the activities carried out by
            UNESCO and that do not necessarily focus on the information content
            to be shared, rather they seek to improve access to educational
            information for the promotion of the continuing creation of new
            knowledge that ultimately will become human development. This gave
            us another format in which we can adapt our project to be accessible
            to the general public, but more than anything to inspire the study
            of STEAM subjects (more information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="opinionexperts">
        <div className="text-white">
          <h3 className="h3">
            With the opinion of the experts, we concluded that the
            quantification of EDCs has a high importance for the scientific
            advancement of this problem.
          </h3>
          <p className="p">
            Feedback from experts was very important for us to realize that it
            is not common to remove EDCs in water treatment plants, besides that
            the quantification methods are expensive, not so accessible or take
            too much time to be completed. Because of this we develop a
            biosensor that makes this process more efficient, reliable and
            economical. Moreover, it is the first step for the reduction of EDCs
            concentrations in the environment. This allows for this scientific
            advance to have a wide scope since it entails a set of reforms in
            the social, regulatory, environmental and public health fields.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="economicmodel">
        <div className="text-white">
          <h3 className="h3">
            We concluded through an economic model that if EDCs are degraded,
            the quality of vegetable products will increase and therefore, the
            economy of farmers as wel
          </h3>
          <p className="p">
            Human beings are unpredictable, so their reaction to technological
            development will also be unpredictable. However, its behavior can be
            estimated or approximated using statistical tools as long as the
            environment is well identified. Thanks to the approach with our
            agents of interest, to the research carried out and the CONEVAL
            poverty measurement calculation programs, we were able to determine
            that if the EDCs can be successfully degraded they will have an
            impact on the farming families’ economy, specifically, there is the
            possibility of reducing around 2% of farmers living in poverty (more
            information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="conservationlake">
        <div className="text-white">
          <h3 className="h3">
            We contributed to the conservation of a local lake
          </h3>
          <p className="p">
            In order to contribute with the solution of the problem in water
            bodies damaged by the waste from the cities. iGEM Tec CEM, in
            alliance with Planet Soldiers and the Civil Community from the
            Espejo de los Lirios lake park, we helped in the conservation of the
            fauna and flora of the place by corralling the habitat to prevent
            the transfer of garbage to the lake. The Civil Community mentioned
            the importance of this activity since large amounts of wastes from
            the urban area surrounding the lake (figure 1), ends up being
            deposited in it, causing losses in habitat and endemic species.
            During this conversation between stakeholders, it was mentioned that
            large amounts of microplastics have been found in the lake, and we
            in turn provide feedback on these particles as well as the endocrine
            disruptors that could be released from their degradation.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="edson">
        <div className="text-white">
          <h3 className="h3">
          Dr. Edson Estrada talked us about the presence of EDCs in the drain
          </h3>
          <p className="p">
          As part of our research, we searched the Mexican scientific literature for the different studies that had been carried out around the detection of EDCs. It was then that we came across the article by PhD. Edson Estrada entitled "Presence and treatment of endocrine disrupting compounds in wastewater from Mexico City using a submerged membrane bioreactor", whom we contacted and interviewed to learn more about his research and the topic.
          <br></br>
          He tells us that the most common EDCs found in wastewater are discarded drugs such as metformin and carbamazepine and also due to human excretions. In his work he manages to report the concentration of 30 to 400 ng / L of EDCs in treated water [10]. On the other hand, he also explains that endocrine disruptors do not volatilize, but rather remain on the surface of materials in an inactive form where it forms conjugates of sulfate and glucuronide conjugates, and this is also the way in which they are secreted. At the moment that the EDCs reach an organism, it returns to its active form and begins to execute all these failures in the system due to its disruptive function.
          <br></br>
          On the other hand, he told us that the removal of EDCs in treatment plants is common in terms of research development and new technologies of the National Water Commission (CONAGUA), but it is not common for plants to implement it because new technologies are still expensive and EDCs are not regulated.
          <br></br>
          Finally, PhD. Edson concluded with the importance of youth in solving an emerging problem, considering our project a comprehensive multidisciplinary proposal.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="experts">
        <div className="text-white">
          <h3 className="h3">
          We interviewed experts to learn about the effect of EDCs on prostate cancer
          </h3>
          <p className="p">
          A dynamic interview was held with doctoral candidate Sergio Alberto Cortez and his advisor Dr. Mauricio Rodríguez, who are evaluating the effect of exposure to low concentrations of bisphenols on prostate cancer cell lines. They found that the Bisphenol A and its analogs F and S have a transcriptional effect on the activation of the DNA damage repair mechanism and cell cycle regulation in LNCaP and PC-3 cell lines, as well as the presence of genotoxic damage.
          <br></br>
          Mainly in the conversation it was learned that EDCs are metabolized in the kidneys and discarded in the urine, however, there are small concentrations that remain inside the body causing different conditions at the cellular level. In the same way, they gave us support in the idea of ​​implementing our biosensor to detect EDCs in urine or some other biological matrix, such as the detection limits found between 0.2 to 0.5 nM for the bisphenol quantification, likewise, they proposed to us the idea of ​​making comparisons in the concentration of EDCs of people exposed to bodies of water with the concentration present in them.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="concludeddeveloping">
        <div className="text-white">
          <h3 className="h3">
          We conclude by developing a health model that there is a relationship between water quality and diseases associated with EDCs that affect the population
          </h3>
          <p className="p">
          After a deep inspection of the stakeholders, we decided to go beyond the objectives of Human Practices. Therefore, we chose to develop a model that could measure the impact of our project on society. One of the direct approaches that we identified was from health, for which we propose a statistical-mathematical model in which we include variables of production, water quality and health by municipality. Thanks to this analysis we were able to find a relationship between the variables in question, which indicates the marginal effects of bad water quality and agricultural production on health (more information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="oscar">
        <div className="text-white">
          <h3 className="h3">
          We received help from agronomist Oscar García for the construction of a rack to study the effect of EDCs on lettuce.
          </h3>
          <p className="p">
          In order to study the effect that EDCs have on agronomic products, we designed and built a rack to grow lettuce (more information) [link a degradación]. For this purpose, we received support from agronomist Oscar García Díaz, which consisted of a visit to his ranch where we learned the importance of soil improvement for cultivation through worm composting. In addition, he donated soil and compost to grow lettuce in the rack, and also taught us the basic requirements for growing lettuce, such as the amount of water they require. 
          </p>
        </div>
      </ModalGlass>
    </div>
  );
}
