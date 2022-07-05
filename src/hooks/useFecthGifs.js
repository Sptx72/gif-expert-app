import { useState , useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFecthGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect( ()=> {
        getGifs(category)
            .then(newImages => {
                setIsLoading(false)
                setImages(newImages)
            })
    },[] )

    return {
        images,
        isLoading
    }
}
