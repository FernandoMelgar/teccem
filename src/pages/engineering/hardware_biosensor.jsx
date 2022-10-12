export default function HardwarePage() {
  return (
    <div  style={{backgroundImage: 'url(https://static.igem.wiki/teams/4260/wiki/imagen/project/biosensor/fondos-de-biosensor/project-biosensor.png)', minHeight:'100vh'}}>
      <div className="p-10 max-w-2xl m-auto pt-20 text-white">
        <h1 className="text-6xl text-center text-white font-bold">
          HARDWARE
        </h1>
        <h2 className="h2">
            Overview
        </h2>
        <p className="p">The issue concerning the main topic of this part of the project, relies on the need of a constant delivery of the sample to a reaction chamber where the QCM (Quartz Crystal Microbalance) can change its resonance frequency depending on the mass change, thus resulting in a the detection and measurement of EDCs (Endocrine-Disruptive Chemicals) in the sample. Besides having the need for a constant sample delivery, a design for the overall system must be developed for it to lay and be able to be transported.</p>
      </div>
    </div>
  );
}
