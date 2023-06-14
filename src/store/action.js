export const getRandomGreeting = () => (dispatch) => {
  fetch('/api/random_greeting')
    .then((response) => response.json())
    // eslint-disable-next-line no-use-before-define
    .then((data) => dispatch(setRandomGreeting(data.greeting)))
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
};

export const setRandomGreeting = (greeting) => ({
  type: 'SET_RANDOM_GREETING',
  greeting,
});
