import React from "react";
import Image from "next/image";
import logoAscension from '@/app/public/LogoAscensionAgency.svg'
import fondAscension from '@/app/public/FondAscension.svg'
import forward from '@/app/public/Forward1.svg'

export default function AcceuilLanding(){

    return(
        <div>
            <div>
                <Image 
                src={fondAscension}
                alt="Logo de Ascension Agency"
                className="-z-20 absolute "
                />
            </div>
            <div className="w-full pt-40 place-items-center">
                <Image 
                src={logoAscension}
                alt="Logo de Ascension Agency"
                className="size-3/4"
                />
            </div>
            
            <div className="mx-5 pt-8">
                <h2 className="my-5 text-3xl">
                    Une image de marque à la hauteur de vos ambitions
                </h2>
                <p className=" text-lg">
                    Ascension Agency pour la création de votre contenu visuel, la conception de votre application web et la croissance de votre Chiffre d’affaires!
                </p>
                <a>
                    Contactez-nous
                </a>
            </div>
            <div>
                <a>
                    <Image 
                    src={forward}
                    alt="Suivant"
                    className=""
                    />
                </a>
            </div>
        </div>
    )
}