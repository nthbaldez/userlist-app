import { format } from 'date-fns';

export const formatDate = (date: string) => {
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  const dateFormatted = `${day}/${month}/${year}`;
  return dateFormatted;
};


