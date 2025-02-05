import React from "react";
import Image from "next/image";
import logoAscension from '@/app/public/LogoAscensionAgency.svg'
import fondAscension from '@/app/public/FondAscension.svg'
import forward from '@/app/public/Forward1.svg'



export default function Acceuil(){
    return(
         <div>
                    <div>
                        <Image 
                        src={fondAscension}
                        alt="Fond d'acceuil du site"
                        className="-z-20 absolute "
                        />
                        <div className=" relative bottom-0 left-0 right-0 h-2/5 bg-slate-600">
                        </div>
                    </div>
                    <div className="w-full pt-28 place-items-center">
                        <Image 
                        src={logoAscension}
                        alt="Logo de Ascension Agency"
                        className="size-3/4"
                        />
                    </div>
                    
                    <div className=" ">
                        <div className="bg-gradient-to-t from-background to-transparent h-20 "></div>
                        <h2 className="mb-5 -mt-14 text-4xl text-center">
                            Votre présence numérique <br/>au niveau de vos ambitions
                        </h2>
                        <p className=" text-sm mx-8">
                        Ascension Agency est votre partenaire stratégique pour propulser votre entreprise. Spécialisés en audio visuel, conception de sites web, et génération de nouveaux clients, nous vous aidons à renforcer votre présence digitale et à atteindre vos objectifs. Ensemble, transformons vos ambitions en succès concrets et durables.
                        </p>
                    </div>
                    <div className= "text-center mt-8 mb-8 ">
                        <a className="px-4 py-2 bg-accent text-background rounded-3xl" href="https://calendly.com/hauterville-dimitry/projet-audiovisuel">
                        🚀 Discutons de votre projet !
                        </a>
                    </div>
                </div>
    )
}