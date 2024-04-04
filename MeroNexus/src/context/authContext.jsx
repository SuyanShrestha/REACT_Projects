import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // paxi backend ni garda kheri auth ko lagi API use hanni
    setCurrentUser({
      id: 1,
      name: "Suyan Shrestha",
      profilePic:
        "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/334460295_9750999404925900_7907884573880425393_n.jpg?stp=dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XI_W44PJMe4AX9QPmx-&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD-ddkAnwL-Ry-0BLhy7doJ6m1UKVxwreoD3E970vZOtQ&oe=65FD43C3",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
