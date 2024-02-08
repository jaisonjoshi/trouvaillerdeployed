'use client'
import { useEffect, useState } from "react"
import axiosInstance from "../../../axiosInstance"
import { CategorySectionTemp } from "./CategorySectionTemp"



export const CommonCategoryContainer:React.FC<{data:any}> = ({data}) => {
    const [item, setItem] = useState({})

    useEffect(()=>{
        async function getPackages() {
            await axiosInstance.get(data.url)
                .then(res => {
                    console.log(res.data, "hello")
                    setItem({
                        name: data.title,
                        description: data.description,
                        packages: res.data
                    })
                })
                .catch(err => console.log(err))
            }

            getPackages()



    },[])



    return(
        <div className="mt-4">
           
               <CategorySectionTemp item={item} />
            
        </div>
    )
}