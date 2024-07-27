import Image from "next/image";
import { useTranslation } from 'react-i18next';

export default function Home() {
  // const Home = () => {
  //   const { t, i18n } = useTranslation();
  
  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng);
  //   }
  return (
    <div className=''>
        <div className="">
            <div className='text-green-300 font-bold text-3xl absolute '>THE SHOLA ECOSYSTEM</div>
            <div className='absolute text-white text-xl mt-40 ml-5 text-justify mr-5'>
            A non-profit, Charitable Trust involved in nature conservation in the Nilgiri region of South India. A group of young people based in Gudalur, at the edge of the Mudumalai Tiger Reserve, who are keen on doing something to protect the natural world around us. Most of us have ‘regular’ jobs, but spend the better part of our time working on conservation. We believe everyone is a wildlife enthusiast, excited at the prospect of seeing an elephant or tiger, and we try to help channel this enthusiasm towards conservation.
            </div>
            <img className="w-[100vw] h-[100vh]" src="https://t3.ftcdn.net/jpg/00/60/77/96/360_F_60779662_NxwBIhQ8kIXeJZkSAq7pSZIf8F32WFVj.jpg" alt="banner"/>
        </div>
        <div className='flex mb-10'>
            <div className='pt-10 pb-10 justify-between items-center mt-200 ml-10 bg-green-300 w-[30vw] h-[40vh] text-3xl'>
                <p className='ml-20 text-5xl pb-5 font-bold'>Save our Sholas</p>
            </div>
            <div className='pt-10 pb-10 justify-between items-center bg-green-500 w-[30vw] h-[40vh] text-xl'>
                <p className='ml-12 text-2xl pb-5 '>Are people part of nature?</p>
                <p className='ml-12 text-3xl pb-5 font-bold'>We believe they are.</p> 
                
            </div>
            <div className='pb-10 mb-50 justify-between items-center bg-green-600 w-[30vw] h-[40vh] text-3xl'> 
                <img className="w-[50vw] h-[40vh]" src="http://www.thesholatrust.org/wp-content/gallery/culture-and-conservation/p1030225.jpg" alt="banner"/>
            </div>
        </div>
        <div className='mb-30'>
            <div className='text-[#183C28] text-3xl font-bold ml-10'>
            Culture and Conservation
            </div>
            <div className='mt-2'>
                <div className='text-black text-base text-justify mr-10 ml-10 pt-30'>
                Indigenous communities across the world have played a significant role in conserving their natural world. Their lifestyles, cultural practices and spiritual belief systems, intentionally or otherwise, have resulted in a relatively harmonious balance and stability through centuries. With the advent of fossil fuels, industrialisation, ‘development’ and technology, in the last four hundred years, modern humans have changed the face of the earth in ways which were unimaginable in the 4000 years before them. In addition to the thousands of species now facing extinction, indigenous cultures are also on the endangered list, struggling to survive.
                The Gudalur valley is home to four distinct indigenous communities – the Kattunayakans, Bettakurumbas, Paniyas and Mullakurumbas. The influx of immigrants began about a 100 years ago, and has intensified considerably in he last few decades. The indigenous groups are now a small minority, with their culture, values and beliefs apparently disappearing as they merge into the mainstream.
                But can ‘culture’, evolved over thousands of years, really disappear in just a few generations?
                At The Shola Trust, we are trying to identify, understand and document the elements of indigenous cultural knowledge, practices and beliefs that have had or continue to have relevance for conservation. (We have captured stories that reflect the above elements www.cultureandconservation.wordpress.com )And also examine the role they could play in the years to come.
                </div>
                <div className='text-black text-base ml-10 mr-10 mt-2'>
                Sacred Groves: It has been well documented that sacred groves often play a key role in biodiversity conservation, especially in highly modified landscapes. They maintain some habitat heterogeneity, sometimes acting as ‘stepping stones’ for long range dispersal of numerous species. This is especially true for a region like Gudalur, where communities have lost a considerable part of their ancestral domain to both the state (in the creation of forest plantations, particularly the Tantea corporation) and immigrants into the area who have appropriated their lands and converted it into monoculture plantations.
                We are working towards identifying such sacred forest patches for the Kattunayakan and Paniya communities, and examining the role they play in conservation. We work with the Adivasi Munnetra Sangam, and hope that this exercise will help the community legally protect these groves under the Forest Rights Act, and also raise the profile of the groves at a local level as a part of a larger informal ‘conservation movement’ across the country and world.
                </div>
            </div>
            <div className='text-[#183C28] text-3xl font-bold ml-10 mt-5'>
            Education and Awareness
            </div>
            <div className='mt-2'>
                <div className='text-black text-base text-justify mr-10 ml-10 pt-30'>
                Today’s children will shape the future path of our planet, but our current ‘education system’ is doing a good job of putting blinkers on children, focusing only on passing exams and training them to not think. The entire focus is on getting a ‘good’ job, and making a lot of money. To consume more and more and ‘develop’ to western standards, and to lead (arguably) unhappy lives.

                Everyone loves to see tigers and elephants, but no one makes the connection between the animals, the forests they live in, the wider landscapes and ecosystems and human well being. And that over consumption and expanding human populations are taking over the entire planet.
                </div>
                <div className='text-black text-base ml-10 mr-10 mt-2'>
                It is rather paradoxical that India is home to more than half the worlds wild Asian elephants and tigers, and also more than one-fifth the world’s human beings. Even with a population density of more than 350 people per square km (and rising), we have been able to allow for a wide range of animals to share space with us. This is largely because of a long history of cultural tolerance to animals and nature, which is sadly being rapidly lost as more people get ‘educated’ and India ‘develops’.

                We hope to try and make kids think about these connections before they get absorbed by the system. We have started ‘CAN Clubs’ (Children Act for Nature) in local schools, and arrange various trips into Mudumalai, along with a range of other activities for children. The primary aim is to ensure they have a good time, and also pick up something meaningful along the way.
                </div>
            </div>
        </div> 
    </div>

    // <div className=''>
    //   <div className=''>
    //     <div className="flex justify-end pr-2">
    //       <select className='text-black p-2 rounded absolute' onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
    //         <option value="en">English</option>
    //         <option value="hi">Hindi</option>
    //         <option value="ta">Tamil</option>
    //         <option value="kn">Kannada</option>
    //         <option value="fr">Malayalam</option>
    //       </select>
    //     </div>
    //     <div className='text-green-300 font-bold text-3xl absolute top-20 left-5'>
    //       {t('THE SHOLA ECOSYSTEM')}
    //     </div>
    //     <div className='absolute text-white text-xl top-40 left-5 right-5 text-justify'>
    //       {t('A non-profit, Charitable Trust involved in nature conservation in the Nilgiri region of South India. A group of young people based in Gudalur, at the edge of the Mudumalai Tiger Reserve, who are keen on doing something to protect the natural world around us. Most of us have ‘regular’ jobs, but spend the better part of our time working on conservation. We believe everyone is a wildlife enthusiast, excited at the prospect of seeing an elephant or tiger, and we try to help channel this enthusiasm towards conservation.')}
    //     </div>
    //     <img className="w-[100vw] h-[100vh]" src="https://t3.ftcdn.net/jpg/00/60/77/96/360_F_60779662_NxwBIhQ8kIXeJZkSAq7pSZIf8F32WFVj.jpg" alt="banner"/>
    //   </div>
    //   <div className='flex justify-between mb-10 mx-10'>
    //     <div className='bg-green-300 w-[30vw] h-[40vh] flex flex-col justify-center items-center p-10'>
    //       <p className='text-4xl font-bold'>{t('Save our Sholas')}</p>
    //     </div>
    //     <div className='bg-green-500 w-[30vw] h-[40vh] flex flex-col justify-center items-center p-10'>
    //       <p className='text-2xl pb-5'>{t('"Are people part of nature?')}</p>
    //       <p className='text-2xl font-bold'>{t('We believe they are."')}</p>
    //     </div>
    //     <div className='bg-green-600 w-[30vw] h-[40vh] flex justify-center items-center'>
    //       <img className="w-full h-full object-cover" src="http://www.thesholatrust.org/wp-content/gallery/culture-and-conservation/p1030225.jpg" alt="conservation"/>
    //     </div>
    //   </div>
    //   <div className='pl-20 pb-30'>
    //     <div className='absolute font-bold text-center text-5xl text-white'>MARKET PLACE</div>
    //     <img className='w-[85vw] h-[50vh]' src='https://www.indiafilings.com/learn/wp-content/uploads/2019/07/Export-Market-Development-Assistance-Scheme-EMDA-for-Jute-Products.jpg' alt='market'/>
    //   </div>
    //   <div className='mx-10 mt-10'>
    //     <div className='text-[#183C28] text-3xl font-bold mb-5'>
    //       {t('Culture and Conservation')}
    //     </div>
    //     <div className='text-black text-base text-justify'>
    //       {t('Indigenous communities across the world have played a significant role in conserving their natural world. Their lifestyles, cultural practices and spiritual belief systems, intentionally or otherwise, have resulted in a relatively harmonious balance and stability through centuries. With the advent of fossil fuels, industrialisation, ‘development’ and technology, in the last four hundred years, modern humans have changed the face of the earth in ways which were unimaginable in the 4000 years before them. In addition to the thousands of species now facing extinction, indigenous cultures are also on the endangered list, struggling to survive. The Gudalur valley is home to four distinct indigenous communities – the Kattunayakans, Bettakurumbas, Paniyas and Mullakurumbas. The influx of immigrants began about a 100 years ago, and has intensified considerably in he last few decades. The indigenous groups are now a small minority, with their culture, values and beliefs apparently disappearing as they merge into the mainstream. But can ‘culture’, evolved over thousands of years, really disappear in just a few generations? At The Shola Trust, we are trying to identify, understand and document the elements of indigenous cultural knowledge, practices and beliefs that have had or continue to have relevance for conservation. (We have captured stories that reflect the above elements www.cultureandconservation.wordpress.com )And also examine the role they could play in the years to come.')}
    //     </div>
    //     <div className='text-black text-base mt-5'>
    //       {t('Sacred Groves: It has been well documented that sacred groves often play a key role in biodiversity conservation, especially in highly modified landscapes. They maintain some habitat heterogeneity, sometimes acting as ‘stepping stones’ for long range dispersal of numerous species. This is especially true for a region like Gudalur, where communities have lost a considerable part of their ancestral domain to both the state (in the creation of forest plantations, particularly the Tantea corporation) and immigrants into the area who have appropriated their lands and converted it into monoculture plantations. We are working towards identifying such sacred forest patches for the Kattunayakan and Paniya communities, and examining the role they play in conservation. We work with the Adivasi Munnetra Sangam, and hope that this exercise will help the community legally protect these groves under the Forest Rights Act, and also raise the profile of the groves at a local level as a part of a larger informal ‘conservation movement’ across the country and world.')}
    //     </div>
    //     <div className='text-[#183C28] text-3xl font-bold mt-10'>
    //       {t('Education and Awareness')}
    //     </div>
    //     <div className='text-black text-base mt-5'>
    //       {t('Today’s children will shape the future path of our planet, but our current ‘education system’ is doing a good job of putting blinkers on children, focusing only on passing exams and training them to not think. The entire focus is on getting a ‘good’ job, and making a lot of money. To consume more and more and ‘develop’ to western standards, and to lead (arguably) unhappy lives. Everyone loves to see tigers and elephants, but no one makes the connection between the animals, the forests they live in, the wider landscapes and ecosystems and human well being. And that over consumption and expanding human populations are taking over the entire planet.')}
    //     </div>
    //     <div className='text-black text-base mt-5'>
    //       {t('It is rather paradoxical that India is home to more than half the worlds wild Asian elephants and tigers, and also more than one-fifth the world’s human beings. Even with a population density of more than 350 people per square km (and rising), we have been able to allow for a wide range of animals to share space with us. This is largely because of a long history of cultural tolerance to animals and nature, which is sadly being rapidly lost as more people get ‘educated’ and India ‘develops’. We hope to try and make kids think about these connections before they get absorbed by the system. We have started ‘CAN Clubs’ (Children Act for Nature) in local schools, and arrange various trips into Mudumalai, along with a range of other activities for children. The primary aim is to ensure they have a good time, and also pick up something meaningful along the way.')}
    //     </div>
    //   </div>
    // </div>
  );
}
