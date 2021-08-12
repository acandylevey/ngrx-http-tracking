export const convertResponseToError = (err: any, fallbackMessage: string) => {
  if (err && err.name === 'HttpErrorResponse' && err.error) {
    return <Error>err.error;
  } else {
    return new Error(fallbackMessage);
  }
};
