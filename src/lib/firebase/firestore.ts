import { getFirestore } from "firebase/firestore";

import { firebaseApp } from "./client";

export const firestore = getFirestore(firebaseApp);
