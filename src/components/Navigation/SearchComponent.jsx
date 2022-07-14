import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import { ThemeContext } from "../GraphQuerries/Theme";
import SearchList from "./SearchList";

const SearchComponent = () => {
    
    const theme = useContext(ThemeContext)
    const retrieveData = useContext(DataContext)
    const navigate = useNavigate()
    
    const [searchInput, setSearchInput] = useState('')
    const handleSearchInput = (e) => {
        let lowerCase = e.target.value.toLowerCase()
        setSearchInput(lowerCase)
    }
    const filterData = retrieveData[0].filter(el => {
      if(searchInput !== ''){
          return el.title.romaji.toLowerCase().includes(searchInput)
      } else {
          return el
      }
    })
    
    const handleSearchToDetail = () => {
      if(filterData.length === 1){
        navigate(`/detail/${filterData[0].id}`)
      } else alert('need to be more specific')
    }
    
    const [boolPopUpSearchList, setBoolPopUpSearchList] = useState(false)
    const handlePopUpInput = () => {
        setBoolPopUpSearchList(!boolPopUpSearchList)
    }
    
    useEffect(() => {
      if(searchInput !== '') setBoolPopUpSearchList(true)
      else setBoolPopUpSearchList(false)
    },[searchInput])
    
    return ( 
        <div className="navigation-bar-search-item">
          <input 
            style={{
              backgroundColor: theme.foreground,
              color: theme.background
            }}
          type="text" name="" id="" className='navigation-bar-search-input' onChange={handleSearchInput} onClick={handlePopUpInput}/>
          <div
            style={{
              backgroundColor: theme.foreground,
              color: theme.background,
              borderLeft: `1px solid ${theme.background}`
            }}
          className="navigation-bar-search-button" onClick={e => handleSearchToDetail()}>search</div>
            
            {
              boolPopUpSearchList ? 
              <div
                  style={{
                      backgroundColor: theme.foreground,
                      color: theme.background
                  }}
              className="navigation-bar-search-list-container">
                  <SearchList input={searchInput} setInactive={setBoolPopUpSearchList}/>
              </div>
              :
              null
            }
            
        </div>
    );
}
 
export default SearchComponent;