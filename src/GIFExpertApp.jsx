import { useState } from "react"
import AddCategorie from "./components/AddCategorie"
import GifGrid from "./components/GifGrid"

export const GIFExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories])
    }


  return (
    <>
        <h1>GIF Expert App</h1>
        
        <AddCategorie 
            onNewCategory={ value => onAddCategory(value) }
         />

        {
            categories.map(category =>
                (
                    <GifGrid category={category} key={ category } />
                )
            )
        }
    </>
  )
}
