/**
 * Get Quizes
 */
export const getQuizes = state => state.Home.quizes;

/**
 * Get Quize by id
 */
export const getQuizeById = (state, id) => {
  return state.Home.quizes?.find(i => i.id === id);
};

/**
 * Get recent quizes
 */
export const getRecentQuizes = state => state.Home.recentQuizes;

/**
 * Get Quize by id
 */
export const getRecentQuizeById = (state, id) => {
  return state.Home.recentQuizes?.find(i => i.id === id);
};

/**
 * Get Recently used quiz
 */
export const getRecentlyusedQuiz = state => {
  const quizes = state.Home.recentQuizes;
  const recentlyUsed = quizes.sort((a, b) => a.startedAt - b.startedAt);

  return recentlyUsed;
};
