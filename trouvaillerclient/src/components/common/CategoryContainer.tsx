'use client'
import { useEffect, useState } from "react"
import axiosInstance from "../../../axiosInstance"
import { CategorySectionTemp } from "./CategorySectionTemp"



export const CategoryContainer = () => {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        async function getCategories() {
            await axiosInstance.get('/category/packages')
                .then(res => {
                    setCategory(res.data)
                    console.log(category)
                })
                .catch(err => console.log(err))
            }

            getCategories()



    },[])



    return(
        <div className="mt-20">
            {category && category.slice(1)?.map((item,index)=>(
                <CategorySectionTemp item={item}  key={index}/>
            ))}
        </div>
    )
}