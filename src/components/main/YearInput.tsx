import { NativeSelect } from '@mui/material';
import { useCreateYear } from 'hooks/useCreateYear';
import React from 'react';

function YearInput() {
  const years = useCreateYear();

  return (
    <>
      <label>년</label>
      <NativeSelect value={1}>
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
