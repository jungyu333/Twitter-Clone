import { NativeSelect } from '@mui/material';
import { useCreateDate } from 'hooks/useCreateDate';
import React from 'react';

function MonthInput() {
  const months = useCreateDate(12);
  return (
    <>
      <label>월</label>
      <NativeSelect value={4}>
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
