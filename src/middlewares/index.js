const logger = store => next => action => {
  console.log(action);
};

export { logger };
