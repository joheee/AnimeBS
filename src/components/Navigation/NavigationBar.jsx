import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { THEME } from "../GraphQuerries/Theme"
import SearchComponent from "./SearchComponent"

const NavigationBar = ({curTheme, setCurTheme}) => {
    
  const [boolTheme, setBoolTheme] = useState([false, 'light'])
  const handleLightDarkTheme = () => {
    if(boolTheme[0] === true){
      setBoolTheme([!boolTheme[0], 'dark'])
      setCurTheme(THEME.dark)
    } else {
      setBoolTheme([!boolTheme[0], 'light'])
      setCurTheme(THEME.light)
    }
  }
  
  const [boolDropdown, setBoolDropdown] = useState(false)
  const DropdownContainer = () => {
    if(boolDropdown === true){
      return (
        <div 
          style={{
            backgroundColor: curTheme.foreground
          }}
        className="navigation-bar-left-item">
          <button 
            style={{
                backgroundColor: curTheme.background,
                border: 'none',
                color: curTheme.foreground
            }} className="navigation-bar-item"
            onClick={e => {
              handleLightDarkTheme()
            }}>{boolTheme[1]}</button>
            
            <button 
            style={{
              backgroundColor: curTheme.background,
              border: 'none',
              color: curTheme.foreground
            }} className="navigation-bar-item"
          onClick={e => {
            navigate(`/favourite/`)
            setBoolDropdown(false)
          }}>favourite</button>
            
            <button 
            style={{
              backgroundColor: curTheme.background,
              border: 'none',
              color: curTheme.foreground
            }} className="navigation-bar-item"
            onClick={e => {
              navigate(`/`)
              setBoolDropdown(false)
            }}>home</button>
          </div>
      ) 
    }
  }
  
    const navigate = useNavigate()
    return ( 
        <div
            style={{
                backgroundColor: curTheme.background,
                borderBottom: `1px solid ${curTheme.foreground}`
            }}
        className="navigation-bar-container">
            
            <button 
            style={{
              backgroundColor: 'rgba(1,1,1,0)',
              border: 'none',
              color: curTheme.foreground
            }}
            onClick={e => setBoolDropdown(!boolDropdown)}>click me</button>
            
            <DropdownContainer/>
            <SearchComponent/>
            
        </div>
    );
}
 
export default NavigationBar;