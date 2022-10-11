import Modal, { ModalGlass } from "../../components/modal";

export default function CollaborationsPage() {
  return (
    <div
      className="h-full w-full p-16"
      style={{
        backgroundColor: "#05046D",
      }}
    >
      <h1 className="text-6xl text-white text-center my-10">Collaborations</h1>
      <p
        className="p block max-w-7xl text-lg text-white p-4 mb-10 rounded-lg m-auto"
        style={{
          backgroundColor: "rgba(94, 188, 255,.4)",
          borderColor: "rgb(135, 255, 255)",
          borderWidth: 2,
        }}
      >
        As the saying goes, alone we go faster, but together we go further. And
        that's at the core of developing collaborations in the iGEM community ,
        working with other teams on difficult problems that can be easily solved
        together. In the case of iGEM TecCEM, a total of 29 joint works with
        teams around the world were established, taking our participation to 17
        different countries. If you want to know more about them, click on one
        of the countries that are highlighted in a different color, then a
        pop-up window will be displayed with the summarized information on each
        of the collaborations made with teams from that nation.
      </p>

      <div
        className="p block max-w-7xl text-lg text-white p-4 mb-10 rounded-lg m-auto"
        style={{
          backgroundColor: "rgba(94, 188, 255,.4)",
          borderColor: "rgb(135, 255, 255)",
          borderWidth: 2,
        }}
      >
        <h2 className="h2">instrucctions</h2>
      </div>
      <img
        className="m-auto"
        src="https://static.igem.wiki/teams/4260/wiki/collabs/bg/map-1400.png"
        alt="Human Practieces tree"
        useMap="#contry_map"
      />
      <map name="contry_map">
        <area
          onClick={() => {
            document.getElementById("canada_modal").click();
          }}
          target=""
          alt="CANADA"
          title="CANADA"
          coords="298,267,308,299,323,269,319,219,367,242,413,292,394,313,386,287,365,290,354,327,345,341,337,342,348,323,344,310,327,325,309,322,298,338,283,303,174,301,138,261,111,252,152,180,168,172,192,187,250,185,268,149,286,181,302,166,307,185,273,229,273,258"
          shape="poly"
        />
        <area
          onClick={() => {
            document.getElementById("usa_modal").click();
          }}
          target=""
          alt="USA"
          title="USA"
          coords="277,392,289,384,319,404,318,373,341,341,339,337,348,324,344,310,325,325,309,322,298,337,282,303,175,300,177,309,165,323,180,357,183,351,210,371,227,366,263,390,270,391"
          shape="poly"
        />
        <area
          target=""
          onClick={() => {
            document.getElementById("mexico_modal").click();
          }}
          alt="MEXICO "
          title="MEXICO "
          coords="214,433,209,393,211,386,231,416,227,424,253,448,263,452,271,450,285,451,307,465,312,460,299,437,305,430,297,422,280,434,268,427,267,400,279,392,265,390,228,366,211,371,184,350,180,358"
          shape="poly"
        />
        <area
          target=""
          alt="INDIA"
          title="INDIA"
          onClick={() => {
            document.getElementById("india_modal").click();
          }}
          coords="1030,479,1049,452,1062,435,1071,427,1077,409,1087,426,1096,397,1074,403,1067,395,1061,404,1026,375,1028,357,1012,357,1012,371,1010,386,999,397,1003,407,996,411,1003,424,1013,418,1012,439"
          shape="poly"
        />
        <area
          target=""
          alt="GREECE"
          title="GREECE"
          onClick={() => {
            document.getElementById("greece_modal").click();
          }}
          coords="842,337,839,329,842,324,847,315,838,309,835,315,828,316,824,322,817,326,839,340,842,335"
          shape="poly"
        />
        <area
          target=""
          alt="FRANCE"
          title="FRANCE"
          onClick={() => {
            document.getElementById("france_modal").click();
          }}
          coords="728,313,732,308,737,306,743,304,751,302,758,301,763,309,770,306,774,316,777,322,784,325,777,328,764,330,754,343,740,330,738,323,725,315"
          shape="poly"
        />
        <area
          target=""
          alt="ENGLAND"
          title="ENGLAND"
          onClick={() => {
            document.getElementById("england_modal").click();
          }}
          coords="703,277,720,294,718,310,725,307,734,306,742,301,741,290,733,290,726,286,711,270"
          shape="poly"
        />
        <area
          onClick={() => {
            document.getElementById("china_modal").click();
          }}
          target=""
          alt="CHINA"
          title="CHINA"
          coords="997,329,999,346,1009,348,1012,356,1028,356,1027,374,1049,394,1055,390,1065,391,1074,403,1097,396,1102,421,1113,428,1141,425,1163,411,1177,384,1166,357,1178,351,1182,341,1196,340,1208,331,1211,314,1205,301,1196,297,1188,276,1159,260,1129,235,1118,246,1122,261,1117,274,1135,285,1138,299,1123,308,1099,306,1087,296,1080,301,1067,293,1057,279,1045,270,1029,268,1018,282,1020,289,1020,296,1011,305,1011,320"
          shape="poly"
        />
        <area
          target=""
          alt="TAIWAN"
          title="TAIWAN"
          onClick={() => {
            document.getElementById("taiwan_modal").click();
          }}
          coords="1176,402,1178,419,1168,420,1168,410"
          shape="poly"
        />
        <area
          target=""
          alt="EGYPT"
          title="EGYPT"
          onClick={() => {
            document.getElementById("egypt_modal").click();
          }}
          coords="887,377,883,386,851,377,843,380,848,423,887,417,889,408,895,398"
          shape="poly"
        />
        <area
          target=""
          alt="NETHERLANDS"
          title="NETHERLANDS"
          onClick={() => {
            document.getElementById("netherlands_modal").click();
          }}
          coords="767,287,765,292,757,296,771,302,773,290"
          shape="poly"
        />
        <area
          target=""
          alt="SPAIN"
          title="SPAIN"
          onClick={() => {
            document.getElementById("spain_modal").click();
          }}
          coords="727,334,723,340,726,351,749,349,754,342,740,330"
          shape="poly"
        />
        <area
          target=""
          alt="TAILANDIA"
          title="TAILANDIA"
          onClick={() => {
            document.getElementById("thailand_modal").click();
          }}
          coords="1113,464,1107,437,1113,430,1118,439,1125,440,1130,447,1129,452,1123,450,1123,457,1116,458"
          shape="poly"
        />
        <area
          target=""
          alt="BRASIL"
          title="BRASIL"
          onClick={() => {
            document.getElementById("brazil_modal").click();
          }}
          coords="429,481,427,484,396,479,388,498,373,504,372,534,387,547,399,568,402,607,419,616,430,637,412,654,430,675,446,659,466,650,480,619,490,584,517,570,522,561,522,538,524,524,518,516"
          shape="poly"
        />
        <area
          target=""
          alt="FINLAND"
          title="FINLAND"
          onClick={() => {
            document.getElementById("finland_modal").click();
          }}
          coords="806,210,812,214,812,225,808,245,814,250,835,250,841,243,848,240,841,229,835,220,832,205,822,203,812,204"
          shape="poly"
        />
      </map>
      <ModalGlass modalId="canada_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">CANADA</h2>
          <h3 className="h3">YOUR Favorite Bacteria (Canada, USA)</h3>
          <p className="p">
            Have you ever wondered what your favorite bacteria is? Well, the
            teams from Queen's University , McGill University and Cornell were
            in charge of collecting essential information about the favorite
            bacteria of different iGEM teams to create an educational book for
            the general public, where we participated by summarizing the
            essential characteristics of Deinococcus radiodurans. The importance
            of this book is to make known, in a dynamic and easy way to
            understand, topics of synthetic biology of organisms that, even
            without being able to see them, coexist with us daily.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/myfavoritebacteria.jpeg"
            alt="My Favorite Bacteria"
            className="figure"
          />
          <p className="figure_desc"></p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="usa_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">USA</h2>
          <h3 className="h3">YOUR Favorite Bacteria (Canada, USA)</h3>
          <p className="p">
            Have you ever wondered what your favorite bacteria is? Well, the
            teams from Queen's University , McGill University and Cornell were
            in charge of collecting essential information about the favorite
            bacteria of different iGEM teams to create an educational book for
            the general public, where we participated by summarizing the
            essential characteristics of Deinococcus radiodurans. The importance
            of this book is to make known, in a dynamic and easy way to
            understand, topics of synthetic biology of organisms that, even
            without being able to see them, coexist with us daily.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/myfavoritebacteria.jpeg"
            alt="My Favorite Bacteria"
            className="figure"
          />
          <p className="figure_desc"></p>

          <h3 className="h3">
            2022 International Bioremediation Conference (Greece, USA)
          </h3>
          <p className="p">
            As WH-Auden once said "Many have lived without love, not one without
            water" This resource is something essential for our lives, so its
            quality and care become a priority for everyone. In order to create
            this awareness and spread the efforts of different people in the
            face of this problem.
          </p>
          <p className="p">
            An international conference on water bioremediation was held. This
            event was organized with the support of iGEM Patras and iGEM ASU,
            however it was attended by multiple teams and the general public,
            where there was an average of 30 attendees, in addition to the
            participation of different experts in the area, of which the iGEM
            TecMonterrey_GDL team helped by taking Ph.D Martín Esteban González
            López..
          </p>
          <p className="p">
            When carrying out this event, the concern of the scientific
            community about water care is notable, since, like the iGEM TecCEM
            2022 project, there are several that maintain the focus on the
            quality of this liquid and how it affects us all. There was an
            opportunity, by sharing the other works of the participants, to find
            different ways to solve the problems we are currently facing and how
            to complement each other. Specifically for our team, we had the
            opportunity to chat with a researcher, Itzany Janet De la Cruz
            Salazar, who focused on the degradation of endocrine disruptors in
            water, as we did, which helped us to understand different aspects of
            degradation as the interactions of the BPA molecule with different
            compounds.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/bioremediation-conference.png"
            alt="nternational Bioremediation Conference)"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-3.png"
              alt="ODS 3"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-6.jpg"
              alt="ODS 6"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-12.jpg"
              alt="ODS 12"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-14.png"
              alt="ODS 14"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </div>
      </ModalGlass>
      <ModalGlass modalId="mexico_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">México</h2>
          <h3 className="h3">Comics</h3>
          <p className="p">
            The interest in synthetic biology is not only found in those
            students who are studying a degree related to this field, but it is
            also possible to promote this taste and knowledge to the little ones
            through a fun and attractive way for them. In this way, the iGEM
            Tec-Chihuahua team made a set of comics from different teams where
            they captured the theme of their project in drawings to color, so
            that children in middle and high school can understand the themes in
            a dynamic way. of our projects. It is hoped that after the children
            receive this comic, feedback will be obtained to observe new areas
            of opportunity within this collaboration.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/comic-1.png"
            alt="Comic 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/comic-2.png"
            alt="Comic 2"
            className="figure"
          />
          <h3 className="h3">Hispanic meetup (Brazil, México, Spain)</h3>
          <p className="p">
            Hosting a Meetup involves a lot of work, since you have to consider
            efficient logistics between various teams, judges trained and
            willing to give feedback to the participating teams, and all the
            other attendees. This allowed the teams to identify their areas of
            opportunity to improve their pitch, including being able to make
            improvements to their project, as well as experience project
            advocacy.
          </p>
          <p className="p">
            For this event we have the participation of 4 teams including iGEM
            Navarra, iGEM Brazil and other Mexican teams, 6 judges were also
            present during the event.
          </p>
          <p className="p">
            To enrich this experience, different courses were also offered to
            pique and increase people's curiosity about biology and especially
            synthetic biology, of which there were a total of 70 attendees, of
            which 70% belonged to the biotechnology community and 30% of
            external attendees, which is an approach to education, learning
            things outside their areas of knowledge.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico1.jpg"
            alt="Meetup hispanico 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico2.jpg"
            alt="Meetup hispanico 2"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico3.jpg"
            alt="Meetup hispanico 3"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="h3">Agriculture Infographics</h3>
          <p className="p">
            A picture says more than a thousand words, that's why that is why
            the UAM, Tec Chihuahua and iGEM team TecCEM decided to make short,
            eye-catching infographics that summarized the most relevant
            information about the problems we seek to solve. And in this way we
            transmit to our target audience (the farmers) in a friendly way our
            concern and occupation about the problem situation on which our
            project is developed. Once the 6 infographics have been compiled, it
            is planned to visit the farmers to transmit this knowledge and
            obtain feedback from them on both the problem we seek to solve and
            the content of the infographics.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/antibi-ticos-en-la-agricultura-colab.png"
            alt="Antibioticos en la agricultura"
            className="figure"
          />
          <h3 className="h3">Expert advice</h3>
          <p className="p">
            With the aim of constantly verifying that the trajectory that our
            project was following was correct, several consultation sessions
            were carried out with experts, where we had the support of
            agronomists, doctors in different fields of science and even advice
            from people who represented our target audience, which belong to
            those stakeholders who supported the design and redesign of our
            project. All of them provided us with literature, sample preparation
            protocols for measurements, help in mathematical and economic
            models, contribution of materials and more.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/asesor-a-oscar-y-sa-d-300522.jpeg"
            alt="Asesoría oscar"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/entrevista-edson.jpeg"
            alt="Entrevista Ed"
            className="figure"
          />
          <h3 className="h3">Memorama EDCs </h3>
          <p className="p">
            Together with the UAM and Tec Chihuahua teams, the idea of a
            workshop was organized, an event where different interactive games
            would be played with the attendees so that they could get to know
            the main topics of our projects, from which the idea of a memorama
            was born that will help to relate the different EDCs with their
            names, figure and characteristics, with the aim of helping the
            population learn about this topic. Currently there are few pairs of
            cards to play the game and new cards are being made to complement
            it.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/memorama-1.png"
            alt="Memorama 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/memorama-2.png"
            alt="Memorama 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="brazil_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">BRAZIL</h2>
          <h3 className="h3">Hispanic meetup (Brazil, México, Spain)</h3>
          <p className="p">
            Hosting a Meetup involves a lot of work, since you have to consider
            efficient logistics between various teams, judges trained and
            willing to give feedback to the participating teams, and all the
            other attendees. This allowed the teams to identify their areas of
            opportunity to improve their pitch, including being able to make
            improvements to their project, as well as experience project
            advocacy.
          </p>
          <p className="p">
            For this event we have the participation of 4 teams including iGEM
            Navarra, iGEM Brazil and other Mexican teams, 6 judges were also
            present during the event.
          </p>
          <p className="p">
            To enrich this experience, different courses were also offered to
            pique and increase people's curiosity about biology and especially
            synthetic biology, of which there were a total of 70 attendees, of
            which 70% belonged to the biotechnology community and 30% of
            external attendees, which is an approach to education, learning
            things outside their areas of knowledge.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico1.jpg"
            alt="Meetup hispanico 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico2.jpg"
            alt="Meetup hispanico 2"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico3.jpg"
            alt="Meetup hispanico 3"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto pt-2"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="h3">Meet-up Latam (Brazil)</h3>
          <p className="p">
            The iGEM Brazil team hosted the LATAM Meetup where different teams
            from Latin America and the world participated by sharing their
            projects to publicize the work they do and find possible
            collaborations with other teams. This event consisted of 2 phases
            developed on different days. The first was dedicated exclusively to
            the presentations of the teams, while the second day was of
            activities to encourage the creation of collaborations between the
            participants. Likewise, the event was broadcast in real time on the
            YouTube platform and had a reach of more than 200 people.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meet-latm-1.png"
            alt="Meetup latinamerica 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meet-latam-2.png"
            alt="Meetup latinamerica 2"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="china_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">CHINA</h2>
          <h3 className="h3">The HydroAqua Simulator</h3>
          <p className="p">
            The PuiChing_Macau and UM teams hosted an online conference on
            aquaponics and hydroponics in which we participated by presenting
            our project and a viable solution to the main theme of the
            conference with the aim of exchanging knowledge on the
            sustainability of the ecosystem, in addition to improving the
            communication and cooperation between teams to find new
            collaborations. This experience helped us to identify the areas of
            opportunity in our speech that were useful in order to improve it,
            making it clearer and more orderly.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/aquasimulator-1.jpg"
            alt="Aquasimulator 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/hydroaqua-2.png"
            alt="Hydroaqua 2"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-3.png"
              alt="ODS 3"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-6.jpg"
              alt="ODS 6"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-12.jpg"
              alt="ODS 12"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-14.png"
              alt="ODS 14"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <h3 className="h3">Brochure Meetup</h3>
          <p className="p">
            The Worldshaper -HZ, ZJU-China and ZJUT-China teams hosted the
            Meetup Brochure where different teams from China and the world
            participated by sharing their projects in order to publicize the
            work they do and find possible collaborations with other teams. This
            event was divided into 7 categories depending on the theme of the
            project where we participate in the environmental area. At the end
            of our presentation, we were given feedback, from which we were told
            that our speech had a confusing linearity and that the speakers were
            very nervous, so they proceeded to look too much at the screen. The
            actions that were taken from this were to take courses to speak in
            public and the restructuring of our speech.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-china.jpeg"
            alt="Meetup china"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="india_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">INDIA</h2>
          <h3 className="h3">World Environment Day</h3>
          <p className="p">
            World Environment Day is not well-known but a very important holiday
            that is celebrated on June 5 around the world. The iGEM IISER PUNE
            team organized a collaboration that consisted of making the earth a
            better place to live. Each team was encouraged to carry out an
            activity that would help achieve this objective. Based on the idea
            of contributing with our "grain of sand", iGEM TecCEM rescued dogs
            from the street and planted about 15 trees, later the evidence of
            these actions was sent by email to the organizing team and this was
            uploaded in an Instagram and Facebook post. These actions must go
            beyond just a photo, since the actions that we take in favor of our
            planet now, will be the ones that will determine the planet that we
            will have tomorrow, that is why planting a tree helps that in the
            future our planet is in better environmental conditions.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/medio-ambiente-india.jpg"
            alt="Enviroment India"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
            alt="ODS 13"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="h3">CIS Synbio </h3>
          <p className="p">
            We iGEMERS are not only identified by our passion for science, but
            also by our great ability to face problems and solve them in
            different ways. Highlighting this fact, the IISER TVM team developed
            an escape room type activity, where different teams competed with
            each other to solve a murder case caused by a genetically modified
            virus, CSI style. Activities such as the decoding of DNA base pairs
            to find a hidden code or the investigation of biosafety regulations
            were carried out.
          </p>
          <p className="p">
            Throughout this activity we learned the different consequences that
            the incorrect use of biotechnological knowledge could have, as well
            as the lack of security protocols. However, this event not only
            helped us to take theoretical lessons, but also experiential ones,
            where teamwork was the key to solving the puzzles. In this way,
            united by the activity and inspired by the good collaborative work
            that we presented throughout the challenge, we managed to
            reformulate the organization of the pending work within our iGEM
            team and finish more efficiently.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/csi.png"
            alt="CSI"
            className="figure"
          />
          <h3 className="h3">Lab tour</h3>
          <p className="p">
            Knowing the space where we work helps us to see the diversity that
            exists among us, which is why the IISER Thiruvananthapuram team made
            a video compiling several lab tours from different teams to make
            them known to the community. In this way we participate by showing
            the laboratories where we work in the realization of our project.
            The Tecnológico de Monterrey has made support for research one of
            its priorities, especially at the State of Mexico Campus, the campus
            where TecCEM developed its research. This great support is reflected
            in the number of facilities offered to students to complement our
            projects. We not only have those teams specialized in biotechnology,
            but also those from different complementary areas such as
            nanotechnology, mechatronics, mechanics or even digital animation.
            Having so many different opportunities allows equitable work
            progress between areas, strengthening the project.{" "}
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="h3">International Dengue Day</h3>
          <p className="p">
            To celebrate the day of Dengue "2 IISER Pune" made a series of
            videos where several teams made a promise that invites the public to
            take action on the fight against Dengue. In Mexico, dengue involves
            a problem for our health that is important to address, which is why
            our team participated in these videos, where we also helped
            translate the writing into our mother tongue so that this activity
            will reach a larger audience, which that would help inform the
            Spanish-speaking population and specifically our country about this
            problem.
          </p>
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />

            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />

            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
        </div>
      </ModalGlass>
      <ModalGlass modalId="thailand_modal">
        <div className="text-white">
          <h2 className="text-3xl cano font-bold">THAILAND</h2>
          <h3 className="h3">Human Practices forms </h3>
          <p className="p">
            How is it possible to stand out in our project, agriculture is a
            vital activity in many areas of our country, this is not limited to
            us or to the problems that need to be solved, that is why the
            Thailand_RIS team is developing an antimicrobial pesticide that can
            attack one of the problems. To learn about the areas of opportunity
            that their project has, they asked everyone in the community to
            answer a Human Practices forms. This project is associated with ours
            since it focuses on solving a problem within the area of
            agriculture, a topic that is relevant in our country, which is why
            it belongs to our main objectives.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/human-practices-forms.png"
            alt="Human practices Forms"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="taiwan_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">TAIWAN</h2>
          <h3 className="h3">Fluorescent growth status indicator forms</h3>
          <p className="p">
            The NYCU_Taipei team this year developed a new way to measure the
            growth of bacteria. In this way, to validate their interest in their
            market niche, they asked different teams to answer a survey about
            the use of this technology. We, as the profile of researchers that
            we develop as iGEMERS and therefore as potential users of said
            technology, support the team by answering the survey.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/taipei-1.png"
            alt="Taipei"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
            alt="ODS 17"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="egypt_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">EGYPT</h2>
          <h3 className="h3">Daily life in the lab</h3>
          <p className="p">
            As members of iGEM , it is vital to live and work in a laboratory,
            this is the place where our projects come to life. In the same way,
            there are people who do not have the same opportunity to be able to
            get to know facilities of this type so easily and therefore the
            things they can create inside. That is why “Beyond biologist
            workshop” event where they want to make African high school boys
            aware of the different opportunities that can be presented to them
            in their future studies regardless of borders. This is how we
            participate by making a video of our daily life inside the
            laboratory with which we hope to motivate the kids to see the
            incredible opportunities that lie ahead.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="pt-4 m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="greece_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">GREECE</h2>
          <h3 className="h3">International Handbook (Greece, Finland)</h3>
          <p className="p">
            Our project focuses on eradicating one of the biggest problems that
            agriculture faces today. However, the problems, like agricultural
            fields, are diverse throughout the world.
          </p>
          <p className="p">
            This is why we decided to work with 2 other teams ( iGEM Aboa and
            iGEM Patras) to produce a manual for farmers that will provide them
            with a broader view of the problems that can affect their crops and
            different ways to reach a resolution.
          </p>
          <p className="p">
            This work not only served to share the knowledge of each team within
            this area, but also to complement the information and evaluate the
            impact of the projects on different specimens and conditions around
            the world. We took the liberty of disseminating this handbook with
            the agricultural workers with whom we had frequent contact for the
            development of our projects and they were also asked to distribute
            it within their network of contacts. In the near future, a user
            survey is planned to receive feedback on the content of the product
            and its impact.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/internationalhandbook.png"
            alt="International Handbook"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-3.png"
              alt="ODS 3"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-6.jpg"
              alt="ODS 6"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-12.jpg"
              alt="ODS 12"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-14.png"
              alt="ODS 14"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <h3 className="h3">
            2022 International Bioremediation Conference (Greece, USA)
          </h3>
          <p className="p">
            As WH-Auden once said "Many have lived without love, not one without
            water" This resource is something essential for our lives, so its
            quality and care become a priority for everyone. In order to create
            this awareness and spread the efforts of different people in the
            face of this problem.
          </p>
          <p className="p">
            An international conference on water bioremediation was held. This
            event was organized with the support of iGEM Patras and iGEM ASU,
            however it was attended by multiple teams and the general public,
            where there was an average of 30 attendees, in addition to the
            participation of different experts in the area, of which the iGEM
            TecMonterrey_GDL team helped by taking Ph.D Martín Esteban González
            López..
          </p>
          <p className="p">
            When carrying out this event, the concern of the scientific
            community about water care is notable, since, like the iGEM TecCEM
            2022 project, there are several that maintain the focus on the
            quality of this liquid and how it affects us all. There was an
            opportunity, by sharing the other works of the participants, to find
            different ways to solve the problems we are currently facing and how
            to complement each other. Specifically for our team, we had the
            opportunity to chat with a researcher, Itzany Janet De la Cruz
            Salazar, who focused on the degradation of endocrine disruptors in
            water, as we did, which helped us to understand different aspects of
            degradation as the interactions of the BPA molecule with different
            compounds.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/bioremediation-conference.png"
            alt="nternational Bioremediation Conference)"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-3.png"
              alt="ODS 3"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-6.jpg"
              alt="ODS 6"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-12.jpg"
              alt="ODS 12"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-14.png"
              alt="ODS 14"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <h3 className="h3">Synbio Dictionary</h3>
          <p className="p">
            In all areas of study there are always technical words that are
            usually difficult to understand for people who do not specialize in
            that, which is why the iGEM Patras team made a " SynBio " dictionary
            focused on the keywords that represent the projects of different
            teams to engage the public by understanding these technicalities
            with biological significance. Our team took it upon themselves to
            describe “ EDCs ”, “QCM”, “ Zeolites ”, “ Laccases ” and “
            Antibiotics ”. As further steps in this collaboration, we will seek
            to receive feedback from dictionary users to confirm that the way in
            which it is explained facilitates the understanding of these terms
            and, therefore, of the projects. At the same time, it will allow us
            to find different areas of opportunity for a better involvement of
            the public.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/traducci-n-promotion-video.png"
            alt="Promotion video translation"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <h3 className="h3">“Beautiful mistakes - They help us learn”</h3>
          <p className="p">
            “Beautiful mistakes - They help us learn” is a composition of
            photographs with agar plates where something that was not expected
            grew and that still managed to look beautiful. All these images were
            compiled by the Athens team to show us that although sometimes
            things don't go as expected, it doesn't mean that they can't bring
            anything good and that sometimes we all make beautiful mistakes.
          </p>
          <p className="p">
            In addition to emphasizing that every procedure is useful for
            something, an "error" is a window of opportunity to improve our
            procedures, from the incorporation of adequate controls, to the
            interpretation of bad results and the taking of significant actions
            for experimental development.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/beautiful-mistakes.png"
            alt="Beautiful mistakes"
            className="figure"
          />
          <h3 className="h3">Patras Synthetic Biology questions</h3>
          <p className="p">
            For those people who have wondered what iGEM is? or What do they do
            at iGEM? The Patras team took the time to make a video where they
            answer the most frequently asked questions about work in general and
            about each area within an iGEM team (Wet Lab, Dry Lab, and Synbio).
            We participate by telling how our team develops in those areas. The
            videos were published on the social networks of the iGEM Patras team
            in order to spread them and help meet the goal of resolving the
            general doubts of the viewers of this competitio
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
          <h3 className="h3">SDG Advisory (Finland, Greece, Kueponi )</h3>
          <p className="p">
            A good project not only focuses on the development of a prototype or
            the resolution of a problem, but also seeks to expand its work to
            create an impact that benefits society. However, when looking for
            the most efficient way to achieve this impact, it is good to have
            someone who guides you along the best path. That is why the Patras,
            Aboa and TecCEM teams turned to a company dedicated to advising on
            the formation of sustainable businesses and affiliated with the SDGs
            proposed by the ONU. During this consultancy, the experts were
            presented with the work carried out during the months of project
            development and the way in which said work has been focused on the
            benefit of society. As a result, we were made observations on how to
            present the impact achieved, as well as different ways to complement
            our work.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods.jpeg"
            alt="ODS"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/sdgs.png"
            alt="SDG"
            className="figure m-auto"
            style={{ width: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="finland_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">FINLAND</h2>
          <h3 className="h3">International Handbook (Greece, Finland)</h3>
          <p className="p">
            Our project focuses on eradicating one of the biggest problems that
            agriculture faces today. However, the problems, like agricultural
            fields, are diverse throughout the world.
          </p>
          <p className="p">
            This is why we decided to work with 2 other teams ( iGEM Aboa and
            iGEM Patras) to produce a manual for farmers that will provide them
            with a broader view of the problems that can affect their crops and
            different ways to reach a resolution.
          </p>
          <p className="p">
            This work not only served to share the knowledge of each team within
            this area, but also to complement the information and evaluate the
            impact of the projects on different specimens and conditions around
            the world. We took the liberty of disseminating this handbook with
            the agricultural workers with whom we had frequent contact for the
            development of our projects and they were also asked to distribute
            it within their network of contacts. In the near future, a user
            survey is planned to receive feedback on the content of the product
            and its impact.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/internationalhandbook.png"
            alt="International Handbook"
            className="figure"
          />
          <div className="flex justify-center">
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-3.png"
              alt="ODS 3"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
              alt="ODS 4"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-6.jpg"
              alt="ODS 6"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-12.jpg"
              alt="ODS 12"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-13.jpg"
              alt="ODS 13"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-14.png"
              alt="ODS 14"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
            <img
              src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
              alt="ODS 17"
              className="px-2"
              style={{ maxWidth: "100px" }}
            />
          </div>
          <h3 className="h3">SDG Advisory (Finland, Greece, Kueponi )</h3>
          <p className="p">
            A good project not only focuses on the development of a prototype or
            the resolution of a problem, but also seeks to expand its work to
            create an impact that benefits society. However, when looking for
            the most efficient way to achieve this impact, it is good to have
            someone who guides you along the best path. That is why the Patras,
            Aboa and TecCEM teams turned to a company dedicated to advising on
            the formation of sustainable businesses and affiliated with the SDGs
            proposed by the ONU. During this consultancy, the experts were
            presented with the work carried out during the months of project
            development and the way in which said work has been focused on the
            benefit of society. As a result, we were made observations on how to
            present the impact achieved, as well as different ways to complement
            our work.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods.jpeg"
            alt="ODS"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/sdgs.png"
            alt="SDG"
            className="figure m-auto"
            style={{ width: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="england_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">ENGLAND</h2>
          <h3 className="h3">Forms Safety</h3>
          <p className="p">
            As we all know, the most fundamental part of synthetic biology is
            the joint work of the knowledge of traditional biology, with
            technological advances that allow us to manipulate this knowledge in
            our favor. Hand in hand with these advances, multiple tools have
            been created that allow us to take advantage of it in the best way.
            The Sheffield team has decided to create a Toolbox of Bioinformatics
            tools in order to help teams and researchers in the area to access
            them more easily. To select the compendium of tools to be included,
            a questionnaire was carried out, in which we participated
            identifying the following tools as necessary for our project:
            UniProt, BRENDA, NCBI, MetaCyc, Chimera, l-TASSER and
            SnapGene/Benchling
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-17.png"
            alt="ODS 17"
            className="px-2 m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="netherlands_modal">
        <div className="text-white">
          <h2 className="cano text-2xl">NETHERLANDS</h2>
          <h3 className="h3">MSP Vector Annual Journal</h3>
          <p className="p">
            For some years now, the iGEM MSP team has been publishing a journal,
            in collaboration with the OSJ company and platform, where
            outstanding experimental or review research work carried out by
            multiple iGEM teams is presented. In order that the procedure be
            part of the journal, different phases of article selection are
            carried out.
          </p>
          <p className="p">
            This year iGEM TecCEM participated with 3 different articles: 2
            reviews and one experimental research. Evaluation of the inhibitory
            effect of isoeugenol on Escherichia coli DH5α and BL21 strains; QCM
            biosensor for the sensitive detection of Endocrine Disrupting
            Chemicals: a review, and A review on Endocrine Disrupting Chemicals:
            Properties, Effects, Detection and Degradation. This becomes an
            opportunity for our members to have an approach to the usual format
            and process in the industry that must be followed for the
            publication of scientific content, just as the feedback obtained by
            the co-evaluation within the contest enriches our newsrooms.
            Furthermore it allows us to have a broader vision in the form of
            capturing in writing the essential ideas of our project.
          </p>
        </div>
      </ModalGlass>
      <ModalGlass modalId="france_modal">
        <div className="text-white">
          <h2 className="cano text-2xl"> FRANCE</h2>
          <h3 className="h3">Microfluidic Theoretical Conversation</h3>
          <p className="p">
            The essence of a collaboration is mutual help among teams; this help
            can be received and given in different ways. In the case of the
            collaboration carried out together with the Tolouse team, we based
            ourselves on a theoretical conversation about aspects of
            microfluidics, as a method for a passive delivery of the sample to
            our biosensor, which could be applied within our project, since
            originally we both wanted to include it in the project bases.
            However, this talk was crucial for the development of our project
            because it marked a new path for us where we could appreciate that
            the use of microfluidics was not necessary, instead we could
            generate a stable and isolated environment for the measurement of
            our samples.
          </p>
          <img src="https://static.igem.wiki/teams/4260/wiki/collabs/toulouse-conversaci-n-teorica.jpg" alt="Toulouse" className="figure" />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto mt-4"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
      <ModalGlass modalId="spain_modal">
        <div className="text-white">
            <h2 className="cano text-2xl"> SPAIN</h2>
        <h3 className="h3">Hispanic meetup (Brazil, México, Spain)</h3>
          <p className="p">
            Hosting a Meetup involves a lot of work, since you have to consider
            efficient logistics between various teams, judges trained and
            willing to give feedback to the participating teams, and all the
            other attendees. This allowed the teams to identify their areas of
            opportunity to improve their pitch, including being able to make
            improvements to their project, as well as experience project
            advocacy.
          </p>
          <p className="p">
            For this event we have the participation of 4 teams including iGEM
            Navarra, iGEM Brazil and other Mexican teams, 6 judges were also
            present during the event.
          </p>
          <p className="p">
            To enrich this experience, different courses were also offered to
            pique and increase people's curiosity about biology and especially
            synthetic biology, of which there were a total of 70 attendees, of
            which 70% belonged to the biotechnology community and 30% of
            external attendees, which is an approach to education, learning
            things outside their areas of knowledge.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico1.jpg"
            alt="Meetup hispanico 1"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico2.jpg"
            alt="Meetup hispanico 2"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/meetup-hispanico3.jpg"
            alt="Meetup hispanico 3"
            className="figure"
          />
          <img
            src="https://static.igem.wiki/teams/4260/wiki/collabs/ods-4.jpg"
            alt="ODS 4"
            className="m-auto"
            style={{ maxWidth: "100px" }}
          />
        </div>
      </ModalGlass>
    </div>
  );
}
