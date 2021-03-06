export default interface Event {
  name: string;
  category: 'tech' | 'art' | 'sports' | 'health' | 'culture';
  description: string;
  group: string;
  attendees: number;
  location: string;
  date: string;
  time: string;
  id: string;
}
