import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                red: { value: '#E3646E' },
                purple: { value: '#BB72E9' },
                blue: { value: '#3996DB' },
                green: { value: '#82BC4F' },
                yellow: { value: '#EABD5F' },
                gray: {
                    100: { value: '#E2E4E9' },
                    200: { value: '#C0C4CE' },
                    300: { value: '#878EA1' },
                    400: { value: '#292C34' },
                    500: { value: '#16181D' },
                    600: { value: '#0D0E11' },
                },
            },
            
            fonts: {
                asap: {value: 'Asap'},
                inconsolata: {value: 'Inconsolata'},
                mavenPro: {value: 'Maven Pro'},
            },
    
            fontSizes: {
                titleLg: {value: '3.5rem'},
                titleMd: {value: '1.5rem'},
                titleSm: {value: '1rem'},
                subtitle: {value: '1.25rem'},
                textMd: {value: '1rem'},
                textSm: {value: '0.875rem'},
            },
    
            lineHeights: {
                title: {value: '1.2'},
                text: {value: '1.4'},
            }
        },
    }
})

export const system = createSystem(defaultConfig, config)