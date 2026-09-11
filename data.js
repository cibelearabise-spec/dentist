// Base de dados de exemplo (poderia vir de uma API real no futuro)
const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Emma Wilson',
    specialty: 'Cardiology',
    place: 'City Heart Hospital',
    exp: '12 yrs exp',
    rating: 4.9,
    patients: '2.4k',
    available: true,
  },
  {
    id: 2,
    name: 'Dr. Marcus Lee',
    specialty: 'Cardiology',
    place: 'Central Medical Center',
    exp: '8 yrs exp',
    rating: 4.7,
    patients: '1.6k',
    available: false,
  },
  {
    id: 3,
    name: 'Dr. Sofia Rossi',
    specialty: 'Dental',
    place: 'Smile Dental Clinic',
    exp: '10 yrs exp',
    rating: 4.8,
    patients: '3.1k',
    available: true,
  },
  {
    id: 4,
    name: 'Dr. Bruno Alves',
    specialty: 'Dental',
    place: 'Sorriso Odontologia',
    exp: '6 yrs exp',
    rating: 4.6,
    patients: '980',
    available: true,
  },
  {
    id: 5,
    name: 'Dr. Helena Cruz',
    specialty: 'Dental',
    place: 'Bright Smile Center',
    exp: '15 yrs exp',
    rating: 4.9,
    patients: '4.2k',
    available: false,
  },
  {
    id: 6,
    name: 'Dr. Daniel Kim',
    specialty: 'Neurology',
    place: 'NeuroCare Institute',
    exp: '14 yrs exp',
    rating: 4.9,
    patients: '2.9k',
    available: true,
  },
];

function initials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
