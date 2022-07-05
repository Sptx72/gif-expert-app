import GifItem from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

const GifGrid = ({category}) => {

    const {images, isLoading} = useFecthGifs(category);

    

    /**/

    return (
        <>
            {
                isLoading && (<p>Cargando...</p>)
            }
            <h3>{category}</h3>
            <ol>
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GifGrid