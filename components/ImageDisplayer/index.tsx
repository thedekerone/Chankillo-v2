import React, {FC,useState, Dispatch, SetStateAction} from 'react'
import { Wrapper } from 'styles/Wrapper'
import { AbsoluteImage} from "./styles"
export const ImageDisplayer:FC<{imgSrc:string[]}> = ({imgSrc}) => {
    const [current, setCurrent] = useState(1)
    const [dir, setDir] = useState<boolean>(true)

    const moveSlide=(cg)=>{

            if(cg==true){
                current>0?setCurrent(current-1):setCurrent(imgSrc.length-1);
            }else{
                current<imgSrc.length-1?setCurrent(current+1):setCurrent(0)
            }
        
    }

    return (
       
        <React.Fragment>
            <Wrapper overflow="hidden"  position="relative" width="100%" height="0" padding="60% 0 0 0" >
                {imgSrc.map((el,i)=>{
                     return  <AbsoluteImage  key={el+i} show={current==i} pos={i<current} src={el}></AbsoluteImage>
                })}
                
            </Wrapper>
            <Wrapper  flex margin="1rem 0" justifyContent="space-between">
                    <Wrapper onClick={()=>moveSlide(true)}> <strong>PREVIEWS</strong> </Wrapper>
                    <Wrapper onClick={()=>moveSlide(false)}><strong>NEXT</strong></Wrapper>
                </Wrapper>
        </React.Fragment>
    )
}
