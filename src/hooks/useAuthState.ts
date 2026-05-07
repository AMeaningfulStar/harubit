"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState } from "react";

import { firebaseAuth } from "@/lib/firebase";

interface UseAuthStateResult {
  user: User | null;
  loading: boolean;
}

export function useAuthState(): UseAuthStateResult {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (currentUser: User | null) => {
        setUser(currentUser);
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return { user, loading };
}
