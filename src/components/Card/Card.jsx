import { checkDocument } from "@apollo/client/utilities";
import { useContext } from "react";
import { ThemeContext } from "../GraphQuerries/Theme";

const Card = ({children, ...attr}) => {
    
    const theme = useContext(ThemeContext)
    
    return ( 
        <div style={{
            backgroundColor: theme.foreground,
            color : theme.background,
        }} {...attr}>{children}</div>
    );
}
 
const CardImage = ({src, ...attr}) => {
    return (
        <img src={src} alt="" {...attr}/>
    )
} 

const CardDetail = ({children, ...attr}) => {
    return (
        <div {...attr}>{children}</div>
    )
} 

export {Card, CardImage, CardDetail}