import ProjectWrapper from "../components/ProjectWrapper";
import SocialLinks from "./SocialLinks";
import { useRouter } from 'next/router';
import { useState } from "react";
import IRLprojectsData from "../assets/IRLprojects.js"
import Image from "next/image";

export default function PostLayout({ children }) {
    const router = useRouter();
    const pageLink = router.pathname.split("/").pop();
    let project = IRLprojectsData.filter(project => project.pageLink == pageLink)[0];
    let [images, setImages] = useState({
        currentImage: project.images[0],
        otherImages: project.images.slice(1)
    })

    const imageChanger = (selectedImage) => {

        // remove selectedImage from otherImages, add the currentImage
        let newOtherImages = images.otherImages.filter(src => src != selectedImage).concat(images.currentImage);
        
        setImages({
            currentImage: selectedImage,
            otherImages: newOtherImages
        })

    }

    return (
        <ProjectWrapper pageTitle="test">
            <div className="z-20 flex flex-col items-center w-full px-6 md:items-stretch md:justify-center grow md:flex-row">
                
                <div className="flex flex-col items-center self-center w-1/3 gap-y-2 bg-white/90 h-fit">
                    <div className="relative w-4/5 h-96">
                        <Image
                        src={images.currentImage}
                        layout='fill'
                        objectFit="contain"
                        />
                    </div>
                    <div className="flex gap-x-2">
                        {images.otherImages.map((image, index) =>
                            <div 
                                className="cursor-pointer"
                                onClick={() => imageChanger(image)}
                            >
                                <Image
                                    key={index}
                                    src={image}
                                    width={56} 
                                    height={48} 
                                />
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="flex flex-col w-2/3 px-6 bg-white/90">
                    <h1 className="my-6 text-2xl font-bold text-center text-myred">
                        {project.title}
                    </h1>

                    <div className="flex flex-col justify-between h-full mx-6">
                        {children}
                        <div className="flex justify-center">
                            <SocialLinks />
                        </div>
                    </div>

                </div>
                
                
                
                
            </div>

            {/* <div className='fixed bottom-0'>
                    <SocialLinks />
                </div> */}

        </ProjectWrapper>
    )
}