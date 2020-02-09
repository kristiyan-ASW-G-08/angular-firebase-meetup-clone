export default interface Event {
  name: string;
  category: 'tech' | 'art' | 'sports' | 'health' | 'culture';
  description: string;
  attendees: number;
  location: string;
  date: string;
  id: string;
}
