import { NativeSelect } from '@mui/material';
import { useCreateDate } from 'hooks/useCreateDate';
import React, { ChangeEvent, useState } from 'react';
import { IDateInputProps } from 'types/main';

function MonthInput({ register }: IDateInputProps) {
  const months = useCreateDate(12);
  const [month, setMonth] = useState(months[0]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value as unknown as number);
  };

  return (
    <>
      <label>월</label>
      <NativeSelect {...register} defaultValue={month} onChange={handleChange}>
        {months.map((month) => {
          return (
            <option key={month} value={month}>
              {month}월
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
}

export default MonthInput;
