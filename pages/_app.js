import"../public/assets/styles/Globals.css";
import React,{useState} from "react";
import { ThemeProvider } from "styled-components";
import SideBar from "../Components/Global/SideBar";
import ToggleTheme from "../Components/Global/ToggleTheme";


const LightTheme={
  pageBackground:'white',
  titleColor:"#000000",
}
const DarkTheme={
  pageBackground:'#171717',
  titleColor:"#ffffff",
}
const themes={
  light:LightTheme,
  dark:DarkTheme
}
export default function MyApp({Component,pageProps}){
  const [theme,setTheme]=useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
const changeTheme=()=>{
  if(theme==='light'){
    setTheme('dark')
  }else{
    setTheme('light')
  }
}
    return(
      <SideBar>
        <ThemeProvider theme={themes[theme]}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
          <Component theme={theme} changeTheme={()=>changeTheme()} setTheme={setTheme} {...pageProps} />
      </div>
      <ToggleTheme theme={theme} changeTheme={changeTheme}></ToggleTheme>
      </ThemeProvider>
      </SideBar>
    )
  }

