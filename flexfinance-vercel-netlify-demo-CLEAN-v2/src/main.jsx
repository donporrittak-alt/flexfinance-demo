import React from'react'
import{createRoot}from'react-dom/client'
import{BrowserRouter,Routes,Route,Navigate}from'react-router-dom'
import{ThemeProvider}from'@mui/material/styles'
import CssBaseline from'@mui/material/CssBaseline'
import theme from'./theme'
import AppLayout from'./components/AppLayout'
import Login from'./pages/Login'
import Dashboard from'./pages/Dashboard'
import Agreements from'./pages/Agreements'
import Payments from'./pages/Payments'
import Reports from'./pages/Reports'
const root=createRoot(document.getElementById('root'))
root.render(<ThemeProvider theme={theme}><CssBaseline/><BrowserRouter><Routes><Route path='/login' element={<Login/>}/><Route path='/' element={<AppLayout/>}><Route index element={<Dashboard/>}/><Route path='agreements' element={<Agreements/>}/><Route path='payments' element={<Payments/>}/><Route path='reports' element={<Reports/>}/></Route><Route path='*' element={<Navigate to='/'/>}/></Routes></BrowserRouter></ThemeProvider>)
