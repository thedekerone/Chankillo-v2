import React from 'react'
import { Wrapper } from 'styles/Wrapper'
import {Paragraph, ImgGrid, Img} from "./styles"
import carlos from "gallery_files/carlos.json"
import cesar from "gallery_files/cesar.json"
import oscar from "gallery_files/oscar.json"
import efer from "gallery_files/efer.json"
import dago from "gallery_files/dago.json"
import william from "gallery_files/william.json"
import williampalta from "gallery_files/williampalta.json"
export const About = () => {
    return (
        <Wrapper padding="13rem 1rem 0 " maxWidth="1200px" width="100%" margin="0 auto">
                <h1>What is Chankillo Farmers?</h1>
                <Wrapper margin="1.5rem 0">
                    <Paragraph>
                        We are Farmers, Producers of Mango and Avocado with more than 12 and 8 years of experience respectively

                        We have GLOBALG.A.P. Certification , Also according to market requirements

                        Located in the San Rafael sector San Francisco Alto Casma Zone, 120 meters above sea level up to 400 meters above sea level Chile Zone, Buenavista Zone, Pampa de llama Zone,

                        Mango 98 to 100 Hectares Approx. 2,000 tons

                        Production Window February 20 End of March

                        Avocado 30 Hectares Approx. 500 Tons in growth

                        Production window Mid March to April 15
                    </Paragraph>
                    <ImgGrid margin="4rem 0">
                        {carlos.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={carlos.base_url+el.file_path} alt=""/></Img>
                        })}
                        {oscar.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={oscar.base_url+el.file_path} alt=""/></Img>
                        })}
                        {cesar.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={cesar.base_url+el.file_path} alt=""/></Img>
                        })}
                        {efer.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={efer.base_url+el.file_path} alt=""/></Img>
                        })}
                        {william.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={william.base_url+el.file_path} alt=""/></Img>
                        })}
                        {dago.files.slice(0,8).map(el=>{
                            return <Img key={el.id}><img width="100%" src={dago.base_url+el.file_path} alt=""/></Img>
                        })}
                    </ImgGrid>
                </Wrapper>
            </Wrapper>
    )
}
