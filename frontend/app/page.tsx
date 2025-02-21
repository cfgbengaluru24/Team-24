"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

// import { useTranslation } from 'react-i18next';

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = event.target.value;
    if (divRef.current) {
      divRef.current.innerText =
        "A non-profit, Charitable Trust involved in nature conservation in the Nilgiri region of South India.";
    }
  };

  return (
    <div className="text-black dark:text-white">
      <div className="">
        <div className="flex justify-end pr-2">
          <select
            className="text-black p-2 rounded absolute bg-white"
            onChange={handleClick}>
            <option value="ta">Tamil</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="kn">Kannada</option>
            <option value="fr">Malayalam</option>
          </select>
        </div>
        {/* <div className='text-green-300 font-bold text-3xl absolute '>THE SHOLA ECOSYSTEM</div> */}
        <div
          ref={divRef}
          className="absolute text-white text-5xl bold text-left p-5 mt-40 w-1/2">
          தெற்கு இந்தியாவின் நீலகிரி பிரதேசத்தில் இயற்கை பாதுகாப்பில்
          ஈடுபட்டுள்ள ஒரு அன்னியா, சமூக நலன் செய்யும் நம்பிக்கையற்ற நிதி.
        </div>
        <img
          className="w-[100vw] h-[100vh]"
          src="https://t3.ftcdn.net/jpg/00/60/77/96/360_F_60779662_NxwBIhQ8kIXeJZkSAq7pSZIf8F32WFVj.jpg"
          alt="banner"
        />
      </div>
      <div className="flex mb-10">
        {/* <div className='pt-10 pb-10 justify-between items-center mt-200 ml-10 bg-green-300 w-[30vw] h-[40vh] text-3xl'>
                <p className='ml-20 text-5xl pb-5 font-bold'>Save our Sholas</p>
            </div> */}
        {/* <div className='pt-10 pb-10 justify-between items-center bg-green-500 w-[30vw] h-[40vh] text-xl'>
                <p className='ml-12 text-2xl pb-5 '>Are people part of nature?</p>
                <p className='ml-12 text-3xl pb-5 font-bold'>We believe they are.</p> 
                
            </div> */}
        {/* <div className='pb-10 mb-50 justify-between items-center bg-green-600 w-[30vw] h-[40vh] text-3xl'> 
                <img className="w-[50vw] h-[40vh]" src="http://www.thesholatrust.org/wp-content/gallery/culture-and-conservation/p1030225.jpg" alt="banner"/>
            </div> */}
      </div>
      <div className="">
        <Link href="/market">
          <button className="w-full h-12 px-6 text-2xl text-indigo-100 transition-colors duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-green-500 mb-5">
            GO TO OUR MARKET PLACE
          </button>
        </Link>
        <div className="mt-30">
          <div className="text-[#183C28] text-3xl font-bold ml-10">
            Culture and Conservation
          </div>
          <div className="mt-2">
            <div className="text-black dark:text-white text-base text-justify mr-10 ml-10 pt-30">
              Indigenous communities across the world have played a significant
              role in conserving their natural world. Their lifestyles, cultural
              practices and spiritual belief systems, intentionally or
              otherwise, have resulted in a relatively harmonious balance and
              stability through centuries. With the advent of fossil fuels,
              industrialisation, ‘development’ and technology, in the last four
              hundred years, modern humans have changed the face of the earth in
              ways which were unimaginable in the 4000 years before them. In
              addition to the thousands of species now facing extinction,
              indigenous cultures are also on the endangered list, struggling to
              survive. The Gudalur valley is home to four distinct indigenous
              communities – the Kattunayakans, Bettakurumbas, Paniyas and
              Mullakurumbas. The influx of immigrants began about a 100 years
              ago, and has intensified considerably in he last few decades. The
              indigenous groups are now a small minority, with their culture,
              values and beliefs apparently disappearing as they merge into the
              mainstream. But can ‘culture’, evolved over thousands of years,
              really disappear in just a few generations? At The Shola Trust, we
              are trying to identify, understand and document the elements of
              indigenous cultural knowledge, practices and beliefs that have had
              or continue to have relevance for conservation. (We have captured
              stories that reflect the above elements
              www.cultureandconservation.wordpress.com )And also examine the
              role they could play in the years to come.
            </div>
            <div className="text-black dark:text-white text-base ml-10 mr-10 mt-2">
              Sacred Groves: It has been well documented that sacred groves
              often play a key role in biodiversity conservation, especially in
              highly modified landscapes. They maintain some habitat
              heterogeneity, sometimes acting as ‘stepping stones’ for long
              range dispersal of numerous species. This is especially true for a
              region like Gudalur, where communities have lost a considerable
              part of their ancestral domain to both the state (in the creation
              of forest plantations, particularly the Tantea corporation) and
              immigrants into the area who have appropriated their lands and
              converted it into monoculture plantations. We are working towards
              identifying such sacred forest patches for the Kattunayakan and
              Paniya communities, and examining the role they play in
              conservation. We work with the Adivasi Munnetra Sangam, and hope
              that this exercise will help the community legally protect these
              groves under the Forest Rights Act, and also raise the profile of
              the groves at a local level as a part of a larger informal
              ‘conservation movement’ across the country and world.
            </div>
          </div>
          <div className="text-[#183C28] text-3xl font-bold ml-10 mt-5">
            Education and Awareness
          </div>
          <div className="mt-2">
            <div className="text-black dark:text-white text-base text-justify mr-10 ml-10 pt-30">
              Today’s children will shape the future path of our planet, but our
              current ‘education system’ is doing a good job of putting blinkers
              on children, focusing only on passing exams and training them to
              not think. The entire focus is on getting a ‘good’ job, and making
              a lot of money. To consume more and more and ‘develop’ to western
              standards, and to lead (arguably) unhappy lives. Everyone loves to
              see tigers and elephants, but no one makes the connection between
              the animals, the forests they live in, the wider landscapes and
              ecosystems and human well being. And that over consumption and
              expanding human populations are taking over the entire planet.
            </div>
            <div className="text-black dark:text-white text-base ml-10 mr-10 mt-2">
              It is rather paradoxical that India is home to more than half the
              worlds wild Asian elephants and tigers, and also more than
              one-fifth the world’s human beings. Even with a population density
              of more than 350 people per square km (and rising), we have been
              able to allow for a wide range of animals to share space with us.
              This is largely because of a long history of cultural tolerance to
              animals and nature, which is sadly being rapidly lost as more
              people get ‘educated’ and India ‘develops’. We hope to try and
              make kids think about these connections before they get absorbed
              by the system. We have started ‘CAN Clubs’ (Children Act for
              Nature) in local schools, and arrange various trips into
              Mudumalai, along with a range of other activities for children.
              The primary aim is to ensure they have a good time, and also pick
              up something meaningful along the way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
