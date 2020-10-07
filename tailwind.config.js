module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px'
    },
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      purple: {
        light: '#943CFF',
        dark: '#7F2CF3'
      },
      pink: '#ED72E2',
      link: '#008EFF',
      gray: {
        100: '#F7FAFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C'
      },
      utility: {
        blue: '#0076FF',
        red: '#EF3D57',
        gold: '#FFCA28',
        green: '#72CE7B'
      }
    },
    spacing: {
      '0': '0',
      '1/2': '0.4rem',
      '1': '0.8rem',
      '2': '1.6rem',
      '3': '2.4rem',
      '4': '3.2rem',
      '5': '4rem',
      '6': '4.8rem',
      '7': '5.6rem',
      '8': '6.4rem',
      '9': '7.2rem',
      '10': '8rem',
      '11': '8.8rem',
      '12': '9.6rem',
      '13': '10.4rem',
      '14': '11.2rem',
      '15': '12rem',
      '16': '12.8rem',
      '17': '13.6rem',
      '18': '14.4rem',
      '19': '15.2rem',
      '20': '16rem',
      '21': '16.8rem',
      '22': '17.6rem',
      '23': '18.4rem',
      '24': '19.2rem',
      '25': '20rem'
    },
    fontFamily: {
      maax: ['maax-rounded', '-apple-system', 'Arial', 'sans-serif'],
      body: ['Plex', '-apple-system', 'Arial', 'sans-serif'],
      code: ['Plex Mono', 'monospace', 'serif']
    },
    fontSize: {
      sm: ['1.4rem', '2.4rem'],
      base: ['1.6rem', '3.2rem'],
      lg: ['1.8rem', '3.2rem'],
      xl: ['2rem', '4rem'],
      '2xl': ['2.4rem', '4rem'],
      '3xl': ['3rem', '4.8rem'],
      '4xl': ['3.6rem', '5.6rem'],
      '5xl': ['4.8rem', '7.2rem'],
      '6xl': ['6.4rem', '9.6rem']
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700
    },
    letterSpacing: {
      '03': '0.03rem',
      '1': '0.1rem',
      '2': '0.2rem',
      '3': '0.3rem',
      '4': '0.4rem'
    },
    lineHeight: {
      '3': '2.4rem',
      '4': '3.2rem',
      '5': '4rem',
      '6': '4.8rem',
      '7': '5.6rem',
      '8': '6.4rem',
      '9': '7.2rem'
    },
    borderRadius: {
      '0': '0',
      '1/2': '0.4rem',
      '1': '0.8rem',
      '2': '1.6rem',
      '3': '2.4rem',
      full: '100%'
    },
    boxShadow: {
      base: '0px 1px 3px rgba(74, 74, 139, 0.1), 0px 1px 2px rgba(74, 74, 139, 0.06)',
      xl: '0px 10px 10px rgba(74, 74, 139, 0.04), 0px 20px 25px rgba(74, 74, 139, 0.1)',
      '2xl': '0px 25px 50px rgba(74, 74, 139, 0.25)',
    },
    container: {
      center: true,
      padding: '1.6rem'
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '20': '0.2',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '80': '0.8',
      '90': '0.9',
      '100': '1'
    },
    maxWidth: {
      none: 'none',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    transitionDuration: {
      '0': '0ms',
      '150': '150ms',
      '250': '250ms',
      '375': '375ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '2000': '2000ms'
    },
    transitionDelay: {
      '0': '0ms',
      '150': '150ms',
      '250': '250ms',
      '375': '375ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '2000': '2000ms'
    },
    cursor: {
      default: 'default',
      pointer: 'pointer',
      initial: 'initial'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover'],
    margin: ['responsive', 'first', 'last'],
    boxShadow: ['responsive', 'hover'],
    display: ['responsive', 'group-hover'],
    fill: ['responsive'],
    borderWidth: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
    position: ['responsive'],
    justifyContent: ['responsive', 'first', 'last'],
    gap: ['responsive'],
    gridColumn: ['responsive'],
    overflow: ['responsive'],
    zIndex: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover'],
    opacity: ['responsive', 'hover', 'group-hover']
  },
  plugins: [
    // eslint-disable-next-line func-names
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: 'none',
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1172px'
          }
        },
      });
    }
  ]
};
  