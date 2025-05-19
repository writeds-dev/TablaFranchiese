"use client"

import { useEffect, useState } from "react";
import Form from "./form";


export default function FranchiseForm(){

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    return <h1>{isClient && <Form/>}</h1>




}