export default interface Group {
  name: string;
  category: 'tech' | 'art' | 'sports' | 'health' | 'culture';
  description: string;
  location: string;
  organizer: string;
}
