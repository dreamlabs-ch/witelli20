export type Reservation = {
  id?: string;
  roomNumber: string;
  reserverRoom: string;  // Room number of the person making the reservation
  startTime: string;
  endTime: string;
  description: string;
  createdAt: string;
  status: 'upcoming' | 'past';
  isOpenInvite?: boolean; // Whether the event is open for other residents to join
};

export const ROOM_OPTIONS = {
  'foyer': 'Foyer / Projector Room',
  'party': 'Party Room',
  'rooftop': 'Rooftop Terrace',
} as const;

export type RoomType = keyof typeof ROOM_OPTIONS;

// Rooms that can be selected for a NEW reservation. Rooftop is intentionally
// excluded so it's no longer bookable, while remaining in ROOM_OPTIONS so
// existing rooftop reservations still display in the calendar and lists.
// Guest room is fully removed (WOKO policy) — not bookable and not displayed.
export const BOOKABLE_ROOM_OPTIONS: Partial<Record<RoomType, string>> = {
  'foyer': ROOM_OPTIONS.foyer,
  'party': ROOM_OPTIONS.party,
};
