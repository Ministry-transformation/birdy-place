export const birdyLocations = [
  {
    id: 'la-paz',
    number: '01',
    name: 'La Paz',
    brand: 'Birdy Place',
    address: 'Calle La Paz, 150',
    postal: '03181 Torrevieja, Alicante',
    map: 'https://www.google.com/maps/search/?api=1&query=Calle%20La%20Paz%20150%20Torrevieja',
    booking: 'https://n1322830.alteg.io/company/723843/personal/menu?o=',
    services: ['Peluquería y color', 'Manicura y pedicura', 'Pestañas y cejas', 'Cosmetología', 'Depilación'],
    description: 'Cabello, uñas, mirada y cuidado facial en el catálogo de esta ubicación.',
  },
  {
    id: 'rodas',
    number: '02',
    name: 'Caballero de Rodas',
    brand: 'Birdy BBS',
    address: 'Calle Caballero de Rodas, 76',
    postal: '03182 Torrevieja, Alicante',
    map: 'https://www.google.com/maps/search/?api=1&query=Calle%20Caballero%20de%20Rodas%2076%20Torrevieja',
    booking: 'https://n1322830.alteg.io/company/1264886/personal/menu?o=',
    services: ['Corte masculino', 'Barba', 'Afeitado', 'Permanente'],
    description: 'Barbería con menú y reserva online propios para esta ubicación.',
  },
];

export const birdyServices = [
  { number: '01', name: 'Peluquería', detail: 'Cortes, peinados, color y cuidado capilar.', location: 'la-paz', tone: 'cobalt', symbol: '✂' },
  { number: '02', name: 'Manicura & pedicura', detail: 'Servicios de uñas Expert y Top.', location: 'la-paz', tone: 'yellow', symbol: '✦' },
  { number: '03', name: 'Pestañas & cejas', detail: 'Extensiones, diseño, tinte y laminado.', location: 'la-paz', tone: 'light', symbol: '◌' },
  { number: '04', name: 'Cuidado facial', detail: 'Cosmetología y tratamientos faciales.', location: 'la-paz', tone: 'dark', symbol: '✧' },
  { number: '05', name: 'Depilación', detail: 'Consulta las opciones disponibles en La Paz.', location: 'la-paz', tone: 'light', symbol: '⌁' },
  { number: '06', name: 'Barbería', detail: 'Corte masculino, barba y afeitado.', location: 'rodas', tone: 'cobalt', symbol: '✂' },
];

export const birdyPrices = [
  { service: 'Corte masculino', location: 'Caballero de Rodas', price: '20 €', href: birdyLocations[1].booking },
  { service: 'Corte + barba', location: 'Caballero de Rodas', price: '25 €', href: birdyLocations[1].booking },
  { service: 'Manicura + gel', location: 'La Paz · Expert', price: '40–55 €', href: birdyLocations[0].booking },
  { service: 'Corte + lavado + peinado', location: 'La Paz', price: '35–45 €', href: birdyLocations[0].booking },
];
