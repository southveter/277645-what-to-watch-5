export const ActionType = {
  SWITCH_GENRE: `SWITCH_GENRE`
};

export const ActionCreator = {
  switchGenre: (genre) => ({
    type: ActionType.SWITCH_GENRE,
    payload: genre,
  }),
};
