export interface Track {
  name: string;
  variants: TrackVariant[];
}

export interface TrackVariant {
  name: string;
  layouts: string[];
}

export const tracks: Track[] = [
  {
    name: 'Weathertech Raceway Laguna Seca',
    variants: [
      { name: '1987', layouts: ['Grand Prix'] },
      { name: 'Modern', layouts: ['Grand Prix'] },
    ],
  },
  {
    name: 'Glasbachrennen',
    variants: [{ name: 'Default', layouts: ['Full Run'] }],
  },
  {
    name: 'Adria International Raceway',
    variants: [
      { name: '2003', layouts: ['Full Circuit'] },
      { name: '2021', layouts: ['Full Circuit'] },
    ],
  },
  {
    name: 'Genting Highlands',
    variants: [{ name: 'Default', layouts: ['Stage', 'Circuit', 'Dual Stage', 'Short Stage'] }],
  },
  {
    name: 'Twin Forest',
    variants: [{ name: 'Default', layouts: ['Duel'] }],
  },
  {
    name: 'AVUS',
    variants: [{ name: 'Default', layouts: ['1998', '1994'] }],
  },
  {
    name: 'Vålerbanen',
    variants: [{ name: 'Default', layouts: ['Full Circuit'] }],
  },
  {
    name: 'Knutstorp Ring',
    variants: [{ name: 'Default', layouts: ['GP'] }],
  },
  {
    name: 'Falkenbergs Motorbana',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Anderstorp Motorbana',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'South'] }],
  },
  {
    name: 'Gelleråsen Arena',
    variants: [{ name: 'Default', layouts: ['Grand Prix Circuit', 'Short'] }],
  },
  {
    name: 'Moscow Raceway',
    variants: [{ name: 'Default', layouts: ['Sprint', 'Full', 'FIM'] }],
  },
  {
    name: 'RaceRoom Hillclimb',
    variants: [{ name: 'Default', layouts: ['Full Run', 'Reverse'] }],
  },
  {
    name: 'Circuit Zandvoort',
    variants: [
      { name: '2019', layouts: ['Grand Prix', 'Club', 'National'] },
      { name: 'Modern', layouts: ['Grand Prix', 'Short'] },
    ],
  },
  {
    name: 'Circuit de Spa-Francorchamps',
    variants: [
      { name: '1995', layouts: ['Grand Prix', 'Endurance'] },
      { name: 'Modern', layouts: ['Grand Prix', 'Classic', 'Combined', 'Moto'] },
    ],
  },
  {
    name: 'Fliegerhorst Wunstorf',
    variants: [{ name: 'Default', layouts: ['Full Circuit'] }],
  },
  {
    name: 'Twin Ring Motegi',
    variants: [{ name: 'Default', layouts: ['Road Course', 'West Course', 'East Course'] }],
  },
  {
    name: 'Autodromo Vallelunga Piero Taruffi',
    variants: [{ name: 'Default', layouts: ['International', 'Short', 'Chicane', 'Classic'] }],
  },
  {
    name: 'Alemannenring',
    variants: [{ name: 'Default', layouts: ['Full Circuit'] }],
  },
  {
    name: 'Autódromo Fernanda Pires da Silva',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Tanque'] }],
  },
  {
    name: 'Silverstone Circuit',
    variants: [
      { name: '2001', layouts: ['Grand Prix', 'Moto International', 'National'] },
      { name: 'Stow', layouts: ['Long', 'Short'] },
      {
        name: 'Modern',
        layouts: ['Grand Prix', 'International', 'National', 'Historic Grand Prix'],
      },
    ],
  },
  {
    name: 'Motorsport Arena Oschersleben',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Alternate', 'Short'] }],
  },
  {
    name: 'Hockenheimring',
    variants: [
      { name: '2001', layouts: ['Grand Prix', 'Short'] },
      { name: 'Modern', layouts: ['Grand Prix', 'National', 'Short'] },
    ],
  },
  {
    name: 'Fliegerhorst Diepholz',
    variants: [{ name: 'Default', layouts: ['Full Circuit'] }],
  },
  {
    name: 'Circuit de Pau-Ville',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Circuit de Charade',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Classic Racing School'] }],
  },
  {
    name: 'Donington Park',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'National'] }],
  },
  {
    name: 'Autódromo José Carlos Pace',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'TT Circuit Assen',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'National', 'Motorcycle Course'] }],
  },
  {
    name: 'Indianapolis Motor Speedway',
    variants: [
      { name: '2012', layouts: ['Grand Prix', 'Moto'] },
      { name: 'Modern', layouts: ['Road Course', 'Historic', 'Oval'] },
    ],
  },
  {
    name: 'Circuit Paul Armagnac',
    variants: [
      {
        name: 'Default',
        layouts: ['Grand Prix Circuit', 'Club Circuit', 'Caupenne Circuit', 'Moto Circuit'],
      },
    ],
  },
  {
    name: 'CREDITAS Autodrom Brno',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Grand Prix (Short Pit Entry)'] }],
  },
  {
    name: 'Brands Hatch Circuit',
    variants: [
      { name: 'Indy', layouts: ['Indy'] },
      { name: 'Grand Prix', layouts: ['Grand Prix'] },
    ],
  },
  {
    name: 'Watkins Glen International',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Short with Inner Loop',
          'Grand Prix with Inner Loop',
          'Short Circuit',
          'Grand Prix',
        ],
      },
    ],
  },
  {
    name: 'Motorland Aragón',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Grand Prix',
          'Motorcycle Grand Prix',
          'National',
          'Motorcycle National',
          'Fast Circuit',
          'WTCR',
        ],
      },
    ],
  },
  {
    name: 'Daytona International Speedway',
    variants: [
      {
        name: 'Default',
        layouts: ['Road Course', 'Speedwy (Not Supported)', 'Road Course Motorcycle 2006'],
      },
    ],
  },
  {
    name: 'Zhejiang International Circuit',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'East Circuit'] }],
  },
  {
    name: 'Ningbo International Circuit',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Full Circuit',
          'Full Circuit no Chicane',
          'Intermediate Circuit',
          'Intermediate Circuit no Chicane',
          'Short Circuit',
        ],
      },
    ],
  },
  {
    name: 'Bilster Berg',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Gesamtstrecke',
          'Gesamtstrecke Schikane',
          'Ostschleife',
          'Ostschleife Schikane',
          'Westschleife',
        ],
      },
    ],
  },
  {
    name: 'Dubai Autodrome',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Grand Prix Circuit',
          'Club Circuit',
          'National Circuit',
          'International Circuit',
        ],
      },
    ],
  },
  {
    name: 'Autodrom Most',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Zhuhai International Circuit',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Road America',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Sepang International Circuit',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'North', 'South'] }],
  },
  {
    name: 'Autódromo Internazionale Enzo e Dino Ferrari',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Mantorp Park',
    variants: [{ name: 'Default', layouts: ['Long Circuit', 'Short Circuit'] }],
  },
  {
    name: 'Nürburgring',
    variants: [
      { name: 'Nordschleife', layouts: ['Nordschleife', 'NLS', 'Tourist', '24 Hours'] },
      {
        name: 'Grand Prix',
        layouts: [
          'Grand Prix',
          'Grand Prix Fast Chicane',
          'Sprint Fast Chicane',
          'Sprint',
          'Müllenbachschleife',
        ],
      },
    ],
  },
  {
    name: 'Chang International Circuit',
    variants: [{ name: 'Default', layouts: ['Full Circuit', 'D Circuit'] }],
  },
  {
    name: 'Circuit Paul Ricard',
    variants: [
      {
        name: 'Default',
        layouts: [
          'Solution 3C',
          'Solution 1A-V2',
          'Solution 1C-V2',
          'Solution 2A Short',
          'Solution 1A',
        ],
      },
    ],
  },
  {
    name: 'Guia Circuit',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Shanghai International Circuit',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Intermediate (WTCC)', 'West Long'] }],
  },
  {
    name: 'Sachsenring',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Automotodróm Slovakia Ring',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Norisring',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Salzburgring',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Sonoma Raceway',
    variants: [{ name: 'Default', layouts: ['WTCC', 'Sprint', 'Long', 'IRL'] }],
  },
  {
    name: 'DEKRA Lausitzring',
    variants: [
      {
        name: 'Default',
        layouts: [
          'DTM Short Course',
          'Short Course',
          'Grand Prix Course',
          'DTM Grand Prix Course',
          'GP Course Oval T1',
        ],
      },
    ],
  },
  {
    name: 'Red Bull Ring Spielberg',
    variants: [
      { name: 'Default', layouts: ['Grand Prix Circuit', 'Südschleife National Circuit', 'Moto'] },
    ],
  },
  {
    name: 'Hungaroring',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Mid-Ohio Sports Car Course',
    variants: [{ name: 'Default', layouts: ['Full', 'Short', 'Chicane'] }],
  },
  {
    name: 'Circuit Zolder',
    variants: [{ name: 'Default', layouts: ['Grand Prix'] }],
  },
  {
    name: 'Autodromo di Monza',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Junior'] }],
  },
  {
    name: 'Suzuka International Racing Course',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'East Course', 'West Course'] }],
  },
  {
    name: 'Mount Panorama Circuit',
    variants: [{ name: 'Default', layouts: ['Mount Panorama'] }],
  },
  {
    name: 'Autodromo Internacional do Algarve',
    variants: [{ name: 'Default', layouts: ['Grand Prix', 'Moto', 'Chicane', 'Short'] }],
  },
  {
    name: 'Lakeview Hillclimb',
    variants: [{ name: 'Default', layouts: ['Full Run', 'Reverse'] }],
  },
  {
    name: 'RaceRoom Raceway',
    variants: [
      {
        name: 'Default',
        layouts: ['Grand Prix', 'Classic', 'Classic Sprint', 'Bridge', 'National', 'Drift Area'],
      },
    ],
  },
];
