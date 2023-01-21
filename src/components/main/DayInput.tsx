import { NativeSelect } from '@mui/material';
import { useCreateDate } from 'hooks/useCreateDate';
import React from 'react';

function DayInput() {
  const days = useCreateDate(31);

  return (
    <>
      <label>일</label>
      <NativeSelect value={23}>
        {days.map((day) => {
          return (
            <option key={day} value={day}>
              {day}
            </option>
          );
        })}
      </NativeSelect>
    </>
  );
}

export default DayInput;
