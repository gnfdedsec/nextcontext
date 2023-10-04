import { create } from 'zustand';  // แก้ิี bug create ขีดฆ่าใช้ แทน create

// Create a Zustand store
const useMyStore = create((set) => ({
  value: '',
  setValue: (newValue) => set({ value: newValue }),
}));

export default useMyStore;

