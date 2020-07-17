export interface VideoData {
    url: string;
    title: string;
    description:string;
    imgPath:string;
}

export interface ProviderData{
    videos:VideoData[];
    posts:any
}

export interface HeroProps {
    title:string;
    message:string
}

export interface ProductProps {
    title:string;
    description:string;
    img:string;
    reverse?:boolean
}

export interface FruitStateProps extends TimerHook {
    show:boolean;
    image:string;
    
}

export interface TimerHook{
    time:number;
    setTime:React.Dispatch<React.SetStateAction<number>>
}

export interface ThumbnailProps {
    cover: string;
    title?: string;
    description?:string;
    slug:string;
    delay?:number | string | null;
    mini?:boolean

}