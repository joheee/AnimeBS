import { useContext } from "react";
import { DataContext } from "../../App";
import CardDetail from "../Detail/CardDetail";
import { ThemeContext } from "../GraphQuerries/Theme";

const Favourite = () => {
    
    
    const theme = useContext(ThemeContext)
    const retrieveData = useContext(DataContext)
    
    let filterData = []
    if(localStorage.getItem('favourites') !== null){
        filterData = retrieveData[0].filter(data => {
            return JSON.parse(localStorage.getItem('favourites')).includes(data.id)})
    }
    
    if(filterData.length != 0){
        return (
            <div style={{
            }}className="card-favourite-container">
                
                <div style={{
                    position: 'fixed',
                    backgroundColor: theme.background,
                    height: '100vh',
                    width: '100vw',
                    top: '0',
                    left: '0',
                    zIndex: '-10'
                }}></div>
                
                {
                    filterData.map(data => (
                        <CardDetail theme={theme} data={data} key={data.id}/>
                    ))
                }
            </div>
        )
    }
}
 
export default Favourite;