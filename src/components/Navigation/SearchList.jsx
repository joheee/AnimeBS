import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { ThemeContext } from "../GraphQuerries/Theme";

const SearchList = (props) => {
    const retrieveData = useContext(DataContext)
    const theme = useContext(ThemeContext)
    const filterData = retrieveData[0].filter(el => {
        if(props.input !== ''){
            return el.title.romaji.toLowerCase().includes(props.input)
        } else {
            return el
        }
    })
    console.log(filterData)
    if(filterData.length !== 0){
        return (
            filterData.map(item => (
                <Link style={{
                    textDecoration: 'none',
                    color: theme.foreground
                }} key={item.id} to={`/detail/${item.id}`} >
                    <div 
                        style={{
                            backgroundColor:theme.background
                        }}
                    className='navigation-bar-search-list-item'>
                        {item.title.romaji}
                    </div>
                </Link>
            ))
        )
    }
}
 
export default SearchList