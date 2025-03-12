import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const toggleStore = (set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
});

const useToggle = create(
  devtools(
    persist(toggleStore, {
      name: "theme",
    })
  )
);

export default useToggle;
