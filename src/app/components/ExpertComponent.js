import React from "react";
import Image from "next/image";


export default function ExpertiseComponent(){
    return(
        <>
        <div className="flex justify-between mt-5 items-center">
            <div className="border h-0 w-1/5 border-accent"></div>

            <div>
                <h3 className="place-self-center text-accent">NOTRE EXPERTISE</h3>
            </div>

            <div className="border h-0 w-1/5 border-accent"></div>
        </div>

        <div className="mt-8 mx-8">
            <h3 className="text-titlesection my-4">Création audiovisuel</h3>
            <p className="text-sm">
                Une agence experte en audiovisuel, alliant production vidéo et photographie. Présente sur les événements, en entreprise ou pour des clips musicaux, notre équipe capte chaque instant avec créativité et précision. De la conception à la post-production, nous offrons des contenus visuels percutants et professionnels.
            </p>
        </div>

        <div className="mt-8 mx-8">
            <h3 className="text-titlesection my-4">Conception et développement de solution web</h3>
            <p className="text-sm">
            Spécialisés en création de sites et d’applications web, l’agence développe des solutions modernes et intuitives. Du design à la mise en ligne, chaque projet est conçu sur mesure pour garantir une expérience utilisateur optimale et répondre aux besoins spécifiques de chaque client.
            </p>
        </div>

        <div className="mt-8 mx-8">
            <h3 className="text-titlesection my-4">Communication</h3>
            <p className="text-sm">
                L’agence développe des stratégies sur mesure pour renforcer la présence en ligne des marques. Avec une community manager dédiée, elle crée du contenu engageant, anime les réseaux sociaux et optimise l’interaction avec la communauté pour maximiser l’impact.
            </p>
        </div>

        <div className= "text-center mt-8 mb-8 ">
            <a className="px-4 py-2 bg-accent text-background rounded-3xl" href="https://calendly.com/hauterville-dimitry/projet-audiovisuel">
                📞 Planifier un appel !
            </a>
         </div>
        </>
    )
}