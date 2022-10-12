export default function ContributionsPage() {
  return (
    <div className="hero">
      <img
        src="https://static.igem.wiki/teams/4260/wiki/imagen/team/contributions/0-fondos-animados-gifs/0-fondo-animado-1-default.gif"
        alt="background"
        style={{ width: "100vw" }}
      />
      <div className="h-full w-full py-20 text-white">
        <h1 className="text-7xl cano text-center text-white">CONTRIBUTIONS</h1>
        <div
          className="max-w-3xl m-auto"
          style={{ backgroundColor: "rgba(245, 233, 98,.9)" }}
        >
          <p className="p">
            This year iGEM Tec CEM team worked towards the detection and
            degradation of EDCs found in the residual water used to irrigate
            agricultural crops in Mexico, in order to regulate their
            accumulation in plant tissues, hence reducing the consumption of
            EDCs through food.
          </p>
          <img
            src="https://static.igem.wiki/teams/4260/wiki/contributions/figura1dise-ofinalbioseonsor-contributions.jpeg"
            alt=" Figura1"
            className="figure"
            style={{ maxWidth: 300 }}
          />
          <p className="figure_desc">soy un pie de pagina</p>
          
        </div>
      </div>
    </div>
  );
}
