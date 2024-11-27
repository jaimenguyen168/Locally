import { UserStore } from "@/types/store";
import { User } from "@/types/type";
import { create } from "zustand";

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),

  selectedUser: null,
  setSelectedUser: (selectedUser: User) => set({ selectedUser }),
  clearSelectedUser: () => set({ selectedUser: null }),

  userList: [],
  setUserList: (userList: User[]) => set({ userList }),
  clearUserList: () => set({ userList: [] }),
}));