import { config } from 'dotenv';
import { resolve } from 'path';
import { initializeApp } from 'firebase/app';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';

config({ path: resolve(process.cwd(), '.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missing.length > 0) {
  console.error(`Missing Firebase config: ${missing.join(', ')}`);
  process.exit(1);
}

const db = getFirestore(initializeApp(firebaseConfig));

function isGuestReservation(document: QueryDocumentSnapshot): boolean {
  const room = String(document.data().roomNumber ?? '').toLowerCase();
  return (
    room === 'guest' ||
    room.includes('guest') ||
    room.includes('gäste') ||
    room.includes('gaeste')
  );
}

async function deleteGuestReservations() {
  const reservationsRef = collection(db, 'reservations');

  const guestQuery = query(reservationsRef, where('roomNumber', '==', 'guest'));
  const guestSnap = await getDocs(guestQuery);
  const allSnap = await getDocs(reservationsRef);

  const byId: Record<string, QueryDocumentSnapshot> = {};
  for (const document of guestSnap.docs) byId[document.id] = document;
  for (const document of allSnap.docs) {
    if (isGuestReservation(document)) byId[document.id] = document;
  }

  const toDelete = Object.values(byId);
  console.log(`Found ${toDelete.length} guest-room reservation(s) to delete`);

  if (toDelete.length === 0) {
    console.log('Nothing to delete.');
    return;
  }

  for (const document of toDelete) {
    const data = document.data();
    console.log(
      `Deleting ${document.id} | room=${data.roomNumber} | ${data.startTime} → ${data.endTime} | ${data.description ?? ''}`
    );
    await deleteDoc(doc(db, 'reservations', document.id));
  }

  console.log(`Deleted ${toDelete.length} guest-room reservation(s).`);
}

deleteGuestReservations().catch((error) => {
  console.error('Failed to delete guest reservations:', error);
  process.exit(1);
});
