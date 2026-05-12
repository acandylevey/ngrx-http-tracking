export const convertResponseToError = (err: any, fallbackMessage: string) => {
    let errorMsg = '';
    if (err?.name === 'HttpErrorResponse' && typeof err.error === 'string') {
        try {
            // When endpoints yield NoValue as a success response, the openApi files we
            // auto-generate would document the responses to that endpoint with "text" type.
            // Because of that, angular would place the JSON as text into the error here.
            // We need to counter it by attempting to parse the error msg:
            const parsed = JSON.parse(err.error);
            errorMsg = typeof parsed?.error === 'string' ? parsed.error : err.error;
        } catch {
            errorMsg = err.error;
        }
    } else if (err?.name === 'HttpErrorResponse' && typeof err?.error?.error === 'string') {
        errorMsg = err.error.error;
    }
    return new Error(!errorMsg ? fallbackMessage : errorMsg);
};
