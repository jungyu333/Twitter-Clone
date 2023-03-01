import { authService, dataBaseService } from 'fbase/config';
import { doc, DocumentReference, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { loginCheck } from 'redux/action/logIn';
import { useAppDispatch } from 'redux/store';
import { IUser } from 'types/common';

export function useRefreshUser() {
  const dispatch = useAppDispatch();
  const sessionKey = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const isSession = sessionStorage.getItem(sessionKey) ? true : false;

  useEffect(() => {
    if (isSession) {
      let userData: IUser | null = null;
      authService.onAuthStateChanged(async (user) => {
        if (user) {
          const userId = user.uid;
          const userDocument = doc(
            dataBaseService,
            'users',
            userId,
          ) as DocumentReference<IUser>;

          const userSnap = await getDoc(userDocument);
          if (userSnap.exists()) {
            userData = userSnap.data();
            dispatch(loginCheck(userData));
          }
        }
      });
    }
  }, []);
}
