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
        style={{minWidth: 1400, maxWidth:1400, width:1400}}
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
            document.getElementById("opexperts").click();
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
          onClick={() => {
            document.getElementById("government").click();
          }}
          coords="219,2405,397,2447"
          shape="rect"
        />
        <area
          target=""
          alt="Farmer"
          title="Farmer"
          onClick={() => {
            document.getElementById("farmers").click();
          }}
          coords="260,2509,437,2553"
          shape="rect"
        />
        <area
          target=""
          alt="Mexican Society"
          title="Mexican Society"
          onClick={() => {
            document.getElementById("mexicansociety").click();
          }}
          coords="365,2593,531,2668"
          shape="rect"
        />
        <area
          target=""
          alt="Experts"
          title="Experts"
          onClick={() => {
            document.getElementById("experts").click();
          }}
          coords="591,2650,767,2694"
          shape="rect"
        />
        <area
          target=""
          alt="Tec professors"
          title="Tec professors"
          onClick={() => {
            document.getElementById("tecprofs").click();
          }}
          coords="815,2567,974,2641"
          shape="rect"
        />
        <area
          target=""
          alt="Team members"
          title="Team members"
          onClick={() => {
            document.getElementById("team").click();
          }}
          coords="1022,2422,1179,2496"
          shape="rect"
        />
        <area
          target=""
          alt="Instructors"
          title="Instructors"
          onClick={() => {
            document.getElementById("instructors").click();
          }}
          coords="1022,2552,1181,2599"
          shape="rect"
        />
      </map>

      <div
        className="human_practices_info max-w-4xl m-auto p-8 rounded-md text-white"
        style={{ backgroundColor: "rgba(215, 1, 99,.5)" }}
      >
        <h3 className="h3">Mexican society and our problem </h3>
        <p className="p">
          {" "}
          According to the obtained results of the survey, the range of ages is
          between 13 and 73 years old, where the mean is 31 years old, although
          the range with more frequency is from 13-23 years old, with 142
          responses. On the other hand, the educational level of this sample is
          made up mostly of people with a Bachelor’s degree (141 responses),
          followed by High School degree (69 responses), Postgraduate (30
          responses) and Middle School students (3 responses).
        </p>
        <p className="p">
          To find out how aware people are about the problem, they were asked a
          series of questions about general knowledge about plastics,
          microplastics and EDCs, from which it can be concluded that the
          majority of people had no previous knowledge. About the micro plastics
          and EDCs, 70.1% of the sample had no awareness about our ingestion of
          approximately 50,000 plastic particles per year. 64.2% of the
          participants have never heard about EDCs.
        </p>
        <p className="p">
          Talking about the consumption of fruits and vegetables habits, 63.8%
          consume these products 5 or more times per week and 67.1% of the
          participants buy in local markets, 32.1% in supermarkets and the rest
          grow what they consume. Even though most of the people consume fruits
          and vegetables with high frequency, most of them do not know from
          where the water with which their products are irrigated comes from,
          despite considering that the quality of these (in terms of sanitation)
          is good and that the water quality in their community is regular.{" "}
        </p>
        <p className="p">
          With this applied survey we could become acquainted, on a large scale,
          with how relevant is the problem around people that are not scientific
          or experts in the field. We can conclude that there is a lot of
          desinformation around EDCs and that despite the fact that this is a
          recent problem, there is a great probability that the effects on
          health will be increasingly severe, so it is important to start
          disseminating information to prevent this problem from becoming
          bigger.
        </p>
        <h3 className="h3">Presence of science in mexican agriculture</h3>
        <p className="p">
          On September 29, the National Corn and Milpa Day was celebrated, for
          which the Mexican government organized a Fair in the downtown of the
          country for which farmers and food processors from different regions
          (figure 3). We had the opportunity to attend to learn about the
          different types of crops around the country. During this event, we
          were able to get closer to more farmers who told us about their
          history, traditions and agricultural activities. In total, we
          approached 27 farmers who were surveyed about the type of crops they
          produce, the quality of their irrigation water, and the involvement of
          the scientific community in their activities.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/citizens-agronomists/agricultoresestados.png"
          alt="Gráfica Agricultores"
          className="figure"
        />
        <p className="p">
          Most of them have worked in the countryside all their lives, so their
          farming businesses are family-owned and passed down from generation to
          generation. Because they are small groups, most of them work in teams
          of 1 and 6 people. Each one of them has their farm activities as their
          main source of income, so they are merchants within their community
          but also consume from their own harvest, so 81.5% work with polycrops
          and 18.5% monocrops.
        </p>
        <p className="p">
          On the other hand, 96.3% (26 farmers) know where the water (figure 4)
          they use to observe their crops comes from, of which the majority
          obtain it thanks to the rain or water corps close to them. However,
          55.6% (15 farmers) do not frequently check the water with which they
          irrigate and those who have done so report that it is of poor quality.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/citizens-agronomists/sourceirrigationwater.png"
          alt="Gráfica Agrónomos"
          className="figure"
        />
        <p className="p">
          Finally, we wanted to know if the farmers are supported by scientists
          for any of their production processes or quality control,
          unfortunately 22 of them (81.5%) have not received technical or
          scientific advice, but they remain open to receiving trainings to
          improve their products, as long as their own processes and traditions
          are not forced to change radically or affect their resources.
        </p>
        <p className="p">
          Thanks to the approach we had with the Mexican farmers, we were able
          to improve the design, accessibility and interface of both the
          biosensor and the degradation system. In addition, we know that they
          must work together so that any technology that they want to implement
          in the land is adequate and does not harm the resources. On the other
          hand, the irrigation system they use must be taken into account,
          because despite the fact that in this survey the majority obtain their
          water from rain, many use other systems for non-seasonal crops.
        </p>
        <p className="p">
          All interviews and surveys were conducted with the consent of the
          participants. A Privacy Notice was made for all the people with whom
          we had contact and specifically for the interviews with experts and
          public servants, a Letter of Consent for the use of voice and image
          was shared with them based on the one already existing within the
          institution.
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/citizens-agronomists/hp-aviso.pdf"
          >
            To know the Privacy Notice click here
          </a>{" "}
          ,{" "}
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/citizens-agronomists/hp-carta.pdf"
          >
            to know the Letter of Consent click here.
          </a>
        </p>
        <h3 className="h3">Integrated Human Practices Models</h3>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/diagrammodelshp.png"
          alt="Diagrama HP"
          className="figure"
        />
        <h3 className="h3">ECONOMIC MODEL</h3>
        <h2 className="h2">WHY IS IMPORTANT?</h2>
        <p className="p">
          One of the main problems that affects Mexico’s people is poverty, in
          which almost half of the population lives. But what is more impressive
          is that most of the federal entities with the highest percentage of
          their population in poverty are from rural locations, in which the
          main economic activity is agriculture. The production of agricultural
          crops gives work to 5.5 million Mexicans [17], but also, those people
          represent around 21.6% of the poor people in the country [18].
        </p>
        <p className="p">
          Since the late 80’s, social programs focused in the agricultural
          development were implemented, some of these were Programa de Apoyos
          directos al Campo (PROCAMPO in 1994)and Alianza para el Campo (1996),
          that were executed with the objective of impulse the agricultural
          production inside and outside Mexico. According to Scott [19], the
          public expenditure (figure 6) that Mexico intended for rural
          development is one of the highest in Latin America, with around a
          share of 4% of the Gross Domestic Product (GDP). Even now, most of the
          budget for social programs target the impulse of the agricultural
          industry. Most of the programs for 2022 are under the administration
          of the secretaries of Welfare (BIENESTAR), Agricultural and Rural
          Development (SADER), Territorial and Urban Agrarian Development
          (SEDATU), and Environment and Natural Resources (SEMARNAT). The graph
          below represents the distribution of the public budget according to
          each secretary (quantities expressed in millions of Mexican pesos).
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/presupuestoprogramas-ihp.png"
          alt="Gráfiga Presupuesto"
          className="figure"
        />
        <p className="p">
          However, the form of implementation and distribution of resources were
          not always the best since these programs launched in the 90’s, were
          acting in a regressive way rather than a progressive. In other words,
          even when social programs were targeted to the poor rural population,
          just the most rich were the ones that really received the economic
          benefits. In the same way, some academics agree with the cyclical
          behavior of public spending in agriculture, which is defined by
          periods of recession in the Mexican economy where the monetary flows
          were bigger [20]. Also, there have been other types of policies that
          consisted of subsidies to agricultural products consumption, this
          benefits the consumer but damages the producers because it is supposed
          to increase productivity (not necessarily an equality policy), but not
          all producers own the same amount of production factors that can
          sustain a rise in supply. Those types of policies translate into a
          non-efficient form for production and by consequent, non-distributive
          policy. This drives into the conclusion that, in addition to the
          poorly managed programs, their support was not constant and with the
          right implementation of equality policies [20], [21] and [22].
        </p>
        <h3 className="h3">OUR ESTIMATION IN MEXICAN POVERTY</h3>
        <p className="p">
          It is necessary to come up with different forms for poverty reduction.
          It is not enough with monetary stimuli, development also comes with
          technology and synthetic biology is an opportunity to explore and
          bring into society. But it is also important to involve as many
          stakeholders as possible for the sake of indicators that will tell us
          if the technology is adequate for the social context, and vice versa.
          This is why we had developed a simulator, taking the CONEVAL’s
          (National Council for the Evaluation of Social Development Policy)
          algorithm for poverty measure, that calculates the impact in poverty
          and extreme poverty by income of farmers if HydroDefense is used as a
          complementation of any of the social programs now running.{" "}
        </p>
        <p className="p">
          First of all we need to understand the concept of poverty in Mexico.
          By law, poverty has to meet certain specifications to consider a
          person poor (figure 7), the institution commissioned to this task is
          the CONEVAL. In the economic dimension, we can find two limits: the
          poverty income line, and the extreme poverty income line (figure 8).
          In recap, a person is considered poor when suffers one or more social
          deprivations and their income is not sufficient for covering their
          food and non-food needs. While, a person that is extremely poor is the
          one that suffers three or more social deprivations and their income is
          not sufficient to cover their food needs [23].
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/dimensionespobreza-1.png"
          alt="Imagen HP"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/lineaspobreza1.png"
          alt="Lineas pobreza"
          className="figure"
        />
        <p className="p">
          For this specific simulation, as we are only modifying the farmers
          income (figure 9), our points of references will be the lines of
          poverty by income. So, there are in total four lines, which for the
          unit of measurement is the income per month. In rural areas, in 2020
          (the year of exercise), were of $2,520.16 (117.23 USD) for poverty and
          $1,299.30 (60.44 USD) for extreme poverty; and in the urban areas were
          $3,559.88 (165.59 USD) for poverty and $1,702.28 (79.19 USD) for
          extreme poverty [24].
        </p>
        <p className="p">
          In the graphs below you can find some of the descriptive statistics to
          understand better the social context we are focusing on.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/averageincome-ihp.png"
          alt="Ingresos promedio"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/percentagepov-ihp.png"
          alt="Porcentaje"
          className="figure"
        />
        <p className="p">
          For this exercise we used the algorithm for poverty measure in 2020 as
          it is one of the best methodologies for multidimensional poverty.
          Since the algorithm uses several national surveys to collect all the
          needed information, but the final information that produces does not
          properly discriminate by type of economic activity, we rescue from the
          National Occupational Classification System (SINCO) all the people
          that have as principal source of income the agricultural activities.
          Once we had all the agronomists identified, we made the assumption
          that after EDCs are degraded, the conditions for crops to be
          cultivated should be as favorable for production to increase, this way
          the earnings per sale will increase. In order to reflect this effect
          on agronomists, we took their income and raised it by 15-20% which is
          the range we estimated after a deep investigation of the effects of
          EDCs in agricultural crops and the food industry market prices [25].
        </p>
        <p className="p">
          Noteworthy, that the algorithm is written to be used in the STATA
          software, the modified algorithm for Windows can be found{" "}
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/igem-economicmodel-windows.pdf"
          >
            here
          </a>
          , for Mac click{" "}
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/igem-economicmodel-mac.pdf"
          >
            here
          </a>
          . As the algorithm collects data from different databases, in order to
          use the algorithm it is necessary to download the calculation programs
          and databases (Programas de cálculo y bases de datos) from the CONEVAL
          website that can be found{" "}
          <a
            className="underline text-blue-300"
            href="https://www.coneval.org.mx/Medicion/MP/Paginas/Programas_BD_2016-2020.aspx"
          >
            here
          </a>
          . Also, for the algorithm to work in any computer it is necessary to
          copy the routes where the archives were downloaded and paste them in
          the lines 28-36, like the example below (figure 11)
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/instruccionesstata.png"
          alt="Instrucciones"
          className="figure"
        />
        <h2 className="h2">WHICH IS THE IMPACT?</h2>
        <p className="p">
          After running the modified algorithm with the increase of income, we
          found that the percentage of agronomists that live in poverty and
          extreme poverty situations decreases by around 1.43% - 2.21% and 1.5%
          - 2.42%, respectively. With the obtained results we can say that if
          every agricultural worker is a beneficiary of the degradation system
          that we are proposing, and that their income increases between 15% and
          20% they will have better chances to get out of poverty or extreme
          poverty by income, according to the case. If we go further with the
          inference, according to economic theory, that “extra” income they are
          receiving can be used to cover part of their social deprivations, then
          get a better life quality and move to the area of the population that
          is not vulnerable by income or social deprivations.
        </p>
        <p className="p">
          The graph below shows how this technology affects the agronomist’s
          poverty situation.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/resultseconomicmodel.png"
          alt="Resultados"
          className="figure"
        />
        <h3 className="h3">HEALTH MODEL</h3>
        <h2 className="h2">WHY IS IMPORTANT?</h2>
        <p className="p">
          The most concerning approach about the effects of EDCs is that most of
          them end in our organisms. Recent research has demonstrated that
          thanks to the plastic production that turns into wastes in water corps
          presents these dangerous components for health. Some of the diseases
          related to the consumption of EDCs, especifically BPA (bisphenol A,
          which is the compound we are focusing on), are: diabetes, obesity,
          dyslipidemia, hypertension and metabolic syndrome. Hence, it is
          natural to study the factors, besides EDCs concentrations influence
          the number of people associated with these diseases.
        </p>
        <p className="p">
          On the other hand, in Mexico diabetes is the third cause of death
          [26], one in four people live with hypertension [27] and around 75%
          have obesity [28]. These diseases generate a higher risk when another
          type of sickness attacks the body and are correlated with dyslipidemia
          and metabolic syndrome [29]. Since the 2000’s, academics and the
          government had established diabetes, obesity and hypertension as a
          public responsibility, applied many conscientization campaigns and
          regulation in the alimentation industry to reduce the number of cases.
          Although there are no concrete actions focused on the problems that
          EDCs cause in human’s health, there are some initiatives from citizens
          and legislators to call the higher authorities to inquire about this
          as a public health and environmental problem [30]. The maps below
          illustrates the distribution of the Mexican population with obesity,
          hypertension and diabetes by municipality.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/obesity-ihp.png"
          alt="Obesidad"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hypertension-ihp.png"
          alt="Hipertensión"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/diabetes-ihp.png"
          alt="Diabetes"
          className="figure"
        />
        <p className="p">
          Also, authorities should pay attention to the reforms made in other
          parts of the world (figure 16) since it is not only a national
          problem. For example, in May, 2017, the European Union released a set
          of scientific criteria in the market and use of biocidal products in
          order to reduce the production and consumption of endocrine
          disruptors. This regulation entered into force on June 7, 2018 and for
          within seven years after this date, the European Council must present
          to the “Biocides CA meeting” (the group of experts) a report of the
          results derived from the implementation of the scientific criteria for
          the determination of endocrine-disrupting properties [31].{" "}
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/worldpolicies.png"
          alt="Políticas mundiales"
          className="figure"
        />
        <p className="p">
          It is crucial for the creation of public reforms to have backup
          research, which is very hard to find at a macro level, and even more
          so when it is a relatively new public health problem. As a lack of
          investigation of population health and the EDCs factor in it, we
          decided to use the information we had aviable and create a model that
          describes the effects of agricultural crops and water quality in
          society's health. With the obtained results we can estimate the
          magnitude of the effects at the moment, but having in mind that the
          model just considers a point in time and if we do not take action now,
          the marginal effects will increase.
        </p>
        <h3 className="h3">HOW WE ESTIMATED?</h3>
        <p className="p">
          First it is important to determine the variables, the base year and
          unit of measurement. The database we used for this model were a
          compilation of other public databases, which were developed by some
          government agencies such as the National Institute of Statistic and
          Geography (INEGI), the National Water Commission (CONAGUA), the
          National Council for the Evaluation of Social Development Policy
          (CONEVAL) and the Health Secretary. For the information collected from
          INEGI we use the Economic Census and the National Agricultural Survey.
          The base year is 2017 and the unit of measurement is by
          municipalities, both delimitations were determined because that is
          where all our databases coincide. The final database can be found{" "}
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/healthmodel-ihp-igemteccem.csv"
          >
            here.
          </a>
        </p>
        <p className="p">
          After collecting the necessary data, we had to establish the variables
          that we should use (figure 17). According to the main investigation in
          which the whole project is based, we are trying to model the behavior
          of population’s health caused by contaminated water and agricultural
          crops.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/variables1.png"
          alt="Variables"
          className="figure"
        />
        <p className="p">
          The water quality is determined by CONAGUA under certain criteria:
          value of fecal coliforms, biochemical oxygen demand, chemical oxygen
          demand, e-coli, fecal enterococci per hundred milliliters; dissolved
          oxygen saturation percentage, total suspended solids; and daphnia
          magna toxicity (48 hours) and vibrio fisheri (15 minutes).
        </p>
        <p className="p">
          Also it is important to mention that the database we use considers a
          sample of 414 of municipalities that produce agricultural crops and
          represents around one third of the total. The reason why our
          observations were reduced is because there was a lot of data with any
          value assigned, so the final database is the result after applying the
          data mining. The maps below illustrates the distribution of the chosen
          variables in the country.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/agricultureproduction.png"
          alt="Mapa Agricultura"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/povertypercentage.png"
          alt="Mapa pobreza"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/epovertypercentage.png"
          alt="Mapa extrema"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/waterquality.png"
          alt="Mapa agua"
          className="figure"
        />
        <p className="p">
          Now that we have described the variables we used, the next step is to
          create the model. For this task we use econometric methods as it is
          the best way to study social factors. For this specific data, and the
          nature of it, we decided that the best methodology is Ordinary Least
          Squares (OLS). The calculation of the model was made with the RStudio
          software, but the mathematical representation for the estimators are a
          minimization of the addition of the of the square of residuals:
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec1.png"
          alt="Ecuación 1"
          className="figure"
        />
        <p className="p">
          Where û_i is the vector of estimated residuals with a dimension nx1,
          y_i is the vector of dependent observations, X_i the vector of
          independent observations and B the coefficients. If we made the
          minimization we get:{" "}
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec2y3.png"
          alt="Ecuación 2 y 3"
          className="figure"
        />
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec3y4.png"
          alt="Ecuación 4 y 5"
          className="figure"
        />
        <p className="p">Then, the OLS estimator has the form of:</p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec6y7.png"
          alt="Ecuación 6 y 7"
          className="figure"
        />
        <p className="p">
          Now that we have explained the method, we can specify the models,
          which takes the next form:
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec8y9.png"
          alt="Ecuación 8 y 9"
          className="figure"
        />
        <p className="p">
          Where Dis_i is the number of people in treatment of any of the
          diseases (previously mentioned), PAgr_i is the agricultural
          production, Pov_i is the number of people living in poverty, EPov_i
          the number of people living in extreme poverty, Prod_i is the
          productivity index, WQ_j,i are the dummy variables for water quality,
          B_i represent the estimators (marginal effects) or, if is it the case,
          the intercept, and d_i the coefficients for the dummy variables. Take
          into account that the variables Dis_i, PAgr_i, Pov_i and EPov_i have
          the natural logarithmic transformation because we are working with
          very large numbers and this operation will reduce the range of the
          variables so the extreme values do not affect our model. Note that
          even if we have three categories for water quality, we only can add
          two of them in the model, first because one of the values is 0 so the
          whole term will turn into 0; and second because if we consider all
          three categories at the same time, we will produce an endogeneity
          problem and our estimators will be biased. In other words, the
          endogeneity problem means that the covariance between the independent
          variables and the residuals is different from 0, so we can have
          confidence in the results.{" "}
        </p>
        <p className="p">
          Also it is important to know why we add the variables of control
          (productivity index and poverty). For econometric models it has more
          relevance that it considers other variables apart from the main ones
          because in that way we can extract from the residuals those variables
          that are strongly attached to the dependent variable (People with a
          disease). This process translates into a more robust and specific
          model in which we can be more precise about the effects of water
          quality and agricultural production in mexican´s health.
        </p>
        <h3 className="h3">WHICH IS THE IMPACT?</h3>
        <p className="p">
          As mentioned previously, the model was run in the software RStudio,
          the script can be found{" "}
          <a
            className="underline text-blue-300"
            href="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/modelo-salud-igem.pdf"
          >
            here.
          </a>
          The results are presented in the tables below, but as a first insight
          almost all of the coefficients of our variables are statistically
          significant with a 95% confidence.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/tabhp.png"
          alt="Tabla 1"
          className="figure"
        />
        <p className="p">
          For this model, we found that if the agricultural production rises by
          1%, the number of people with a disease increase by 0.052%, the same
          case if levels of poverty increases but with a positive effect in
          diseases of 0.69%, but if the productivity rises by 1 point, the
          number of people with a disease will decrease in 0.2%, this may be
          because if the municipality is more productive, it generates more
          income that can be used to provide more health services. For the
          variables of water quality, we can conclude that if the municipality
          has regular or good water quality the effect over people with a
          disease is between 0.19% - 0.23% less than if the municipality has a
          bad water quality. The r-squared is of 0.42 which means that our
          independent variables explain around the 42% of the variance of the
          dependent variable, which is a good level considering we are just
          taking a point in time and that is a social phenomena.
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/tabhp2.png"
          alt="Tabla 2"
          className="figure"
        />
        <p className="p">
          In this case, the coefficients have a greater level of significance
          than the antecedent model but with smaller marginal effects. Here the
          effect of an increase of 1% in agricultural production is an increment
          of 0.03% in the number of people with a disease, but for the extreme
          poverty variable is 0.43%. In the case of the production index, the
          effect over people’s insalubrity is a reduction of 2%. For the water
          quality, we found that if the municipality has regular or good water
          quality the effect over people with a disease is between 0.31% - 0.35%
          less than if the municipality has a bad water quality.{" "}
        </p>
        <p className="p">
          So, the final equations that describe this two situations are:
        </p>
        <img
          src="https://static.igem.wiki/teams/4260/wiki/integrated-hp-images/hpnew/ec10y11.png"
          alt="Ecuación 10 y 11"
          className="figure"
        />
        <p className="p">
          As demonstrated, agricultural production and the water quality are
          related with the Mexican people’s health and at least it cannot be
          attributed to some factor of lack of production or levels of poverty
          since those factors have been controlled by including them in the
          model. Even if the marginal effects are not in a large number, there
          exist indicators that say that there is a problem in the way the
          alimentation industry is producing. But we should not stay with just
          this general diagnosis, this model is one of the first steps for the
          identification of EDCs in public health. We need more robust
          information so we can talk about causality. Authorities must now start
          taking EDCs concentrations measurement in water corps, not only for
          scientific study, but also for the security and sanitation of their
          population. Although probably the results in health take time to be
          visible, it is important to act now to avoid an increase in demand for
          health and in consequence a saturation in medical services. A healthy
          society produces wellness and development to a nation.
        </p>
        <h3 className="h3">References</h3>
        <p className="reference">
          [1] Kelly, M., Connolly, L. & Dean, M. (2020, 23 octubre). Public
          Awareness and Risk Perceptions of Endocrine Disrupting Chemicals: A
          Qualitative Study. International Journal of Environmental Research and
          Public Health, 17(21), 7778. https://doi.org/10.3390/ijerph17217778
        </p>
        <p className="reference">
          [2]INEGI. (2014). Cantidad de puntos de descarga de aguas residuales
          municipales sin tratamiento (Número), Estados Unidos Mexicanos
          [Database]. Banco de Indicadores. From
          https://www.inegi.org.mx/app/indicadores/?t=265&ag=00#D265#D6200093527
        </p>
        <p className="reference">
          [3]Gustavo Ronderos-Lara, J., Saldarriaga-Noreña, H., Guillermo
          Reyes-Romero, P., Alberto Chávez-Almazán, L., Vergara-Sánchez, J.,
          Alfonso Murillo-Tovar, M. & Torres-Segundo, C. (2021, 27 mayo).
          Emerging Compounds in Mexico: Challenges for Their Identification and
          Elimination in Wastewater. Emerging Contaminants.
          https://doi.org/10.5772/intechopen.93909
        </p>
        <p className="reference">
          [4]INEGI. (2017). Superficie cultivada a cielo abierto y producción de
          cultivos anuales y perennes según disponibilidad del agua por cultivo
          con representatividad en la muestra [Database]. Encuesta Nacional
          Agropecuaria. From
          https://www.inegi.org.mx/programas/ena/2017/#Tabulados
        </p>
        <p className="reference">
          [5]INEGI. (2017).Porcentaje de unidades de producción con superficie
          agrícola de riego por tipo de agua utilizada [Database]. Encuesta
          Nacional Agropecuaria. From
          https://www.inegi.org.mx/programas/ena/2017/#Tabulados
        </p>
        <p className="reference">
          [6]INEGI. (2019).Porcentaje de unidades de producción con superficie
          de riego por tipo de agua utilizada [Database]. Encuesta Nacional
          Agropecuaria. From
          https://www.inegi.org.mx/programas/ena/2019/#Tabulados
        </p>
        <p className="reference">
          [7]INEGI. (2018). Agua. Cuéntame de México. INEGI. From:
          https://cuentame.inegi.org.mx/territorio/agua/usos.aspx?tema=T
          https://www.imta.gob.mx/biblioteca/libros_html/riego-drenaje/reuso-aguas-residuales.pdf
        </p>
        <p className="reference">
          [8]Nacel Arcoiris 13:20:33 (s.f). PRESA LIBRE Regenerando el
          ecosistema de Presa Madin. From
          https://nacelarcoiris.org/proyectos/rescate-presa-madin/
        </p>
        <p className="reference">
          [9] García, E. M. (2019). El agua residual como generadora del espacio
          de la actividad agrícola en el Valle del Mezquital, Hidalgo, México.
          Revista de Alimentación Contemporánea y Desarrollo Regional, 29(54).
          https://doi.org/10.24836/es.v29i54.741
        </p>
        <p className="reference">
          [10] Estrada, E. B.-, Mantilla, G., Mijaylova, P., Ramírez, N.,
          Moeller, G. & Sánchez, M. (2013). Presencia y tratamiento de
          compuestos disruptores endócrinos en aguas residuales de la Ciudad de
          México empleando un biorreactor con membranas sumergidas. Ingeniería
          Investigación y Tecnología, 14(2).
          https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-77432013000200011
        </p>
        <p className="reference">
          [11] Ley General de la Salud (7 de febrero de 1984)
          https://www.diputados.gob.mx/LeyesBiblio/pdf/LGS.pdf
        </p>
        <p className="reference">
          [12] INICIATIVA QUE ADICIONA EL ARTÍCULO 269 DE LA LEY GENERAL DE
          SALUD, SUSCRITA POR LAS DIPUTADAS JULIETA MACÍAS RÁBAGO E IRMA JUAN
          CARLOS, DE LOS GRUPOS PARLAMENTARIOS DE MOVIMIENTO CIUDADANO Y MORENA
          (27 de febrero de 2020)
          http://sil.gobernacion.gob.mx/Archivos/Documentos/2020/02/asun_4009153_20200227_1582832039.pdf
        </p>
        <p className="reference">
          [13] INICIATIVA QUE REFORMA LOS ARTÍCULOS 269 Y 421 BIS DE LA LEY
          GENERAL DE SALUD, SUSCRITA POR EL DIPUTADO RAÚL GRACIA GUZMÁN E
          INTEGRANTES DEL GRUPO PARLAMENTARIO DEL PAN (15 de octubre de
          2019)http://sil.gobernacion.gob.mx/Archivos/Documentos/2019/10/asun_3936778_20191015_1571170363.pdf
        </p>
        <p className="reference">
          [14] CON PUNTO DE ACUERDO, POR EL QUE SE EXHORTA A LA COMISIÓN FEDERAL
          PARA LA PROTECCIÓN CONTRA RIESGOS SANITARIOS A REGULAR EL USO DE
          PLÁSTICOS Y SUS DERIVADOS EN ENVASES DE ALIMENTOS Y A LA SECRETARÍA DE
          SALUD A REALIZAR CAMPAÑAS DE CONCIENTIZACIÓN DE LA POBLACIÓN SOBRE LOS
          RIESGOS SANITARIOS DE ESTAS SUSTANCIAS, A CARGO DE LA DIPUTADA SYLVANA
          BELTRONES SÁNCHEZ, DEL GRUPO PARLAMENTARIO DEL PRI Y DEL DIPUTADO
          JESÚS SESMA SUÁREZ, INTEGRANTE DEL GRUPO PARLAMENTARIO DEL PARTIDO
          VERDE ECOLOGISTA DE MÉXICO (9 de mayo de 2017)
          https://www.senado.gob.mx/64/gaceta_del_senado/documento/71742
        </p>
        <p className="reference">
          [15] Diario Oficial de la Federación. (2012). Salud ambiental-Indices
          biológicos de exposición para el personal ocupacionalmente expuesto a
          sustancias químicas. ( NOM-047-SSA1-2011). From
          https://www.dof.gob.mx/nota_detalle.php?codigo=5249877&fecha=06/06/2012#gsc.tab=0
        </p>
        <p className="reference">
          [16] González, O. (2018). Día Nacional del Maíz en México.
          Cndh.org.mx. Recuperado el 5 de octubre de 2022, de
          https://www.cndh.org.mx/noticia/dia-nacional-del-maiz-en-mexico-0.
        </p>
        <p className="reference">
          [17] Soto, J. (2020). Dar valor a las y los agricultores, también es
          actuar por México. Greenpeace México. Retrieved 10 September 2022,
          from
          https://www.greenpeace.org/mexico/blog/9122/dar-valor-a-las-y-los-agricultores-tambien-es-actuar-por-mexico/.
        </p>
        <p className="reference">
          [18] CONEVAL. (2020). Medición de pobreza 2016-2020. Coneval.org.mx.
          Recuperado el 6 de septiembre de 2022, de
          https://www.coneval.org.mx/Medicion/MP/Paginas/Pobreza_2020.aspx.
        </p>
        <p className="reference">
          [19] Scott, J. (2007). Agricultural policy and rural: poverty in
          Mexico. Mexico: Centro de Investigación y Docencia Económicas,
          División de Economía. Recuperado de http://hdl.handle.net/11651/1152
        </p>
        <p className="reference">
          [20] Merino Huerta, M. (2009). Los programas de subsidios al campo:
          las razones y las sinrazones de una política mal diseñada. Mexico:
          Centro de Investigación y Docencia Económicas, División de
          Administración Pública. Recuperado de http://hdl.handle.net/11651/777
        </p>
        <p className="reference">
          [21] Scott, J. (2009). The incidence of agricultural subsidies in
          Mexico. Mexico: Centro de Investigación y Docencia Económicas,
          División de Economía. Recuperado de http://hdl.handle.net/11651/1249
        </p>
        <p className="reference">
          [22] Barquera, S., Rivera-Dommarco, J., & Gasca-García, A. (2001).
          Políticas y programas de alimentación y nutrición en México. Salud
          pública de México, 43(5), 464-477.
        </p>
        <p className="reference">
          [23] CONEVAL. Glosario. Coneval.org.mx. Recuperado el 7 de septiembre
          de 2022, de https://www.coneval.org.mx/Medicion/Paginas/Glosario.aspx
        </p>
        <p className="reference">
          [24] CONEVAL. (2022). Líneas de pobreza por ingresos - InfoPobreza.
          Sistemas.coneval.org.mx. Recuperado el 6 de septiembre de 2022, de
          http://sistemas.coneval.org.mx/InfoPobreza/Pages/wfrLineaBienestar?pAnioInicio=2016&pTipoIndicador=0.
        </p>
        <p className="reference">
          [25] Trujillo Murillo, Juan, Hernández Ortiz, Juan, & Martínez Damián,
          Miguel Ángel. (2019). Disposición a pagar por productos orgánicos en
          Texcoco, Estado de México. Revista mexicana de ciencias agrícolas,
          10(7), 1685-1691. Epub December 4,
          2020.https://doi.org/10.29312/remexca.v10i7.926
        </p>
        <p className="reference">
          [26] Gobierno de México. (2021). Diabetes en México. gob.mx.
          Recuperado el 11 de septiembre de 2022, de
          https://www.gob.mx/promosalud/acciones-y-programas/diabetes-en-mexico-284509.
        </p>
        <p className="reference">
          [27] Secretaría de Salud. (2022). En México, más de 30 millones de
          personas padecen hipertensión arterial: Secretaría de Salud. gob.mx.
          Recuperado el 11 de septiembre de 2022, de
          https://www.gob.mx/salud/articulos/en-mexico-mas-de-30-millones-de-personas-padecen-hipertension-arterial-secretaria-de-salud.
        </p>
        <p className="reference">
          [28] INEGI. (2020). Nota metodológica: Prevalencia de Obesidad,
          Hipertensión y Diabetes para los Municipios de México 2018 (pp.
          39-46). Mexico: INEGI. De,
          https://www.inegi.org.mx/contenidos/investigacion/pohd/2018/doc/a_peq_2018_nota_met.pdf
        </p>
        <p className="reference">
          [29] Universidad Autónoma Metropolitana. (2015). El síndrome
          metabólico, un problema de salud pública tan grave como el cambio
          climático. De,
          https://www.comunicacionsocial.uam.mx/boletinesuam/050-15.html
        </p>
        <p className="reference">
          [30] Senado de la República. (2017). Gaceta del Senado. De,
          https://www.senado.gob.mx/64/gaceta_del_senado/documento/71742
        </p>
        <p className="reference">
          [31] European Parliament and Council. (2017). Commission Delegated
          Regulation (EU) 2017/2100. Brussels: Official Journal of the European
          Union. De, https://eur-lex.europa.eu/eli/reg_del/2017/2100/oj
        </p>
        <h3 className="h3">Data Bases</h3>
        <p className="reference">
          CONEVAL. (2020). Bases de datos y programas de cálculo 2020
          [Database]. Medición de la Pobreza.
          https://www.coneval.org.mx/Medicion/MP/Paginas/Programas_BD_2016-2020.aspx{" "}
        </p>
        <p className="reference">
          {" "}
          INEGI. (2019). Sistema Nacional de Clasificación de Ocupaciones, 2019
          SINCO (pp. 243-263). Mexico: INEGI. From
          https://www.snieg.mx/DocumentacionPortal/Normatividad/vigente/sinco_2019.pdf
        </p>
        <p className="reference">
          CONAGUA. (2020). Calidad del Agua Superficial 2012-2020 [Database].
          Calidad del agua en México. De,
          https://www.gob.mx/conagua/articulos/calidad-del-agua
        </p>
        <p className="reference">
          CONEVAL. (2020). Concentrado indicadores de pobreza 2020 [Database].
          Pobreza a nivel municipio 2010-2020. De,
          https://www.coneval.org.mx/Medicion/Paginas/Pobreza-municipio-2010-2020.aspx
        </p>
        <p className="reference">
          {" "}
          INEGI. (2017). Producción de agricultura protegida según producción
          vendida y comprador o destinatario por entidad federativa, municipio y
          cultivo principal [Database]. Encuesta Nacional Agropecuaria. De,
          https://www.inegi.org.mx/programas/ena/2017/#Tabulados
        </p>
        <p className="reference">
          INEGI. (2019). Sistema Automatizado de Información Censal (SAIC)
          [Database]. Censos económicos 2019. De,
          https://www.inegi.org.mx/programas/ce/2019/#Tabulados
        </p>
        <p className="reference">
          Secretaría de Salud. (2018). Enfermedades crónicas no transmisibles en
          el adulto y en el anciano 2010-2018 [Database]. Servicios Otorgados.
          De,
          http://www.dgis.salud.gob.mx/contenidos/basesdedatos/da_sis_gobmx.html
        </p>
        <p className="reference">
          Wee, S., & Aris, A. (2019). Occurrence and public-perceived risk of
          endocrine disrupting compounds in drinking water. Npj Clean Water,
          2(1). https://doi.org/10.1038/s41545-018-0029-3
        </p>
      </div>
      
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
            As part of our research, we searched the Mexican scientific
            literature for the different studies that had been carried out
            around the detection of EDCs. It was then that we came across the
            article by PhD. Edson Estrada entitled "Presence and treatment of
            endocrine disrupting compounds in wastewater from Mexico City using
            a submerged membrane bioreactor", whom we contacted and interviewed
            to learn more about his research and the topic.
            <br></br>
            He tells us that the most common EDCs found in wastewater are
            discarded drugs such as metformin and carbamazepine and also due to
            human excretions. In his work he manages to report the concentration
            of 30 to 400 ng / L of EDCs in treated water [10]. On the other
            hand, he also explains that endocrine disruptors do not volatilize,
            but rather remain on the surface of materials in an inactive form
            where it forms conjugates of sulfate and glucuronide conjugates, and
            this is also the way in which they are secreted. At the moment that
            the EDCs reach an organism, it returns to its active form and begins
            to execute all these failures in the system due to its disruptive
            function.
            <br></br>
            On the other hand, he told us that the removal of EDCs in treatment
            plants is common in terms of research development and new
            technologies of the National Water Commission (CONAGUA), but it is
            not common for plants to implement it because new technologies are
            still expensive and EDCs are not regulated.
            <br></br>
            Finally, PhD. Edson concluded with the importance of youth in
            solving an emerging problem, considering our project a comprehensive
            multidisciplinary proposal.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="opexperts">
        <div className="text-white">
          <h3 className="h3">
            We interviewed experts to learn about the effect of EDCs on prostate
            cancer
          </h3>
          <p className="p">
            A dynamic interview was held with doctoral candidate Sergio Alberto
            Cortez and his advisor Dr. Mauricio Rodríguez, who are evaluating
            the effect of exposure to low concentrations of bisphenols on
            prostate cancer cell lines. They found that the Bisphenol A and its
            analogs F and S have a transcriptional effect on the activation of
            the DNA damage repair mechanism and cell cycle regulation in LNCaP
            and PC-3 cell lines, as well as the presence of genotoxic damage.
            <br></br>
            Mainly in the conversation it was learned that EDCs are metabolized
            in the kidneys and discarded in the urine, however, there are small
            concentrations that remain inside the body causing different
            conditions at the cellular level. In the same way, they gave us
            support in the idea of ​​implementing our biosensor to detect EDCs
            in urine or some other biological matrix, such as the detection
            limits found between 0.2 to 0.5 nM for the bisphenol quantification,
            likewise, they proposed to us the idea of ​​making comparisons in
            the concentration of EDCs of people exposed to bodies of water with
            the concentration present in them.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="concludeddeveloping">
        <div className="text-white">
          <h3 className="h3">
            We conclude by developing a health model that there is a
            relationship between water quality and diseases associated with EDCs
            that affect the population
          </h3>
          <p className="p">
            After a deep inspection of the stakeholders, we decided to go beyond
            the objectives of Human Practices. Therefore, we chose to develop a
            model that could measure the impact of our project on society. One
            of the direct approaches that we identified was from health, for
            which we propose a statistical-mathematical model in which we
            include variables of production, water quality and health by
            municipality. Thanks to this analysis we were able to find a
            relationship between the variables in question, which indicates the
            marginal effects of bad water quality and agricultural production on
            health (more information).
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="oscar">
        <div className="text-white">
          <h3 className="h3">
            We received help from agronomist Oscar García for the construction
            of a rack to study the effect of EDCs on lettuce.
          </h3>
          <p className="p">
            In order to study the effect that EDCs have on agronomic products,
            we designed and built a rack to grow lettuce (more information)
            [link a degradación]. For this purpose, we received support from
            agronomist Oscar García Díaz, which consisted of a visit to his
            ranch where we learned the importance of soil improvement for
            cultivation through worm composting. In addition, he donated soil
            and compost to grow lettuce in the rack, and also taught us the
            basic requirements for growing lettuce, such as the amount of water
            they require.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="government">
        <div className="text-white">
          <h3 className="h3">Government</h3>
          <p className="p">
            Nowadays there is no regulatory framework in relation to EDCs nither
            established protocols to periodically monitor these compounds in the
            water. However, there are actors in this sector who are continuously
            getting involved with the problem, beginning to make proposals for
            laws and initiatives on microplastics since the term EDCs is
            generally unknown. Therefore, work is currently being carried out,
            in conjunction with public officials, so that a law initiative
            regarding these compounds is approved and comes into force soon.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="farmers">
        <div className="text-white">
          <h3 className="h3">Farmers</h3>
          <p className="p">
            Mexican farmers are our main agents since they are the source of
            alimentation production. In Mexico, 40% of corn consumption comes
            from small farmers, in addition to being one of the main sources of
            income for many Mexican families [16]. Since our entire project
            revolves around farmers, their perspective is essential. Approaching
            them helped us to improve the interaction between the biosensor and
            the degradation system to make its use and implementation as simple
            as possible. In addition, we were able to find out what their main
            concerns are and if our project would really be useful to them. The
            first contact with this sector of the population was through a visit
            to the ranch of Agricultural Engineer Oscar García, located in
            Tepeji del Río, Hidalgo. Where we learned about the activities that
            he carries out on a daily basis. While another way of contact was
            via surveys with the different farmers with whom they had been
            contacted throughout the year.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="mexicansociety">
        <div className="text-white">
          <h3 className="h3">Mexican Society</h3>
          <p className="p">
            Mexican citizens are an important part of the beneficiaries of our
            project because they are the ones that consume agricultural
            products, but these are one of the many forms in which EDCs are
            transmitted. Therefore it is important to know the context in which
            the people live, if they are concerned with the problematic and the
            main sources of EDCs. So, in order to learn roughly the citizens, we
            made a survey conducted on 244 people in which they were asked about
            their general data (age and educational level), general knowledge
            about microplastics, EDCs, water quality in their community, and
            consumption habits of fruits and vegetables.
            <br></br>
            This exercise helped us to know the perspective of some citizens and
            in this way to know what type of information and precautions are
            necessary for them to be actively involved in the problem.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="experts">
        <div className="text-white">
          <h3 className="h3">Experts</h3>
          <p className="p">
            It is important to consult experts principaly to obtain valuable and
            specific information that allows us to correctly form our project,
            as well as generate new research approaches and be fed back so that
            our project is as complete as possible.
            <br></br>
            On the other hand, no distinction was made between areas since
            different perspectives were sought for the development of the
            project, so the only requirement was that they had some kind of
            scientific or social specialization in EDCs and/or microplastics.
            <br></br>
            Additionally, all experts expressed their opinion that government
            authorities should be more involved in this public health problem.
            In addition to the fact that they themselves are willing to
            collaborate jointly for the elaboration of a regulatory framework.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="tecprofs">
        <div className="text-white">
          <h3 className="h3">Tec Professors</h3>
          <p className="p">
            Throughout the project, various professors from the Tecnológico de
            Monterrey, campus Estado de México, were consulted in order to
            request their opinion about the project and thus build it better.
            Within the conversation, most of the teachers were unaware of the
            context of the EDCs, however, this was not a barrier for them to get
            involved and begin to create greater awareness of this problem.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="instructors">
        <div className="text-white">
          <h3 className="h3">Instructors</h3>
          <p className="p">
            PhD. Ana Laura Torres and PhD. Aurora Antonio are the ones who have
            taken the tutoring of this project. For them it generates great
            personal and professional satisfaction since they are in charge of a
            wide variety of people and personalities whom they guide and learn
            from. Being tutors entails great responsibility and trust towards us
            and in the work we do since, by always being attentive, they observe
            our abilities and enhance them.
            <br></br>
            Additionally, they are one of the most involved people of our
            project since they are conscious about this rising problem that,
            although there is no estimation of the future impact of it, our
            project brings a sustainable and economic opportunity beneficial to
            the environment.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="team">
        <div className="text-white">
          <h3 className="h3">Team Members</h3>
          <p className="p">
            During this year, each team member has specialized in certain parts
            of this great project. Since we are a multidisciplinary team, we
            have been able to include different perspectives that make this work
            one of the most complete that have been carried out. Additionally,
            this project has given us great learning about agriculture, but more
            than anything, about the people involved and how we as students can
            make alliances with civil associations and the government to carry
            out strategic projects aligned with the UN 2030 Agenda.
          </p>
        </div>
      </ModalGlass>
    </div>
  );
}