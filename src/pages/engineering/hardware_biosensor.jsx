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
        <p className="p">
          The issue concerning the main topic of this part of the project, relies on the need of a constant delivery of the sample to a reaction chamber where the QCM (Quartz Crystal Microbalance) can change its resonance frequency depending on the mass change, thus resulting in a the detection and measurement of EDCs (Endocrine-Disruptive Chemicals) in the sample. Besides having the need for a constant sample delivery, a design for the overall system must be developed for it to lay and be able to be transported.
        </p>
        <h2 className="h2">
          Methods and Materials
        </h2>
        <p className="p">
         <strong><em>An overview of equipment and materials used in the experiment, as well as the steps taken during the experiment.</em></strong>
 Our project assembles a biosensor to measure the concentration of EDCs in a tested volume of irrigation water. In order to achieve this, many areas of engineering are involved. 

First, the biological receptor  assures EDCs capture, followed by an amplified signal due to immobilization on chitosan and gold nanoparticles for QCM sensitization.  The design led the team to manufacture the casing resulting in a 3D printed biosensor. Finally, the response is recorded, displayed and interpreted by our own developed software.
From synthetic biology to software, the resources were documented for the purpose of replicating this biosensor. All areas are merged together with the intention to be practical and to ease the user experience with the biosensor.
[https://static.igem.wiki/teams/4260/wiki/materials-hardware.png]

Plasmids, bacterial strains and media for receptor protein expression 
Plasmid pJET 1.2 Blunt (Thermo Fisher, K1231) was ligated with BBa_K4260002 (synthesized through IDT sponsorship). Then transformed the pJET1.2-BBa_K4260002 in E.coli DH5 alpha strain, grew in LB Broth  (LB) (Thermo Fisher) medium plates with ampicillin (AMP) and incubated at 37°C overnight. The plasmid of the grown candidate colonies were extracted using PureLink™ Quick Plasmid Miniprep Kit (Thermo Fisher) and then transformed E.coli BL21 and HMS174 strains. They grew in liquid LB medium with AMP. In between, verifying steps with agarose gels 0.8% was done.  Prior to induction, the cells were scraped off the plate and resuspended in LB medium to yield an OD600 of 0.5. Protein expression followed induction for 24 hours, then precipitation and purification through Nickel Affinity Chromatography was performed, validating  each step through SDS-PAGES. See our protocol book or results. At this point, protein would be ready and handled for immobilization.

Nano
Hardware
●	Vernier
●	Sketching tools
●	SolidWorks
●	PLA filament
●	3D printer
●	H-bridge
●	Solenoid valve
●	Test chamber
Software

Sampling method
First approach
A microfluidic chip is a device designed for the release of little drop-like chambers of a fluid in a media, thanks to different fluid immiscibility characteristics. It’s formed of one or more, up to 2mm in diameter channels with the purpose of transporting a desired fluid. Each chip has different configurations depending on the experiment requirements such as:
- Number of fluids needed
- Mixtures 
- Amount of fluid sampled. 
Two colliding channels can mix different fluids to be released into a medium for it´s analysis. These configurations are designed with different purposes depending on the project specifications. One of the main uses of these devices is for the creation of Droplets of a compound, material or reagent which can be analyzed or used in other studies. These are often used for PCR tests of different reagents. Since droplets are formed in large numbers, many different reactions can be controlled, giving a lot of data which can be later managed into statistical analysis, thus reducing the time each iteration is being reproduced.
For the creation of these Droplets it is necessary that the fluids that are handled are immiscible with each other. This, so that the surface tension of each fluid allows the creation of the drops that you want to use.
Droplets are created with the help of special electric pumps often called “High Acuracy Microfluidic Pumps” that are designed to control pressure to mobilize the fluid. These devices are often sold by specialized companies. The number of channels depends on the number of fluids to be handled, and in turn, they have inlets so that said fluid can be entered through a tube connected to the pump. If you have two or more fluids, they must be controlled by their respective number of connections. The pressure difference determines the speed and size of each of the Droplets, and since it is a continuous pressure, the size and quantity are released in a monodiverse way.
As a first approach to the problem, this device was thought to be 3D printed by a resin printer having the need of a precise printing.
These chips need the precise pump force of a specialized device for them to be used correctly for the droplet size must be very controlled. Since the QCM works with pulses emitting different frequencies, this approach couldn’t work, as the droplets needed to be released in a medium, this media could interfere with the frequency and the measurements.
Second approach
With new information on how the proteins must be incubated in the process, the design had to be modified. An incubation time must be established, for the proteins needed time to settled around the EDCs. Having this considered, a proper reaction chamber was thought. The reaction chamber was an amber crystal container with three holes: One for the sample to be introduced, one for the QCM, and one for the exit of the sample.
The sample was to be delivered with a 12V water pump controlled with an Arduino UNO and a H-bridge type driver. This configuration is simple, compact for the sampling problem. This circuit, besides, was redesigned in a more organized and simpler way with a printed PCB. 
Making the PCB for the sensor allows to considerably reduce the amount of cables to use, cables that would come out of each microcontroller (Teensy and Raspberry) to connect them to each other and to the multitude of outputs and inputs needed for the sensor. Reducing the number of cables not only makes the project more aesthetic, but also eliminates risks of failures due to short circuits and false contacts, while facilitating the connection of other elements. Finally it gives more professionalism to the biosensor. Considering the price that it has to manufacture and the advantages that it grants, making a PCB is a great option to improve a Project.
QCM base
The QCM attachment was modeled for the purpose of keeping the QCM dry when testing. It also allows greater contact of the electrode with the test water. Finally, it keeps the QCM safe, preventing it from being broken by use in the biosensor.
Since the QCM’s electrodes need to be isolated from the water to prevent any issue, an additional silicon layer must be added.
[https://static.igem.wiki/teams/4260/wiki/qcm-final.png]

PBC Circuit
Making the PCB for the sensor allows to considerably reduce the amount of cables to use, cables that would come out of each microcontroller (Teensy and Raspberry) to connect them to each other and to the multitude of outputs and inputs needed for the sensor. Reducing the number of cables not only makes the project, but also eliminates risks of failures due to short circuits and false contacts, while facilitating the connection of other elements. Finally it gives more professionalism to the biosensor. Considering the price that it has to manufacture and the advantages that it grants, making a pcb is a good option to improve a Project.
Chassis/Model
First, in order to minimize the material used for manufacturing the hardware, the components were measured with a vernier for them to be accurate. Thus, the final model uses only the required material for the components. Furthermore, with this data, many sketches were done comparing the ease of each design.
[https://static.igem.wiki/teams/4260/wiki/im-genes-wiki-sketches-2.jpg]
[https://static.igem.wiki/teams/4260/wiki/im-genes-wiki-sketches-1.jpg]
The model was created in SolidWorks, a program for CAD. In this respect, three different designs were made from the sketches. 
[https://static.igem.wiki/teams/4260/wiki/solidworks.png]
The first attempt was a simple design and structure. This in particular so that the final user could assemble the biosensor easily. Nevertheless, the material optimization was an issue because it needed a large amount of filament to complete the model.
The second proposal implied the purchase of acrylic plates for the walls of the biosensor. This made the model faster to assemble and cheaper to manufacture. But, this proposal showed complications like a problematic design which would cause long manufacturing time due to the process of cutting the acrylic plates to size and the printing time of the base and poles.
[https://static.igem.wiki/teams/4260/wiki/modelo-proto2.png]
The third try was the model we chose to keep because it was cheaper and easier to design, manufacture and use. The blueprints [https://static.igem.wiki/teams/4260/wiki/final-proto-blueprints.pdf ] show the dimensions and how to be printed in 3D.
[https://static.igem.wiki/teams/4260/wiki/modelo-protofinal.png]
[https://static.igem.wiki/teams/4260/wiki/mass-comparison.png]
We analyze the materials for the components and the case of the hardware. The hardware is made with PLA plastic which is a degradable bioplastic and does not contain BPA’s so it does not contribute to increasing the levels of EDC’s in the tested water.

        </p>
      </div>
    </div>
  );
}
