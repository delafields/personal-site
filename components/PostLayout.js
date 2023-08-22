import React from "react";
import ProjectWrapper from "../components/ProjectWrapper";
import { BuyButton } from "./BuyButton";
import SocialLinks from "./SocialLinks";
import { useRouter } from 'next/router';
import { useState } from "react";
import IRLprojectsData from "../assets/IRLprojects.js"
import shopItems from "../assets/shopItems";
import Image from "next/image";

export default function PostLayout({ children, type }) {
    const router = useRouter();
    const pageLink = router.pathname.split("/").pop();

    let itemData = type === 'projects' ? IRLprojectsData : shopItems;
    let item = itemData.filter(item => item.pageLink == pageLink)[0];
    let [images, setImages] = useState({
        currentImage: item.images ? item.images[0] : item.coverImgSrc,
        otherImages: item.images ? item.images.slice(1) : false
    })

    const imageChanger = (selectedImage) => {

        // remove selectedImage from otherImages, add the currentImage
        let newOtherImages = images.otherImages.filter(src => src != selectedImage).concat(images.currentImage);
        
        setImages({
            currentImage: selectedImage,
            otherImages: newOtherImages
        })

    }

    const ExtraImageContainer = () => (
        <>
            {images.otherImages.map((image, index) =>
                <div 
                    className="cursor-pointer"
                    onClick={() => imageChanger(image)}>
                    <Image
                        key={index}
                        src={image}
                        width={56} 
                        height={48}/>
                </div>
            )}
        </>
      )

    return (
        <ProjectWrapper pageTitle={item.title}>
            <div className="flex flex-col items-center w-full h-[75vh] px-6 mb-8 md:items-stretch md:justify-center grow md:flex-row">
                
                <div className="flex flex-col items-center w-full py-4 md:mt-12 md:w-1/3 rounded-2xl bg-noise md:gap-y-2 bg-white/90 h-fit">
                    
                    <div className="relative w-4/5 h-96">
                        <Image
                        src={images.currentImage}
                        layout='fill'
                        objectFit="contain"
                        />
                    </div>
                    
                    <div className="flex px-2 gap-x-2">
                        {images.otherImages ? <ExtraImageContainer/> : null
                    }
                    </div>
                
                </div>
                
                <div className="flex flex-col px-6 mx-2 mt-8 md:w-2/3 bg-white/90 md:mt-0">
                    
                    <h1 className="my-6 text-2xl font-bold text-center text-myred">
                        {item.title}
                    </h1>

                    <div className="flex flex-col justify-between h-full mx-6">

                        <div className="[&>a]:text-myred [&>a]:hover:opacity-60 [&>p]:my-4">
                            {type === 'shop' ? <div className="mt-4 mb-10 text-2xl font-bold">{item.product.price}</div> : null}
                            {children}
                            {type === 'shop' && item.product.size ? <div className="mt-12 italic">Size: {item.product.size}</div> : null}
                        </div>

                        {type === 'shop' ? <BuyButton {...item.product}/> : null}
                        
                        <div className="flex justify-center mt-8 mb-2 md:mt-0">
                            <SocialLinks />
                        </div>

                    </div>

                </div>
                
                
                
                
            </div>

        </ProjectWrapper>
    )
}