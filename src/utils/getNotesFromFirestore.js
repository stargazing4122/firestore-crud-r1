import { db } from '../firebase/config';

export const getNotesFromFirestore = async (uid) => {
  try {
    const notes = [];
    const snapShot = await db
      .collection(`/${uid}/journal/notes/`)
      .orderBy('date', 'desc')
      .get();

    snapShot.forEach((snap) => {
      notes.push({
        id: snap.id,
        ...snap.data(),
      });
    });

    return notes;
  } catch (err) {
    console.log(err);
  }
};

// export const getNotesFromFirestore = async (uid) => {
//   const notes = [];
//   db.collection(`/${uid}/journal/notes/`)
//     .get()
//     .then((snapShot) => {
//       snapShot.forEach((snap) => {
//         notes.push({
//           id: snap.id,
//           ...snap.data(),
//         });
//       });
//     })
//     .catch(console.log);
//   return notes;
// };
