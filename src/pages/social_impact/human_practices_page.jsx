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
          href=""
          coords="731,339,998,389"
          shape="rect"
        />
        <area
          target=""
          alt="We supported initiative"
          title="We supported initiative"
          href=""
          coords="1018,297,1304,380"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed citizens"
          title="We interviewed citizens"
          href=""
          coords="940,395,1159,431"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed farmers"
          title="We interviewed farmers"
          href=""
          coords="951,464,1155,509"
          shape="rect"
        />
        <area
          target=""
          alt="We seeked to create"
          title="We seeked to create"
          href=""
          coords="1181,482,1338,539"
          shape="rect"
        />
        <area
          target=""
          alt="Dr. Edson Estrada told"
          title="Dr. Edson Estrada told"
          href=""
          coords="97,467,393,526"
          shape="rect"
        />
        <area
          target=""
          alt="We contributed to conserv"
          title="We contributed to conserv"
          href=""
          coords="428,440,615,503"
          shape="rect"
        />
        <area
          target=""
          alt="Opinions from Master Rosa"
          title="Opinions from Master Rosa"
          href=""
          coords="721,522,1071,607"
          shape="rect"
        />
        <area
          target=""
          alt="We interviewed experts"
          title="We interviewed experts"
          href=""
          coords="406,602,620,667"
          shape="rect"
        />
        <area
          target=""
          alt="Concluded by developing"
          title="Concluded by developing"
          href=""
          coords="103,661,399,765"
          shape="rect"
        />
        <area
          target=""
          alt="With the opinion of experts"
          title="With the opinion of experts"
          href=""
          coords="1010,679,1336,787"
          shape="rect"
        />
        <area
          target=""
          alt="Recieved help from the"
          title="Recieved help from the"
          href=""
          coords="345,782,665,889"
          shape="rect"
        />
        <area
          target=""
          alt="Concluded through an "
          title="Concluded through an "
          href=""
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
    </div>
  );
}
