export default function SoftwarePage() {
    return (
      <div  style={{backgroundImage: 'url(https://static.igem.wiki/teams/4260/wiki/imagen/project/biosensor/fondos-de-biosensor/project-biosensor.png)', minHeight:'100vh'}}>
        <div className="p-10 max-w-2xl m-auto pt-20 text-white">
          <h1 className="text-6xl text-center text-white font-bold">
            Software and Controller Network
          </h1>
          <h2 className="h2">
          <strong><em>Overview</em></strong>
          </h2>
          <p className="p">
            The QCM (Quartz Crystal Microbalance) won't work if a voltage signal with a particular frequency is not generated. If there is no controller, the signal cannot be generated, also without it there would not be a way of receiving the information from the QCM. After the signal is received it needs to be filtered from any noise it could carry (this is called signal processing). And finally, a way for the user to visualize the obtained information is needed, as well as to control the system. All of these require programming, and for each a software solution was developed in order to make the Biosensor work properly. 
This resulted in a Controller Network which can be represented through the following diagram:
</p>
<img
              src="http://parts.igem.org/wiki/images/a/a6/T--TecCEM--Software_Diagrama.png"
              alt="Fig1-sp"
              className="figure"
            />
       <h1 className="text-2xl text-right text-white font-bold">
            1. Signal generator
          </h1>
        <p className="text-right text-white">
        The QCM has a resonating frequency, this means that it oscillates at a higher amplitude with a particular frequency. The sensitivity of the QCM increases as the resonating frequency does. The QCM that is being used is a quartz crystal for liquid biosensing, developed by Open QCM, and it resonates at 10 MHz. The reason why this one was chosen is because it offers the possibility of sensing very small masses (because of the high frequency) while remaining relatively accessible in terms of costs. However, a signal with this characteristic must be generated and applied in the QCM for it to work.  For this task the module AD9833 is perfect, as it is possible to generate signals with it in the frequency range of 0-12.5 MHz. This module is rather complex, so its programming is not simple. Fortunately, there are libraries that simplify this, and are compatible with Arduino IDE (one of the programming environments used).
          </p>
          <img
              src="http://parts.igem.org/wiki/images/9/9d/T--TecCEM--Software_AD9833.png"
              alt="Fig1-sp"
              className="figure"
            />
          <p className="text-right text-white">
          AD9833 has a high resolution of 28 bits, which translates to .1 Hz at 25 MHz reference clock. It can be supplied with a range of 2.3 V to 5.5 V, meaning that it is directly compatible with both 3.3 V controllers and 5 V controllers. Plus, it has the option of generating different forms of signal, such as Square, Triangular and Sinusoidal (though only square wave one will be useful for the application, as this type of wave is easier to measure its frequency).
          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          2. Frequency Reading and Raspberry Pi Implementation
          </h1>
          <p className="text-right text-white">
          After the generated signal passes through the QCM, depending on the mass above it, the frequency is reduced. The more mass is on the surface of the microbalance the bigger the frequency shift will be (the frequency can only be reduced from the original resonance value). Being able to read this frequency is what allows us to know the mass of EDCs trapped in the surface of the QCM when the Biosensor is in operation.           
          </p>
          <p className="text-right text-white">
          There are many ways of reading the frequency of the signal, but in the program a library called FreqCount was used. Using the library simplifies the program, but for more information about how this library measures frequency 
          </p>
          <p className="text-right text-white">
          The method is based on the count of ascending pulses, this means the shift from a low state (0V) to a high state (3.3V or 5V). Therefore, the square signal configuration for the generator is the most suitable, as it only oscillates between these values. After counting the number of pulses, the frequency can be calculated from dividing this value between the time span that it took for getting this count. For example: counting 1000 pulses in one second means the frequency is 1000 Hz, but if this same count was obtained between a lapse of half a second the frequency doubles to 2000 Hz. This library has the advantage that is compatible with Arduino IDE. 
          </p>
          <p className="text-right text-white">
          The processor of an Arduino (model in image is the nano version) is an ATMEGA328P, and it has a CPU clock speed of 16MHz, which means it can make 16 million instructions in just one second. The maximum frequency it can read would be 6.4 MHz (16000000/2.5), this is not enough for the frequency of 10 MHz that the QCM works with, so this is why a different controller from needs to be selected. 
          </p><img
              src="http://parts.igem.org/wiki/images/9/9d/T--TecCEM--Software_AD9833.png"
              alt="Fig1-sp"
              className="figure"
            />
            <p className="text-right text-white">
            AD9833 has a high resolution of 28 bits, which translates to .1 Hz at 25 MHz reference clock. It can be supplied with a range of 2.3 V to 5.5 V, meaning that it is directly compatible with both 3.3 V controllers and 5 V controllers. Plus, it has the option of generating different forms of signal, such as Square, Triangular and Sinusoidal (though only square wave one will be useful for the application, as this type of wave is easier to measure its frequency).
          </p>
          <h1 className="text-2xl text-left text-white font-bold">
          2. Frequency Reading and Raspberry Pi Implementation 
          </h1>
          <p className="text-left text-white">
          After the generated signal passes through the QCM, depending on the mass above it, the frequency is reduced. The more mass is on the surface of the microbalance the bigger the frequency shift will be (the frequency can only be reduced from the original resonance value). Being able to read this frequency is what allows us to know the mass of EDCs trapped in the surface of the QCM when the Biosensor is in operation. 
          There are many ways of reading the frequency of the signal, but in the program a library called FreqCount was used. 
          </p>
          <p className="text-left text-white">
          The method is based on the count of ascending pulses, this means the shift from a low state (0V) to a high state (3.3V or 5V). Therefore, the square signal configuration for the generator is the most suitable, as it only oscillates between these values. After counting the number of pulses, the frequency can be calculated from dividing this value between the time span that it took for getting this count. For example: counting 1000 pulses in one second means the frequency is 1000 Hz, but if this same count was obtained between a lapse of half a second the frequency doubles to 2000 Hz. This library has the advantage that is compatible with Arduino IDE. 
          However, the counting of the signal’s frequency is limited for each controller. It all depends on the CPU clock speed (how many instructions can a controller make in one second). The correct sampling of a signal (which helps counting the rising pulses) is limited up to half the controller’s CPU speed, this rule is called Nyquist Theorem. For real applications the maximum frequency that can be measured is obtained dividing the CPU clock speed by 2.5. If this limit is surpassed the controller will fail in accurately measuring the pulses.
The following microcontrollers were the candidates for this task:
          </p>
          <img
              src="http://parts.igem.org/wiki/images/b/bb/T--TecCEM--Software_Arduino.png"
              alt="Fig1-sp"
              className="figure"
            />
            <p className="text-left text-white">
            The processor of an Arduino (model in image is the nano version) is an ATMEGA328P, and it has a CPU clock speed of 16MHz, which means it can make 16 million instructions in just one second. The maximum frequency it can read would be 6.4 MHz (16000000/2.5), this is not enough for the frequency of 10 MHz that the QCM works with, so this is why a different controller from needs to be selected. 
          </p>
          <img
              src="http://parts.igem.org/wiki/images/b/b0/T--TecCEM--Software_Teensy.png"
              alt="Fig1-sp"
              className="figure"
            />
            <p className="text-left text-white">
            Teensy 4.1 is a development board from the Freescale family. This one has an ARM Cortex-M7 processor at 600 MHz, with an NXP iMXRT1062, it is a cross-over processor, which works as a microcontroller with the speeds of a microcomputer. It is capable of measuring correctly up to 25 MHz, so it’s very suitable for the Biosensor. The Teensy can be programmed with the Arduino IDE using an add-on called Teensyduino, this means that the library mentioned previously for the AD9833 and FreqCount can both be used. 
          </p>
          <img
              src="http://parts.igem.org/wiki/images/4/41/T--TecCEM--Software_Raspberry.png"
              alt="Fig1-sp"
              className="figure"
            />
            <p className="text-left text-white">
            The Raspberry Pi is a single-board computer of relative low-cost developed in the United Kingdom by the Raspberry Pi Foundation. This foundation has the goal of putting the power of computing into the hands of people around the world. Imagine an Arduino board with the capabilities of a CPU, this would be an easy and fast way of describing a Raspberry Pi. The model being used is the Raspberry Pi Zero W, and it has a 1-core Broadcom Processor (BCM2835) whose CPU clock speed reaches 1 GHz (over 60 times the processor speed of the Arduino). The common way to program a Raspberry is through Python (currently the preferred programming language because of its simplicity and accessibility). Furthermore, the Raspberry offers the opportunity of making the Biosensor wireless as it supports Bluetooth 4.1. 
          </p>
          <p className="text-left text-white">
          The first idea was to use the Raspberry Pi, because of the advantage of having Bluetooth integrated. But because of a problem with the maximum frequency it could read, another decision was taken: Teensy 4.1 would be in charge of reading the frequency (also configuring itself to the user's needs) and the Raspberry Pi Zero would oversee the intercommunication (between the PC and the Teensy) and would be the responsible for processing the data signal too. To get further information about why Raspberry Pi was discarded as the only involved controller.
          </p>
          <p className="text-left text-white">
          A program was made for the Raspberry to count pulses of a square signal (using Python), just to test if evidently it can read up to 10 MHz. Unfortunately the results proved otherwise, for some reason the Raspberry couldn’t read more than 150 Hz, way less than what is needed. Further investigation in forums revealed the reason of this: because of the great speed that the Raspberry has, it is used as a computer and has its own operating system, which makes it an excellent development tool; the problem is that this advantage affects the frequency measurement that we want to achieve, since it must devote resources to the processes of the operating system itself and at the same time measure the input signals. Unlike the Arduino that, if programmed properly, would do only one thing: reading frequency. 
          </p>
          <p className="text-left text-white">
          The following table summarizes the relevant information, advantages and disadvantages, of each microcontroller mentioned:
          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          3. Communication between the Raspberry Zero W and Teensy 
          </h1>
          <p className="text-left text-white">
          The first part of the intercommunication of the PC and Teensy consists in taking the information of the frequency from the Teensy to the Raspberry, and any configuration command received by the Raspberry to the Teensy. Because it is the most common method for doing this, and since only numbers and simple labels or text are to be sent, Serial communication was selected. It consists in the process of sending data one bit at a time over a communication channel. The proper name for the protocol used is UART (Universal Asynchronous Receiver-Transmitter), asynchronous stands for the fact that there is no syncing between the two devices involved. Each controller in order to set up this must have two specific ports: TXD (transmit data) and RXD (receive data), the TXD of one device is connected to the RXD from the other and vice versa. Teensy 4.1 has 9 pairs of these ports, the one chosen was Serial1; the Raspberry Pi Zero only has one. Connections were made with the TXD and RXD ports as stated and for ground referencing both GND ports of the controllers were connected to each other. These are the only physical configurations that must be done, the rest is made through programming only.
          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          4. Communication between the Raspberry Zero W and PC
          </h1>
          <p className="text-left text-white">
          Bluetooth is to be used for this part. First, for this to work the PC where the app is has to be paired with the Raspberry (this can be done from the pc Bluetooth settings or from the raspberry using a monitor to see when making the communication). Once these are paired, this step does not have to be made again (only if the user manually unpairs the devices). 
The next important thing to do is going to the Bluetooth Settings on the PC, then to the “More Bluetooth options” section. There click in the menu the option “COM Ports”, there it should be checked at what Com number the Raspberry is connected to, as that is the one that must be selected when using the app.
For the programming of the app in the PC the Bluetooth sending and receiving of information was simple as it works as a simple serial communication. On the other hand, in the Raspberry Pi Zero some research had to be done. Two libraries for controlling the Bluetooth of the Raspberry were found: Blueman and Bluedot. The first one could not be used as it is  not supported anymore. Blueman still worked but had to be installed in the raspberry. For doing this the following commands need to be written in the terminal of the Raspberry: “sudo pip3 install bluedot” and “sudo pip3 install bluedot --upgrade” (Python and a preferred IDE (optional) must be already installed in the Raspberry). Once this is done the Bluedot library can be used in a Python script.
          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          5. Automatic Program Execution
          </h1>
          <p className="text-left text-white">
          Since the Raspberry Pi itself is a computer the program that we designed for interacting with the teensy and processing the received data must be executed, in most cases execution is triggered manually by a user but in this case, using a daemon that executes commands at startup we  automatically execute the program each time the raspberry is rebooted. This was easily done with the Linux command (entered on a Linux terminal) sudo crontab -e and then the name of our program was entered so that it could run at startup. 
          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          6. Noise Filtering
          </h1>
          <p className="text-left text-white">
          Noise is often a problem when it comes to reading the information a sensor gives. Noise stands for unwanted perturbation that alters the real value of a signal. Usually a processing of the signal has to be done to eliminate this. The most common method for eliminating noise is using a Low-Pass Filter. These filters only let through signals with a low frequency (from 0 Hz to a value that is defined in the filter design). The noise generally has a high frequency, manifesting as a series of peaks (of variable magnitude) alternating rapidly, so these filters are good at eliminating noise. 
The response of a Low-Pass filter to a pulse is expressed in the following equation:
Y=A(1-exp -tT )
Y stands for the filtered response
A stands for the magnitude of the pulse 
t stands for the time in seconds
T stands for the time constant (designer defined)
It can be seen in the formula that as time passes the response will get closer and closer to the magnitude of the Pulse. But this takes time depending on the Time constant, usually more than a second, therefore pulses that happen fast are not registered. 
The objective for the processing of the signal was to make the Raspberry Pi filter the data signal the teensy is constantly sending, however, the formula shown is not as simple to place in the python program, one of the reasons being that it is time dependent. For solving this a close alternative was implemented. This one is called Exponential Smoothing, and the formula for the calculation is the following:
s(i)=a*y(i-1)+(1-a)*s(i-1)
s stands for the filtered signal value
a is the equivalent of the time constant but here is called smoothing constant (from 0 to 1)
y stands for the value read (with noise)
This equation yields a behaviour very similar to the one of a Low-Pass filter but is not time dependent and is programmed as simply as using the previous filtered values for calculating the actual one.
It must be noted that as the filter gets more aggressive with noise (“T” is high or “a” is very low) the more time will take for the signal to stabilize to the real value when a change is registered. 

          </p>
          <h1 className="text-2xl text-right text-white font-bold">
          Information sources
          </h1>
          <p className="text-left text-white">
          https://store.openqcm.com/sensors/
https://www.pjrc.com/teensy/td_libs_FreqCount.html
https://store.arduino.cc/products/arduino-nano
https://www.pjrc.com/store/teensy41.html
https://www.raspberrypi.com/products/raspberry-pi-zero-w/
https://bluedot.readthedocs.io/en/latest/
https://www.itl.nist.gov/div898/handbook/pmc/section4/pmc43.htm

          </p>
        </div>
      </div> 
    );
  }
  