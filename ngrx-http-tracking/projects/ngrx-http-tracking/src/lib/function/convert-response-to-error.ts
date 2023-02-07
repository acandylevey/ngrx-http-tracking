export const convertResponseToError = (err: any, fallbackMessage: string) => {
  let errorMsg = '';
  if (err?.name === 'HttpErrorResponse' && typeof err.error === 'string') {
    errorMsg = err.error;
  } else if (
    err?.name === 'HttpErrorResponse' &&
    typeof err?.error?.error === 'string'
  ) {
    errorMsg = err.error.error;
  }

  return new Error(!errorMsg ? fallbackMessage : errorMsg);
};
