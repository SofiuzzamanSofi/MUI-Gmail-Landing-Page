import { colors } from '@mui/material'
import { PaletteColorOptions, Theme, ThemeOptions, createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string
        }
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color']
        }
    }

    interface Palette {
        neutral?: PaletteColor
    }

    interface PaletteOptions {
        neutral?: PaletteColorOptions
    }

    interface PaletteColor {
        darker?: string
    }

    interface SimplePaletteColorOptions {
        darker?: string
    }
}

const theme = createTheme({
    components: {
        MuiButton: {

        }
    },
    status: {
        danger: "#e53e3e",
    },
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: colors.grey[900],
            contrastText: '#fff',
        },
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },

    },
})

export default theme;