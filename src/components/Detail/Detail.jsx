import { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { DataContext } from '../../App';
import { ThemeContext } from '../GraphQuerries/Theme';
import CardDetail from './CardDetail';


const Detail = () => {
    
    const {id} = useParams()
    const retrieveData = useContext(DataContext)
    const theme = useContext(ThemeContext)
    
    return ( 
        <div
        style={{
            backgroundColor: theme.background,
            height:'100vh'
        }}className="card-detail-container">
            
    {retrieveData[0].map(data => {
        if (data.id == id) return (
            <CardDetail theme={theme} data={data} key={data.id}/>
        )
    })}
</div>
            
    );
}
 
export default Detail;