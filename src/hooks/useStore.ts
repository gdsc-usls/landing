import { create } from 'zustand';

type State = {
  unmountLoader: boolean;
  setUnmountLoader: () => void;
};

export const useStore = create<State>((set) => ({
  unmountLoader: false,
  setUnmountLoader: () => set(() => ({ unmountLoader: true })),
}));
