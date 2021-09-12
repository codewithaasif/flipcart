


import { createContext } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import React from 'react'

const Templatecontext = createContext(null)

export const Templateprovider = ({ children }) => {
    const theme = createMuiTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
               }
            },
            MuiDialogContent:{
                root:{
                    padding:0,
                    '&:first-child':{paddingTop:0}
                }
            },
            MuiTableCell:{
                root:{
                    borderBottom:'none'
                }
            }
        }
    })

return (
    <Templatecontext.Provider>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </Templatecontext.Provider>
)
}

