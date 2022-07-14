import './App.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './components/Home/Home';
import { THEME, ThemeContext } from './components/GraphQuerries/Theme';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import NavigationBar from './components/Navigation/NavigationBar';
import Favourite from './components/Favourite/Favourite';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});

export const DataContext = createContext()

function App() {
  
  const [saveData, setSaveData] = useState([])
  const [curTheme, setCurTheme] = useState(THEME.light)
  
  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={curTheme}>
        <DataContext.Provider value={[saveData, setSaveData]}>
          <BrowserRouter>
            <NavigationBar setCurTheme={setCurTheme} curTheme={curTheme}/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/detail/:id' element={<Detail/>}/>
                  <Route path='/favourite/' element={<Favourite/>}/>
              </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      
        </ThemeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
