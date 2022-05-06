export interface StackedBarData {
	label: PartyType;
	amount: number;
	color: string;
}

export type PartyType = typeof PARTIES[number];

export const PARTIES = [
	'Liberi e Uguali',
	'Centro Sinistra',
	'Centro Sinistra',
	'Movimento 5',
	'Centro Destra',
	'Forza Italia',
	'Lega',
	'Partito Democratico',
	'Frateli',
	'Non assegnati',
	'Casapound Italia',
	"Noi con l'Italia UDC",
	"+Europa"
] as const;

export const CHAMBER_SEATS: StackedBarData[] = [
	{
		label: 'Liberi e Uguali',
		amount: 14,
		color: '#FC3116'
	},
	{
		label: 'Centro Sinistra',
		amount: 86,
		color: 'darkred'
	},
	{
		label: 'Partito Democratico',
		amount: 24,
		color: 'red'
	},
	{
		label: 'Movimento 5',
		amount: 221,
		color: '#EECC00'
	},
	{
		label: 'Centro Destra',
		amount: 109,
		color: '#2B6DAB'
	},
	{
		label: 'Forza Italia',
		amount: 59,
		color: '#0E68A7'
	},
	{
		label: 'Lega',
		amount: 73,
		color: '#096224'
	},
	{
		label: 'Frateli',
		amount: 19,
		color: '#096224'
	}
];

export const SENATE_SEATS: StackedBarData[] = [
	{
		label: 'Liberi e Uguali',
		amount: 4,
		color: '#FC3116'
	},
	{
		label: 'Centro Sinistra',
		amount: 13,
		color: 'darkred'
	},
	{
		label: 'Partito Democratico',
		amount: 43,
		color: 'red'
	},
	{
		label: 'Movimento 5',
		amount: 112,
		color: '#EECC00'
	},
	{
		label: 'Centro Destra',
		amount: 58,
		color: '#2B6DAB'
	},
	{
		label: 'Forza Italia',
		amount: 33,
		color: '#0E68A7'
	},
	{
		label: 'Lega',
		amount: 37,
		color: '#096224'
	},
	{
		label: 'Frateli',
		amount: 7,
		color: '#074A71'
	}
];
