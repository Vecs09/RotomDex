import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container'
import NavBar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { makeStyles } from '@mui/material'
import Content from './components/Content'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className='application' maxWidth="100%">
        <NavBar/>
        <Container className='body' sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',maxWidth:{xs:'90%',sm:'80%',md:'70%',lg:'70%',xl:'65%'}}}>
          <Container className='search-bar' sx={{marginTop:'50px'}}>
            <SearchBar/>
          </Container>
          <Content/>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
