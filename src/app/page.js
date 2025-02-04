import Image from "next/image";
import AcceuilLanding from "./components/AcceuilLanding";
import InProduction from "./components/Production";
import Landing from "./components/AcceuilLanding";
import ExpertiseComponent from "./components/ExpertComponent";
import ProjectSection from "./components/ProjectSection";
import fondImg from '@/app/public/fond logo Ascension agency 1.svg'


export default function Home() {
  return (
    <div>
      {/* <InProduction /> */}
      <Landing/>
      {/* <div className="  overflow-hidden">
      <Image 
        src={fondImg} className="absolute left-52 top-3/4 "
      />
      </div> */}

      <ExpertiseComponent/>
      <ProjectSection/>
    </div>
  );
}
