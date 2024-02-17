import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vargas Barbearia | Sua barbearia de confiança',
    short_name: 'Vargas Barbearia',
    description: 'A Barbearia Vargas é a melhor barbearia da região, com atendimento especializado, ambiente agradável e satisfação garantida.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF',
    theme_color: '#F6B928',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}