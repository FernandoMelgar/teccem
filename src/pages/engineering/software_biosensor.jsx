export default function SoftwarePage() {
    return (
      <div  style={{backgroundImage: 'url(https://static.igem.wiki/teams/4260/wiki/imagen/project/biosensor/fondos-de-biosensor/project-biosensor.png)', minHeight:'100vh'}}>
        <div className="p-10 max-w-2xl m-auto pt-20 text-white">
          <h1 className="text-6xl text-center text-white font-bold">
            Software and Controller Network
          </h1>
          <h2 className="h2">
              Overview
          </h2>
          <p className="p">
            The QCM (Quartz Crystal Microbalance) won’t work if a voltage signal with a particular frequency is not generated. If there is no controller, the signal cannot be generated, also without it there would not be a way of receiving the information from the QCM. After the signal is received it needs to be filtered from any noise it could carry (this is called signal processing). And finally, a way for the user to visualize the obtained information is needed, as well as to control the system. All of these require programming, and for each a software solution was developed in order to make the Biosensor work properly. 
This resulted in a Controller Network which can be represented through the following diagram:
        </p>
        </div>
      </div>
    );
  }
  