// src/data/musicData.ts

// src/data/videoData.ts

export interface Video {
  title: string;
  description: string;
  duration: string;
  src: string;
  thumbnail: string;
}

const videoData: Video[] = [
  {
    title: 'Ievan Polkka - Hatsune Miku',
    description: 'Hatsune Miku dançando e cantando Ievan Polka',
    duration: '2:29',
    src: '/video/Levan Polkka.mp4',
    thumbnail: '/IP.jpg'
  },
  {
    title: 'World Is Mine - Hatsune Miku',
    description: 'Apresentação ao vivo de Hatsune Miku dançando e cantando World Is Mine',
    duration: '2:56',
    src: '/video/World is Mine.mp4',
    thumbnail: '/wim.jpg'
  },
  {
    title: 'Hibikase x ECHO - Hatsune Miku e GUMI',
    description: 'Apresentação ao vivo de Hatsune Miku e GUMI dançando e cantando Hibikase x ECHO',
    duration: '3:59',
    src: '/video/Hibikase x ECHO.mp4',
    thumbnail: '/echo-x-hibikase.jpg'
  }
];  
  export default videoData;
  
  