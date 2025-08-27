import React from'react'
import Typography from'@mui/material/Typography'
import Paper from'@mui/material/Paper'
import Button from'@mui/material/Button'
export default function Reports(){const data={totalAgreements:182,delinquentPercent:6.6,totalPremiumFinanced:1750000};const downloadCSV=()=>{const rows=[['Metric','Value'],...Object.entries(data)];const csv=rows.map(r=>r.join(',')).join('\n');const blob=new Blob([csv],{type:'text/csv'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='report.csv';a.click();URL.revokeObjectURL(url)};return(<><Typography variant='h4' gutterBottom>Reports</Typography><Paper sx={{p:2,mb:2}}><Button variant='contained' onClick={downloadCSV}>Export CSV</Button></Paper><Paper sx={{p:2}}><pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data,null,2)}</pre></Paper></>) }
