import { NativeSelect } from '@mui/material';
import { useCreateYear } from 'hooks/useCreateYear';
import React, { ChangeEvent, useState } from 'react';
import { IDateInputProps } from 'types/main';

function YearInput({ register }: IDateInputProps) {
  const years = useCreateYear();
  const [year, setYear] = useState(years[0]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value as unknown as number);
  };

  return (
    <>
      <label>년</label>
      <NativeSelect {...register} defaultValue={year} onChange={handleChange}>
        {years.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
}

export default YearInput;
