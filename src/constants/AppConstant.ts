export enum EXPLORE_DATA {
  EXPLORE = 'Explore',
  LOCATION = 'San Francisco,California',
  INVITE = '+INVITE',
}

export enum REFINE_DATA {
  REFINE = 'Refine',
  PLACE_HOLDER = 'Hi community! I am open to new connections  "😊" ',
  AVAILABILITY = 'Select Your Availability',
  STATUS = 'Add Your Status',
  COUNT = '/250',
  DISTANCE = 'Select Hyper local Distance',
  KM = '1 Km',
  KMS = '100 Km',
  SELECT = 'Select Purposes',
  SAVE = 'Save & Explore',
}

export const DROP_DOWN_DATA = [
  { label: 'Available | Hey Let Us Connect', Value: '1' },
  { label: 'Away | Stay Discrete And Watch', Value: '2' },
  { label: 'Busy | Do Not Disturb | Will Catch Up Later', Value: '3' },
  { label: 'SOS | Emergency! Need Assistance! HELP', Value: '4' },
];

export const purposeItemsData = [
  'Coffee',
  'Business',
  'Hobbies',
  'Friendship',
  'Movies',
  'Dining',
  'Dating',
  'Matrimony',
];

export const profilesdata = [
  {
    id: '1',
    name: 'Michael Murphy',
    location: 'San Francisco, within 1 Km',
    progress: 0.5,
    interests: 'Friendship | Coffee | Hangout',
    description: 'Hi community, I am open to new connections.',
    image: require('../assets/person1.jpg'),
  },
  {
    id: '2',
    name: 'John Doe',
    location: 'San Francisco, within 1 Km',
    progress: 0.5,
    interests: 'Coffee | Movie | Hobbies',
    description: 'Going to Berkley, love to share a ride.',
    image: require('../assets/person2.jpg'),
  },
  {
    id: '3',
    name: 'Jennifer',
    location: 'San Francisco, within 1 Km',
    progress: 0.5,
    interests: 'Friendship | Coffee | Hangout',
    description: 'Hi community, I am open to new connections.',
    image: require('../assets/person3.jpg'),
  },
  {
    id: '4',
    name: 'Blessy',
    location: 'San Francisco, within 1 Km',
    progress: 0.5,
    interests: 'Coffee | Movie | Hobbies',
    description: 'Going to Berkley, love to share a ride.',
    image: require('../assets/person5.jpg'),
  },
];
