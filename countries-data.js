// Countries data with capitals, main cities, population, and area
const countriesData = [
  {
    name: 'DefaultCountry',
    capital: 'DefaultCapital',
    main_cities: ['DefaultCity1', 'DefaultCity2', 'DefaultCity3'],
    population: '1 million',
    area: '1 million sq km',
    cities: [
      { name: 'DefaultCity1', population: '1 million', area: '1000 sq km' },
      { name: 'DefaultCity2', population: '2 million', area: '2000 sq km' },
      { name: 'DefaultCity3', population: '3 million', area: '3000 sq km' }
    ]
  },
  {
    name: 'Brazil',
    capital: 'Brasilia',
    main_cities: ['Brasilia', 'Rio de Janeiro', 'São Paulo'],
    population: '215 million',
    area: '8.5 million sq km',
    cities: [
      { name: 'Brasilia', population: '3 million', area: '5,802 sq km' },
      { name: 'Rio de Janeiro', population: '6.7 million', area: '1,221 sq km' },
      { name: 'São Paulo', population: '12.3 million', area: '1,521 sq km' }
    ]
  },
  {
    name: 'United States',
    capital: 'Washington, D.C.',
    main_cities: ['Washington, D.C.', 'New York', 'Los Angeles'],
    population: '331 million',
    area: '9.8 million sq km',
    cities: [
      { name: 'Washington, D.C.', population: '705,000', area: '177 sq km' },
      { name: 'New York', population: '8.3 million', area: '783 sq km' },
      { name: 'Los Angeles', population: '3.9 million', area: '1,302 sq km' }
    ]
  },
  {
    name: 'China',
    capital: 'Beijing',
    main_cities: ['Beijing', 'Shanghai', 'Guangzhou'],
    population: '1.4 billion',
    area: '9.6 million sq km',
    cities: [
      { name: 'Beijing', population: '21.5 million', area: '16,808 sq km' },
      { name: 'Shanghai', population: '24.9 million', area: '6,341 sq km' },
      { name: 'Guangzhou', population: '15.3 million', area: '7,434 sq km' }
    ]
  },
  {
    name: 'India',
    capital: 'New Delhi',
    main_cities: ['New Delhi', 'Mumbai', 'Bangalore'],
    population: '1.4 billion',
    area: '3.3 million sq km',
    cities: [
      { name: 'New Delhi', population: '32.9 million', area: '1,484 sq km' },
      { name: 'Mumbai', population: '20.4 million', area: '603 sq km' },
      { name: 'Bangalore', population: '13.6 million', area: '709 sq km' }
    ]
  },
  {
    name: 'Russia',
    capital: 'Moscow',
    main_cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk'],
    population: '146 million',
    area: '17.1 million sq km',
    cities: [
      { name: 'Moscow', population: '12.6 million', area: '2,511 sq km' },
      { name: 'Saint Petersburg', population: '5.4 million', area: '1,439 sq km' },
      { name: 'Novosibirsk', population: '1.6 million', area: '503 sq km' }
    ]
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    main_cities: ['Tokyo', 'Osaka', 'Yokohama'],
    population: '125 million',
    area: '377,975 sq km',
    cities: [
      { name: 'Tokyo', population: '14 million', area: '2,194 sq km' },
      { name: 'Osaka', population: '2.7 million', area: '225 sq km' },
      { name: 'Yokohama', population: '3.8 million', area: '437 sq km' }
    ]
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    main_cities: ['Berlin', 'Munich', 'Hamburg'],
    population: '83 million',
    area: '357,022 sq km',
    cities: [
      { name: 'Berlin', population: '3.7 million', area: '892 sq km' },
      { name: 'Munich', population: '1.5 million', area: '310 sq km' },
      { name: 'Hamburg', population: '1.9 million', area: '755 sq km' }
    ]
  },
  {
    name: 'United Kingdom',
    capital: 'London',
    main_cities: ['London', 'Manchester', 'Birmingham'],
    population: '67 million',
    area: '243,610 sq km',
    cities: [
      { name: 'London', population: '9.3 million', area: '1,572 sq km' },
      { name: 'Manchester', population: '2.8 million', area: '115 sq km' },
      { name: 'Birmingham', population: '1.1 million', area: '268 sq km' }
    ]
  },
  {
    name: 'France',
    capital: 'Paris',
    main_cities: ['Paris', 'Lyon', 'Marseille'],
    population: '68 million',
    area: '643,801 sq km',
    cities: [
      { name: 'Paris', population: '2.1 million', area: '105 sq km' },
      { name: 'Lyon', population: '516,000', area: '47 sq km' },
      { name: 'Marseille', population: '870,000', area: '241 sq km' }
    ]
  },
  {
    name: 'Italy',
    capital: 'Rome',
    main_cities: ['Rome', 'Milan', 'Naples'],
    population: '59 million',
    area: '301,340 sq km',
    cities: [
      { name: 'Rome', population: '2.8 million', area: '1,285 sq km' },
      { name: 'Milan', population: '1.4 million', area: '181 sq km' },
      { name: 'Naples', population: '967,000', area: '119 sq km' }
    ]
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    main_cities: ['Ottawa', 'Toronto', 'Vancouver'],
    population: '38 million',
    area: '9.9 million sq km',
    cities: [
      { name: 'Ottawa', population: '1 million', area: '2,790 sq km' },
      { name: 'Toronto', population: '2.9 million', area: '630 sq km' },
      { name: 'Vancouver', population: '675,000', area: '115 sq km' }
    ]
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    main_cities: ['Canberra', 'Sydney', 'Melbourne'],
    population: '26 million',
    area: '7.7 million sq km',
    cities: [
      { name: 'Canberra', population: '431,000', area: '814 sq km' },
      { name: 'Sydney', population: '5.3 million', area: '12,368 sq km' },
      { name: 'Melbourne', population: '5 million', area: '9,990 sq km' }
    ]
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    main_cities: ['Madrid', 'Barcelona', 'Valencia'],
    population: '47 million',
    area: '505,990 sq km',
    cities: [
      { name: 'Madrid', population: '3.2 million', area: '604 sq km' },
      { name: 'Barcelona', population: '1.6 million', area: '101 sq km' },
      { name: 'Valencia', population: '800,000', area: '134 sq km' }
    ]
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    main_cities: ['Mexico City', 'Guadalajara', 'Monterrey'],
    population: '128 million',
    area: '1.96 million sq km',
    cities: [
      { name: 'Mexico City', population: '9.2 million', area: '1,485 sq km' },
      { name: 'Guadalajara', population: '1.5 million', area: '151 sq km' },
      { name: 'Monterrey', population: '1.1 million', area: '323 sq km' }
    ]
  },
  {
    name: 'South Korea',
    capital: 'Seoul',
    main_cities: ['Seoul', 'Busan', 'Incheon'],
    population: '52 million',
    area: '100,210 sq km',
    cities: [
      { name: 'Seoul', population: '9.7 million', area: '605 sq km' },
      { name: 'Busan', population: '3.4 million', area: '770 sq km' },
      { name: 'Incheon', population: '2.9 million', area: '1,063 sq km' }
    ]
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    main_cities: ['Jakarta', 'Surabaya', 'Bandung'],
    population: '275 million',
    area: '1.9 million sq km',
    cities: [
      { name: 'Jakarta', population: '10.6 million', area: '664 sq km' },
      { name: 'Surabaya', population: '2.9 million', area: '350 sq km' },
      { name: 'Bandung', population: '2.5 million', area: '168 sq km' }
    ]
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    main_cities: ['Ankara', 'Istanbul', 'Izmir'],
    population: '84 million',
    area: '783,562 sq km',
    cities: [
      { name: 'Ankara', population: '5.6 million', area: '25,632 sq km' },
      { name: 'Istanbul', population: '15.5 million', area: '5,343 sq km' },
      { name: 'Izmir', population: '4.4 million', area: '11,891 sq km' }
    ]
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    main_cities: ['Buenos Aires', 'Córdoba', 'Rosario'],
    population: '45 million',
    area: '2.78 million sq km',
    cities: [
      { name: 'Buenos Aires', population: '3.1 million', area: '203 sq km' },
      { name: 'Córdoba', population: '1.6 million', area: '576 sq km' },
      { name: 'Rosario', population: '1.3 million', area: '179 sq km' }
    ]
  },
  {
    name: 'South Africa',
    capital: 'Cape Town',
    main_cities: ['Cape Town', 'Johannesburg', 'Durban'],
    population: '60 million',
    area: '1.22 million sq km',
    cities: [
      { name: 'Cape Town', population: '4.6 million', area: '2,455 sq km' },
      { name: 'Johannesburg', population: '5.6 million', area: '1,645 sq km' },
      { name: 'Durban', population: '3.1 million', area: '2,292 sq km' }
    ]
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    main_cities: ['Warsaw', 'Kraków', 'Wrocław'],
    population: '38 million',
    area: '312,696 sq km',
    cities: [
      { name: 'Warsaw', population: '1.8 million', area: '517 sq km' },
      { name: 'Kraków', population: '780,000', area: '327 sq km' },
      { name: 'Wrocław', population: '642,000', area: '293 sq km' }
    ]
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    main_cities: ['Amsterdam', 'Rotterdam', 'The Hague'],
    population: '17 million',
    area: '41,543 sq km',
    cities: [
      { name: 'Amsterdam', population: '873,000', area: '219 sq km' },
      { name: 'Rotterdam', population: '651,000', area: '325 sq km' },
      { name: 'The Hague', population: '548,000', area: '98 sq km' }
    ]
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    main_cities: ['Brussels', 'Antwerp', 'Ghent'],
    population: '12 million',
    area: '30,528 sq km',
    cities: [
      { name: 'Brussels', population: '185,000', area: '33 sq km' },
      { name: 'Antwerp', population: '529,000', area: '204 sq km' },
      { name: 'Ghent', population: '263,000', area: '156 sq km' }
    ]
  },
  {
    name: 'Greece',
    capital: 'Athens',
    main_cities: ['Athens', 'Thessaloniki', 'Patras'],
    population: '11 million',
    area: '131,957 sq km',
    cities: [
      { name: 'Athens', population: '664,000', area: '39 sq km' },
      { name: 'Thessaloniki', population: '325,000', area: '19 sq km' },
      { name: 'Patras', population: '213,000', area: '125 sq km' }
    ]
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    main_cities: ['Lisbon', 'Porto', 'Coimbra'],
    population: '10 million',
    area: '92,090 sq km',
    cities: [
      { name: 'Lisbon', population: '547,000', area: '100 sq km' },
      { name: 'Porto', population: '237,000', area: '41 sq km' },
      { name: 'Coimbra', population: '143,000', area: '319 sq km' }
    ]
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    main_cities: ['Stockholm', 'Gothenburg', 'Malmö'],
    population: '10 million',
    area: '450,295 sq km',
    cities: [
      { name: 'Stockholm', population: '975,000', area: '188 sq km' },
      { name: 'Gothenburg', population: '583,000', area: '447 sq km' },
      { name: 'Malmö', population: '344,000', area: '76 sq km' }
    ]
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    main_cities: ['Oslo', 'Bergen', 'Trondheim'],
    population: '5.4 million',
    area: '385,207 sq km',
    cities: [
      { name: 'Oslo', population: '697,000', area: '454 sq km' },
      { name: 'Bergen', population: '283,000', area: '465 sq km' },
      { name: 'Trondheim', population: '207,000', area: '342 sq km' }
    ]
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    main_cities: ['Copenhagen', 'Aarhus', 'Odense'],
    population: '5.8 million',
    area: '42,933 sq km',
    cities: [
      { name: 'Copenhagen', population: '644,000', area: '88 sq km' },
      { name: 'Aarhus', population: '349,000', area: '91 sq km' },
      { name: 'Odense', population: '180,000', area: '304 sq km' }
    ]
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    main_cities: ['Helsinki', 'Espoo', 'Tampere'],
    population: '5.5 million',
    area: '338,424 sq km',
    cities: [
      { name: 'Helsinki', population: '655,000', area: '715 sq km' },
      { name: 'Espoo', population: '293,000', area: '528 sq km' },
      { name: 'Tampere', population: '244,000', area: '689 sq km' }
    ]
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    main_cities: ['Bern', 'Zurich', 'Geneva'],
    population: '8.7 million',
    area: '41,277 sq km',
    cities: [
      { name: 'Bern', population: '134,000', area: '52 sq km' },
      { name: 'Zurich', population: '434,000', area: '88 sq km' },
      { name: 'Geneva', population: '203,000', area: '16 sq km' }
    ]
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    main_cities: ['Vienna', 'Graz', 'Linz'],
    population: '9 million',
    area: '83,871 sq km',
    cities: [
      { name: 'Vienna', population: '1.9 million', area: '415 sq km' },
      { name: 'Graz', population: '291,000', area: '127 sq km' },
      { name: 'Linz', population: '206,000', area: '96 sq km' }
    ]
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    main_cities: ['Prague', 'Brno', 'Ostrava'],
    population: '10.7 million',
    area: '78,867 sq km',
    cities: [
      { name: 'Prague', population: '1.3 million', area: '496 sq km' },
      { name: 'Brno', population: '382,000', area: '230 sq km' },
      { name: 'Ostrava', population: '288,000', area: '214 sq km' }
    ]
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    main_cities: ['Bucharest', 'Cluj-Napoca', 'Timișoara'],
    population: '19 million',
    area: '238,397 sq km',
    cities: [
      { name: 'Bucharest', population: '1.8 million', area: '228 sq km' },
      { name: 'Cluj-Napoca', population: '324,000', area: '179 sq km' },
      { name: 'Timișoara', population: '319,000', area: '130 sq km' }
    ]
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    main_cities: ['Budapest', 'Debrecen', 'Szeged'],
    population: '9.7 million',
    area: '93,028 sq km',
    cities: [
      { name: 'Budapest', population: '1.7 million', area: '525 sq km' },
      { name: 'Debrecen', population: '202,000', area: '461 sq km' },
      { name: 'Szeged', population: '160,000', area: '281 sq km' }
    ]
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    main_cities: ['Bangkok', 'Chiang Mai', 'Pattaya'],
    population: '70 million',
    area: '513,120 sq km',
    cities: [
      { name: 'Bangkok', population: '10.5 million', area: '1,569 sq km' },
      { name: 'Chiang Mai', population: '1.2 million', area: '405 sq km' },
      { name: 'Pattaya', population: '119,000', area: '53 sq km' }
    ]
  },
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    main_cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    population: '97 million',
    area: '331,212 sq km',
    cities: [
      { name: 'Hanoi', population: '8.1 million', area: '3,359 sq km' },
      { name: 'Ho Chi Minh City', population: '9.3 million', area: '2,095 sq km' },
      { name: 'Da Nang', population: '1.1 million', area: '1,285 sq km' }
    ]
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    main_cities: ['Manila', 'Cebu', 'Davao'],
    population: '111 million',
    area: '300,000 sq km',
    cities: [
      { name: 'Manila', population: '1.8 million', area: '43 sq km' },
      { name: 'Cebu', population: '922,000', area: '315 sq km' },
      { name: 'Davao', population: '1.8 million', area: '2,444 sq km' }
    ]
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    main_cities: ['Kuala Lumpur', 'George Town', 'Johor Bahru'],
    population: '33 million',
    area: '330,803 sq km',
    cities: [
      { name: 'Kuala Lumpur', population: '1.9 million', area: '243 sq km' },
      { name: 'George Town', population: '708,000', area: '305 sq km' },
      { name: 'Johor Bahru', population: '1.8 million', area: '1,817 sq km' }
    ]
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    main_cities: ['Singapore', 'Jurong', 'Woodlands'],
    population: '5.7 million',
    area: '719 sq km',
    cities: [
      { name: 'Singapore', population: '5.7 million', area: '719 sq km' },
      { name: 'Jurong', population: '900,000', area: '176 sq km' },
      { name: 'Woodlands', population: '250,000', area: '13 sq km' }
    ]
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    main_cities: ['Cairo', 'Alexandria', 'Giza'],
    population: '104 million',
    area: '1 million sq km',
    cities: [
      { name: 'Cairo', population: '10.2 million', area: '606 sq km' },
      { name: 'Alexandria', population: '5.2 million', area: '2,679 sq km' },
      { name: 'Giza', population: '3.2 million', area: '98 sq km' }
    ]
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    main_cities: ['Abuja', 'Lagos', 'Kano'],
    population: '216 million',
    area: '923,768 sq km',
    cities: [
      { name: 'Abuja', population: '1.2 million', area: '713 sq km' },
      { name: 'Lagos', population: '15.4 million', area: '1,171 sq km' },
      { name: 'Kano', population: '3.6 million', area: '499 sq km' }
    ]
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    main_cities: ['Nairobi', 'Mombasa', 'Kisumu'],
    population: '55 million',
    area: '580,367 sq km',
    cities: [
      { name: 'Nairobi', population: '4.4 million', area: '696 sq km' },
      { name: 'Mombasa', population: '1.2 million', area: '295 sq km' },
      { name: 'Kisumu', population: '409,000', area: '417 sq km' }
    ]
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    main_cities: ['Accra', 'Kumasi', 'Tamale'],
    population: '32 million',
    area: '238,533 sq km',
    cities: [
      { name: 'Accra', population: '2.3 million', area: '225 sq km' },
      { name: 'Kumasi', population: '2 million', area: '254 sq km' },
      { name: 'Tamale', population: '371,000', area: '750 sq km' }
    ]
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    main_cities: ['Rabat', 'Casablanca', 'Fes'],
    population: '37 million',
    area: '446,550 sq km',
    cities: [
      { name: 'Rabat', population: '577,000', area: '117 sq km' },
      { name: 'Casablanca', population: '3.4 million', area: '220 sq km' },
      { name: 'Fes', population: '1.1 million', area: '320 sq km' }
    ]
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    main_cities: ['Algiers', 'Oran', 'Constantine'],
    population: '44 million',
    area: '2.38 million sq km',
    cities: [
      { name: 'Algiers', population: '3.5 million', area: '363 sq km' },
      { name: 'Oran', population: '803,000', area: '2,121 sq km' },
      { name: 'Constantine', population: '448,000', area: '2,288 sq km' }
    ]
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    main_cities: ['Riyadh', 'Jeddah', 'Mecca'],
    population: '35 million',
    area: '2.15 million sq km',
    cities: [
      { name: 'Riyadh', population: '7.7 million', area: '1,913 sq km' },
      { name: 'Jeddah', population: '4.7 million', area: '5,460 sq km' },
      { name: 'Mecca', population: '2.4 million', area: '1,200 sq km' }
    ]
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    main_cities: ['Abu Dhabi', 'Dubai', 'Sharjah'],
    population: '10 million',
    area: '83,600 sq km',
    cities: [
      { name: 'Abu Dhabi', population: '1.5 million', area: '972 sq km' },
      { name: 'Dubai', population: '3.4 million', area: '4,114 sq km' },
      { name: 'Sharjah', population: '1.8 million', area: '235 sq km' }
    ]
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    main_cities: ['Jerusalem', 'Tel Aviv', 'Haifa'],
    population: '9.4 million',
    area: '22,072 sq km',
    cities: [
      { name: 'Jerusalem', population: '936,000', area: '125 sq km' },
      { name: 'Tel Aviv', population: '460,000', area: '52 sq km' },
      { name: 'Haifa', population: '285,000', area: '64 sq km' }
    ]
  },
  {
    name: 'Iran',
    capital: 'Tehran',
    main_cities: ['Tehran', 'Mashhad', 'Isfahan'],
    population: '85 million',
    area: '1.65 million sq km',
    cities: [
      { name: 'Tehran', population: '8.7 million', area: '730 sq km' },
      { name: 'Mashhad', population: '3 million', area: '351 sq km' },
      { name: 'Isfahan', population: '2 million', area: '551 sq km' }
    ]
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    main_cities: ['Baghdad', 'Basra', 'Mosul'],
    population: '41 million',
    area: '438,317 sq km',
    cities: [
      { name: 'Baghdad', population: '8.1 million', area: '673 sq km' },
      { name: 'Basra', population: '1.3 million', area: '181 sq km' },
      { name: 'Mosul', population: '1.8 million', area: '180 sq km' }
    ]
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    main_cities: ['Islamabad', 'Karachi', 'Lahore'],
    population: '231 million',
    area: '881,913 sq km',
    cities: [
      { name: 'Islamabad', population: '1 million', area: '906 sq km' },
      { name: 'Karachi', population: '16.1 million', area: '3,527 sq km' },
      { name: 'Lahore', population: '13 million', area: '1,772 sq km' }
    ]
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    main_cities: ['Dhaka', 'Chittagong', 'Khulna'],
    population: '169 million',
    area: '147,570 sq km',
    cities: [
      { name: 'Dhaka', population: '10.3 million', area: '306 sq km' },
      { name: 'Chittagong', population: '2.6 million', area: '168 sq km' },
      { name: 'Khulna', population: '665,000', area: '59 sq km' }
    ]
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    main_cities: ['Colombo', 'Kandy', 'Galle'],
    population: '22 million',
    area: '65,610 sq km',
    cities: [
      { name: 'Colombo', population: '752,000', area: '37 sq km' },
      { name: 'Kandy', population: '125,000', area: '27 sq km' },
      { name: 'Galle', population: '93,000', area: '17 sq km' }
    ]
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    main_cities: ['Kathmandu', 'Pokhara', 'Lalitpur'],
    population: '30 million',
    area: '147,181 sq km',
    cities: [
      { name: 'Kathmandu', population: '1.4 million', area: '50 sq km' },
      { name: 'Pokhara', population: '518,000', area: '464 sq km' },
      { name: 'Lalitpur', population: '284,000', area: '15 sq km' }
    ]
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    main_cities: ['Naypyidaw', 'Yangon', 'Mandalay'],
    population: '55 million',
    area: '676,578 sq km',
    cities: [
      { name: 'Naypyidaw', population: '1.2 million', area: '7,054 sq km' },
      { name: 'Yangon', population: '5.2 million', area: '598 sq km' },
      { name: 'Mandalay', population: '1.7 million', area: '163 sq km' }
    ]
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    main_cities: ['Santiago', 'Valparaíso', 'Concepción'],
    population: '19 million',
    area: '756,102 sq km',
    cities: [
      { name: 'Santiago', population: '6.3 million', area: '641 sq km' },
      { name: 'Valparaíso', population: '296,000', area: '402 sq km' },
      { name: 'Concepción', population: '217,000', area: '222 sq km' }
    ]
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    main_cities: ['Bogotá', 'Medellín', 'Cali'],
    population: '51 million',
    area: '1.14 million sq km',
    cities: [
      { name: 'Bogotá', population: '7.4 million', area: '1,587 sq km' },
      { name: 'Medellín', population: '2.5 million', area: '382 sq km' },
      { name: 'Cali', population: '2.2 million', area: '564 sq km' }
    ]
  },
  {
    name: 'Peru',
    capital: 'Lima',
    main_cities: ['Lima', 'Arequipa', 'Trujillo'],
    population: '33 million',
    area: '1.29 million sq km',
    cities: [
      { name: 'Lima', population: '9.7 million', area: '2,672 sq km' },
      { name: 'Arequipa', population: '1 million', area: '9,352 sq km' },
      { name: 'Trujillo', population: '919,000', area: '1,768 sq km' }
    ]
  },
  {
    name: 'Venezuela',
    capital: 'Caracas',
    main_cities: ['Caracas', 'Maracaibo', 'Valencia'],
    population: '28 million',
    area: '916,445 sq km',
    cities: [
      { name: 'Caracas', population: '2.9 million', area: '433 sq km' },
      { name: 'Maracaibo', population: '2.2 million', area: '1,393 sq km' },
      { name: 'Valencia', population: '1.5 million', area: '623 sq km' }
    ]
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    main_cities: ['Quito', 'Guayaquil', 'Cuenca'],
    population: '18 million',
    area: '283,561 sq km',
    cities: [
      { name: 'Quito', population: '2.7 million', area: '372 sq km' },
      { name: 'Guayaquil', population: '2.7 million', area: '344 sq km' },
      { name: 'Cuenca', population: '330,000', area: '70 sq km' }
    ]
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    main_cities: ['Montevideo', 'Salto', 'Paysandú'],
    population: '3.5 million',
    area: '176,215 sq km',
    cities: [
      { name: 'Montevideo', population: '1.3 million', area: '201 sq km' },
      { name: 'Salto', population: '104,000', area: '14 sq km' },
      { name: 'Paysandú', population: '76,000', area: '13 sq km' }
    ]
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    main_cities: ['Asunción', 'Ciudad del Este', 'San Lorenzo'],
    population: '7.3 million',
    area: '406,752 sq km',
    cities: [
      { name: 'Asunción', population: '525,000', area: '117 sq km' },
      { name: 'Ciudad del Este', population: '293,000', area: '149 sq km' },
      { name: 'San Lorenzo', population: '253,000', area: '56 sq km' }
    ]
  },
  {
    name: 'Bolivia',
    capital: 'Sucre',
    main_cities: ['Sucre', 'La Paz', 'Santa Cruz'],
    population: '12 million',
    area: '1.1 million sq km',
    cities: [
      { name: 'Sucre', population: '360,000', area: '1,768 sq km' },
      { name: 'La Paz', population: '816,000', area: '472 sq km' },
      { name: 'Santa Cruz', population: '1.7 million', area: '325 sq km' }
    ]
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    main_cities: ['Wellington', 'Auckland', 'Christchurch'],
    population: '5.1 million',
    area: '268,021 sq km',
    cities: [
      { name: 'Wellington', population: '212,000', area: '444 sq km' },
      { name: 'Auckland', population: '1.7 million', area: '1,086 sq km' },
      { name: 'Christchurch', population: '396,000', area: '1,426 sq km' }
    ]
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    main_cities: ['Dublin', 'Cork', 'Limerick'],
    population: '5 million',
    area: '70,273 sq km',
    cities: [
      { name: 'Dublin', population: '554,000', area: '115 sq km' },
      { name: 'Cork', population: '210,000', area: '37 sq km' },
      { name: 'Limerick', population: '94,000', area: '21 sq km' }
    ]
  },
  {
    name: 'Iceland',
    capital: 'Reykjavik',
    main_cities: ['Reykjavik', 'Kópavogur', 'Hafnarfjörður'],
    population: '376,000',
    area: '103,000 sq km',
    cities: [
      { name: 'Reykjavik', population: '131,000', area: '274 sq km' },
      { name: 'Kópavogur', population: '37,000', area: '80 sq km' },
      { name: 'Hafnarfjörður', population: '29,000', area: '143 sq km' }
    ]
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    main_cities: ['Zagreb', 'Split', 'Rijeka'],
    population: '3.9 million',
    area: '56,594 sq km',
    cities: [
      { name: 'Zagreb', population: '806,000', area: '641 sq km' },
      { name: 'Split', population: '178,000', area: '79 sq km' },
      { name: 'Rijeka', population: '128,000', area: '44 sq km' }
    ]
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    main_cities: ['Belgrade', 'Novi Sad', 'Niš'],
    population: '6.7 million',
    area: '88,361 sq km',
    cities: [
      { name: 'Belgrade', population: '1.4 million', area: '360 sq km' },
      { name: 'Novi Sad', population: '277,000', area: '129 sq km' },
      { name: 'Niš', population: '183,000', area: '597 sq km' }
    ]
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    main_cities: ['Sofia', 'Plovdiv', 'Varna'],
    population: '6.9 million',
    area: '110,879 sq km',
    cities: [
      { name: 'Sofia', population: '1.3 million', area: '492 sq km' },
      { name: 'Plovdiv', population: '346,000', area: '102 sq km' },
      { name: 'Varna', population: '335,000', area: '238 sq km' }
    ]
  },
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    main_cities: ['Kyiv', 'Kharkiv', 'Odesa'],
    population: '41 million',
    area: '603,550 sq km',
    cities: [
      { name: 'Kyiv', population: '2.9 million', area: '839 sq km' },
      { name: 'Kharkiv', population: '1.4 million', area: '350 sq km' },
      { name: 'Odesa', population: '1 million', area: '236 sq km' }
    ]
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    main_cities: ['Minsk', 'Gomel', 'Mogilev'],
    population: '9.4 million',
    area: '207,600 sq km',
    cities: [
      { name: 'Minsk', population: '2 million', area: '409 sq km' },
      { name: 'Gomel', population: '508,000', area: '135 sq km' },
      { name: 'Mogilev', population: '357,000', area: '118 sq km' }
    ]
  },
  {
    name: 'Kazakhstan',
    capital: 'Nur-Sultan',
    main_cities: ['Nur-Sultan', 'Almaty', 'Shymkent'],
    population: '19 million',
    area: '2.72 million sq km',
    cities: [
      { name: 'Nur-Sultan', population: '1.1 million', area: '797 sq km' },
      { name: 'Almaty', population: '2 million', area: '682 sq km' },
      { name: 'Shymkent', population: '1 million', area: '1,170 sq km' }
    ]
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    main_cities: ['Tashkent', 'Samarkand', 'Bukhara'],
    population: '34 million',
    area: '447,400 sq km',
    cities: [
      { name: 'Tashkent', population: '2.5 million', area: '335 sq km' },
      { name: 'Samarkand', population: '546,000', area: '108 sq km' },
      { name: 'Bukhara', population: '280,000', area: '39 sq km' }
    ]
  },
  {
    name: 'Mongolia',
    capital: 'Ulaanbaatar',
    main_cities: ['Ulaanbaatar', 'Erdenet', 'Darkhan'],
    population: '3.3 million',
    area: '1.56 million sq km',
    cities: [
      { name: 'Ulaanbaatar', population: '1.5 million', area: '4,704 sq km' },
      { name: 'Erdenet', population: '100,000', area: '208 sq km' },
      { name: 'Darkhan', population: '75,000', area: '103 sq km' }
    ]
  },
  {
    name: 'North Korea',
    capital: 'Pyongyang',
    main_cities: ['Pyongyang', 'Hamhung', 'Chongjin'],
    population: '26 million',
    area: '120,538 sq km',
    cities: [
      { name: 'Pyongyang', population: '3.1 million', area: '3,194 sq km' },
      { name: 'Hamhung', population: '769,000', area: '330 sq km' },
      { name: 'Chongjin', population: '667,000', area: '269 sq km' }
    ]
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    main_cities: ['Taipei', 'Kaohsiung', 'Taichung'],
    population: '23.6 million',
    area: '36,193 sq km',
    cities: [
      { name: 'Taipei', population: '2.6 million', area: '272 sq km' },
      { name: 'Kaohsiung', population: '2.8 million', area: '2,952 sq km' },
      { name: 'Taichung', population: '2.8 million', area: '2,215 sq km' }
    ]
  },
  {
    name: 'Hong Kong',
    capital: 'Hong Kong',
    main_cities: ['Hong Kong', 'Kowloon', 'New Territories'],
    population: '7.5 million',
    area: '1,106 sq km',
    cities: [
      { name: 'Hong Kong', population: '7.5 million', area: '1,106 sq km' },
      { name: 'Kowloon', population: '2.1 million', area: '47 sq km' },
      { name: 'New Territories', population: '3.7 million', area: '952 sq km' }
    ]
  },
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    main_cities: ['Kabul', 'Kandahar', 'Herat'],
    population: '40 million',
    area: '652,230 sq km',
    cities: [
      { name: 'Kabul', population: '4.4 million', area: '1,023 sq km' },
      { name: 'Kandahar', population: '651,000', area: '273 sq km' },
      { name: 'Herat', population: '597,000', area: '182 sq km' }
    ]
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    main_cities: ['Tunis', 'Sfax', 'Sousse'],
    population: '12 million',
    area: '163,610 sq km',
    cities: [
      { name: 'Tunis', population: '638,000', area: '212 sq km' },
      { name: 'Sfax', population: '330,000', area: '56 sq km' },
      { name: 'Sousse', population: '221,000', area: '45 sq km' }
    ]
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    main_cities: ['Tripoli', 'Benghazi', 'Misrata'],
    population: '7 million',
    area: '1.76 million sq km',
    cities: [
      { name: 'Tripoli', population: '1.2 million', area: '400 sq km' },
      { name: 'Benghazi', population: '631,000', area: '314 sq km' },
      { name: 'Misrata', population: '386,000', area: '2,968 sq km' }
    ]
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    main_cities: ['Khartoum', 'Port Sudan', 'Kassala'],
    population: '45 million',
    area: '1.86 million sq km',
    cities: [
      { name: 'Khartoum', population: '5.3 million', area: '971 sq km' },
      { name: 'Port Sudan', population: '489,000', area: '825 sq km' },
      { name: 'Kassala', population: '536,000', area: '36 sq km' }
    ]
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    main_cities: ['Addis Ababa', 'Dire Dawa', 'Mekelle'],
    population: '120 million',
    area: '1.1 million sq km',
    cities: [
      { name: 'Addis Ababa', population: '3.4 million', area: '527 sq km' },
      { name: 'Dire Dawa', population: '277,000', area: '1,213 sq km' },
      { name: 'Mekelle', population: '324,000', area: '24 sq km' }
    ]
  },
  {
    name: 'Tanzania',
    capital: 'Dodoma',
    main_cities: ['Dodoma', 'Dar es Salaam', 'Mwanza'],
    population: '63 million',
    area: '947,303 sq km',
    cities: [
      { name: 'Dodoma', population: '411,000', area: '2,576 sq km' },
      { name: 'Dar es Salaam', population: '6 million', area: '1,393 sq km' },
      { name: 'Mwanza', population: '706,000', area: '1,325 sq km' }
    ]
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    main_cities: ['Kampala', 'Gulu', 'Lira'],
    population: '47 million',
    area: '241,038 sq km',
    cities: [
      { name: 'Kampala', population: '1.7 million', area: '189 sq km' },
      { name: 'Gulu', population: '152,000', area: '3,452 sq km' },
      { name: 'Lira', population: '99,000', area: '1,328 sq km' }
    ]
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    main_cities: ['Harare', 'Bulawayo', 'Chitungwiza'],
    population: '15 million',
    area: '390,757 sq km',
    cities: [
      { name: 'Harare', population: '1.5 million', area: '960 sq km' },
      { name: 'Bulawayo', population: '653,000', area: '479 sq km' },
      { name: 'Chitungwiza', population: '365,000', area: '25 sq km' }
    ]
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    main_cities: ['Luanda', 'Huambo', 'Lobito'],
    population: '34 million',
    area: '1.25 million sq km',
    cities: [
      { name: 'Luanda', population: '8.3 million', area: '113 sq km' },
      { name: 'Huambo', population: '665,000', area: '2,609 sq km' },
      { name: 'Lobito', population: '324,000', area: '3,648 sq km' }
    ]
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    main_cities: ['Yaoundé', 'Douala', 'Garoua'],
    population: '27 million',
    area: '475,442 sq km',
    cities: [
      { name: 'Yaoundé', population: '3.7 million', area: '180 sq km' },
      { name: 'Douala', population: '2.8 million', area: '210 sq km' },
      { name: 'Garoua', population: '436,000', area: '45 sq km' }
    ]
  },
  {
    name: 'Ivory Coast',
    capital: 'Yamoussoukro',
    main_cities: ['Yamoussoukro', 'Abidjan', 'Bouaké'],
    population: '27 million',
    area: '322,463 sq km',
    cities: [
      { name: 'Yamoussoukro', population: '212,000', area: '3,500 sq km' },
      { name: 'Abidjan', population: '4.7 million', area: '2,119 sq km' },
      { name: 'Bouaké', population: '542,000', area: '71 sq km' }
    ]
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    main_cities: ['Dakar', 'Thiès', 'Rufisque'],
    population: '17 million',
    area: '196,722 sq km',
    cities: [
      { name: 'Dakar', population: '1.1 million', area: '83 sq km' },
      { name: 'Thiès', population: '320,000', area: '77 sq km' },
      { name: 'Rufisque', population: '221,000', area: '372 sq km' }
    ]
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    main_cities: ['Antananarivo', 'Toamasina', 'Antsirabe'],
    population: '29 million',
    area: '587,041 sq km',
    cities: [
      { name: 'Antananarivo', population: '1.3 million', area: '88 sq km' },
      { name: 'Toamasina', population: '326,000', area: '20 sq km' },
      { name: 'Antsirabe', population: '238,000', area: '132 sq km' }
    ]
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    main_cities: ['Maputo', 'Beira', 'Nampula'],
    population: '32 million',
    area: '801,590 sq km',
    cities: [
      { name: 'Maputo', population: '1.1 million', area: '347 sq km' },
      { name: 'Beira', population: '533,000', area: '633 sq km' },
      { name: 'Nampula', population: '743,000', area: '404 sq km' }
    ]
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    main_cities: ['Lusaka', 'Kitwe', 'Ndola'],
    population: '19 million',
    area: '752,618 sq km',
    cities: [
      { name: 'Lusaka', population: '2.2 million', area: '360 sq km' },
      { name: 'Kitwe', population: '517,000', area: '393 sq km' },
      { name: 'Ndola', population: '451,000', area: '1,283 sq km' }
    ]
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    main_cities: ['Lilongwe', 'Blantyre', 'Mzuzu'],
    population: '20 million',
    area: '118,484 sq km',
    cities: [
      { name: 'Lilongwe', population: '989,000', area: '727 sq km' },
      { name: 'Blantyre', population: '800,000', area: '228 sq km' },
      { name: 'Mzuzu', population: '221,000', area: '42 sq km' }
    ]
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    main_cities: ['Kigali', 'Butare', 'Gitarama'],
    population: '13 million',
    area: '26,338 sq km',
    cities: [
      { name: 'Kigali', population: '1.1 million', area: '730 sq km' },
      { name: 'Butare', population: '89,000', area: '176 sq km' },
      { name: 'Gitarama', population: '87,000', area: '519 sq km' }
    ]
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    main_cities: ['Amman', 'Irbid', 'Zarqa'],
    population: '11 million',
    area: '89,342 sq km',
    cities: [
      { name: 'Amman', population: '4 million', area: '1,680 sq km' },
      { name: 'Irbid', population: '650,000', area: '410 sq km' },
      { name: 'Zarqa', population: '635,000', area: '60 sq km' }
    ]
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    main_cities: ['Beirut', 'Tripoli', 'Sidon'],
    population: '6.8 million',
    area: '10,452 sq km',
    cities: [
      { name: 'Beirut', population: '361,000', area: '20 sq km' },
      { name: 'Tripoli', population: '229,000', area: '14 sq km' },
      { name: 'Sidon', population: '163,000', area: '7 sq km' }
    ]
  },
  {
    name: 'Syria',
    capital: 'Damascus',
    main_cities: ['Damascus', 'Aleppo', 'Homs'],
    population: '22 million',
    area: '185,180 sq km',
    cities: [
      { name: 'Damascus', population: '2.1 million', area: '105 sq km' },
      { name: 'Aleppo', population: '2 million', area: '190 sq km' },
      { name: 'Homs', population: '775,000', area: '48 sq km' }
    ]
  },
  {
    name: 'Yemen',
    capital: 'Sana\'a',
    main_cities: ['Sana\'a', 'Aden', 'Taiz'],
    population: '31 million',
    area: '527,968 sq km',
    cities: [
      { name: 'Sana\'a', population: '2.9 million', area: '126 sq km' },
      { name: 'Aden', population: '863,000', area: '760 sq km' },
      { name: 'Taiz', population: '615,000', area: '1,910 sq km' }
    ]
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    main_cities: ['Muscat', 'Salalah', 'Sohar'],
    population: '5.1 million',
    area: '309,500 sq km',
    cities: [
      { name: 'Muscat', population: '1.4 million', area: '3,500 sq km' },
      { name: 'Salalah', population: '331,000', area: '1,500 sq km' },
      { name: 'Sohar', population: '140,000', area: '314 sq km' }
    ]
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    main_cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli'],
    population: '4.3 million',
    area: '17,818 sq km',
    cities: [
      { name: 'Kuwait City', population: '3.1 million', area: '200 sq km' },
      { name: 'Al Ahmadi', population: '637,000', area: '5,120 sq km' },
      { name: 'Hawalli', population: '164,000', area: '84 sq km' }
    ]
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    main_cities: ['Doha', 'Al Rayyan', 'Al Wakrah'],
    population: '2.9 million',
    area: '11,586 sq km',
    cities: [
      { name: 'Doha', population: '956,000', area: '132 sq km' },
      { name: 'Al Rayyan', population: '605,000', area: '11,606 sq km' },
      { name: 'Al Wakrah', population: '299,000', area: '2,577 sq km' }
    ]
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    main_cities: ['Manama', 'Riffa', 'Muharraq'],
    population: '1.8 million',
    area: '765 sq km',
    cities: [
      { name: 'Manama', population: '436,000', area: '30 sq km' },
      { name: 'Riffa', population: '195,000', area: '11 sq km' },
      { name: 'Muharraq', population: '176,000', area: '57 sq km' }
    ]
  }
];

export default countriesData;

