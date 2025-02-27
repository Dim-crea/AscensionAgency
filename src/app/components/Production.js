import React from "react";
import Image from "next/image";
import logoAscension from '@/app/public/LogoAscensionAgency.svg'
import fondAscension from '@/app/public/FondAscension.svg'
import instagram from '@/app/public/Instagram1.svg'
import whatsapp from '@/app/public/WhatsApp.svg'

export default function InProduction(){
    return(
         <div>
                    <div className="w-full pt-5 place-items-center">
                        <Image 
                        src={logoAscension}
                        alt="Logo de Ascension Agency"
                        className="h-auto"
                        />
                    </div>
                    
                    <div className="mx-5 pt-8 flex flex-col items-center">
                        <h2 className="my-5 text-3xl text-center">
                            Une image de marque à la hauteur de vos ambitions
                        </h2>

                        <p className="my-5">Site en préparation</p>
                        <div className="flex ">
                            <a href="https://wa.me/qr/7P7W6VFES7EYB1">
                            <Image
                            src={whatsapp}
                            className="h-10 "
                            />
                            </a>
                            <a href="https://www.instagram.com/ascensionagency34?igsh=MXU2Y3QzaW1pd2FjcQ==">
                            <Image
                            src={instagram}
                            className="h-10 "
                            />
                            </a>
                        </div>
                        
                    </div>
                </div>
    );
}