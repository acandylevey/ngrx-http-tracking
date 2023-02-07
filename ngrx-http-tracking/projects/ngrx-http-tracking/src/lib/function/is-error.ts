export const isError = (value: any): value is Error =>
  !!value && value.name && value.message;
