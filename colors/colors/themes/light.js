const colors = require('tailwindcss/colors');
const { flattenColors } = require('./utils/index')
const light = {
    /**
     * Primary
     */
    primary: {
        default: colors.indigo[500],
        focus: colors.indigo[600],
        content: colors.white
    },
    'primary-1': {
        default: colors.indigo[50],
        focus: colors.indigo[100],
        content: colors.indigo[900]
    },
    'primary-2': {
        default: colors.indigo[200],
        focus: colors.indigo[300],
        content: colors.indigo[900]
    },
    'primary-3': {
        default: colors.indigo[400],
        focus: colors.indigo[600],
        content: colors.white
    },
    'primary-4': {
        default: colors.indigo[700],
        focus: colors.indigo[800],
        content: colors.white
    },
    'primary-5': {
        default: colors.indigo[900],
        focus: colors.indigo[900],
        content: colors.white
    },
    /**
     * Secondary
     */
    secondary: {
        default: colors.pink[500],
        focus: colors.pink[600],
        content: colors.white
    },
    'secondary-1': {
        default: colors.pink[50],
        focus: colors.pink[100],
        content: colors.pink[900]
    },
    'secondary-2': {
        default: colors.pink[200],
        focus: colors.pink[300],
        content: colors.pink[900]
    },
    'secondary-3': {
        default: colors.pink[400],
        focus: colors.pink[600],
        content: colors.white
    },
    'secondary-4': {
        default: colors.pink[700],
        focus: colors.pink[800],
        content: colors.white
    },
    'secondary-5': {
        default: colors.pink[900],
        focus: colors.pink[900],
        content: colors.white
    },
    /**
     * Neutral & Base
     */
    "neutral": "#CBD5E1",//"#3d4451",
    "neutral-focus": "#94A3B8",//"#2a2e37",
    "neutral-content": "#1E293B",//"#ffffff",
    "base-1": "#ffffff",
    "base-2": "#F8FAFC",
    "base-3": "#F1F5F9",
    "base-content": "#1f2937",
    /**
     * info
     */
    info: {
        default: colors.sky[500],
        focus: colors.sky[600],
        content: colors.white
    },
    'info-1': {
        default: colors.sky[50],
        focus: colors.sky[100],
        content: colors.sky[900]
    },
    'info-2': {
        default: colors.sky[200],
        focus: colors.sky[300],
        content: colors.sky[900]
    },
    'info-3': {
        default: colors.sky[400],
        focus: colors.sky[600],
        content: colors.white
    },
    'info-4': {
        default: colors.sky[700],
        focus: colors.sky[800],
        content: colors.white
    },
    'info-5': {
        default: colors.sky[900],
        focus: colors.sky[900],
        content: colors.white
    },
    /**
     * success
     */
    success: {
        default: colors.emerald[500],
        focus: colors.emerald[600],
        content: colors.white
    },
    'success-1': {
        default: colors.emerald[50],
        focus: colors.emerald[100],
        content: colors.emerald[900]
    },
    'success-2': {
        default: colors.emerald[200],
        focus: colors.emerald[300],
        content: colors.emerald[900]
    },
    'success-3': {
        default: colors.emerald[400],
        focus: colors.emerald[600],
        content: colors.white
    },
    'success-4': {
        default: colors.emerald[700],
        focus: colors.emerald[800],
        content: colors.white
    },
    'success-5': {
        default: colors.emerald[900],
        focus: colors.emerald[900],
        content: colors.white
    },
    /**
     * warning
     */
    warning: {
        default: colors.yellow[500],
        focus: colors.yellow[600],
        content: colors.white
    },
    'warning-1': {
        default: colors.yellow[50],
        focus: colors.yellow[100],
        content: colors.yellow[900]
    },
    'warning-2': {
        default: colors.yellow[200],
        focus: colors.yellow[300],
        content: colors.yellow[900]
    },
    'warning-3': {
        default: colors.yellow[400],
        focus: colors.yellow[600],
        content: colors.white
    },
    'warning-4': {
        default: colors.yellow[700],
        focus: colors.yellow[800],
        content: colors.white
    },
    'warning-5': {
        default: colors.yellow[900],
        focus: colors.yellow[900],
        content: colors.white
    },
    /**
     * error
     */
    error: {
        default: colors.red[500],
        focus: colors.red[600],
        content: colors.white
    },
    'error-1': {
        default: colors.red[50],
        focus: colors.red[100],
        content: colors.red[900]
    },
    'error-2': {
        default: colors.red[200],
        focus: colors.red[300],
        content: colors.red[900]
    },
    'error-3': {
        default: colors.red[400],
        focus: colors.red[600],
        content: colors.white
    },
    'error-4': {
        default: colors.red[700],
        focus: colors.red[800],
        content: colors.white
    },
    'error-5': {
        default: colors.red[900],
        focus: colors.red[900],
        content: colors.white
    },
    /**
     * Other Styles and properties
     *
     */
    "--rounded-box": "1rem",
    "--rounded-btn": "0.25rem",
    "--rounded-badge": "0.2rem",
    "--animation-btn": "0.25s",
    "--animation-input": ".4s",
    "--padding-card": "1.5rem",
    "--btn-text-case": "uppercase",
    "--btn-focus-scale": "0.95",
    "--navbar-padding": ".5rem",
    "--border-btn": "1px",
    "--tab-border": "1px",
    "--tab-radius": "0.5rem",
    "--tab-spacer": "0.5rem",
    "--focus-ring": "2px",
    "--focus-ring-offset": "2px",
    "--glass-opacity": "30%",
    "--glass-border-opacity": "10%",
    "--glass-reflex-degree": "100deg",
    "--glass-reflex-opacity": "10%",
    "--glass-blur": "40px",
    "--glass-text-shadow-opacity": "5%",
}
module.exports = flattenColors(light)
