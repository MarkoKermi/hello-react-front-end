export const getRandomGreeting = () => {
  return (dispatch) => {
    fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setRandomGreeting(data.greeting)))
      .catch((error) => console.error(error));
  };
};

export const setRandomGreeting = (greeting) => {
  return {
    type: 'SET_RANDOM_GREETING',
    greeting,
  };
};
