import { NativeSelect } from '@mui/material';
import { useCreateDate } from 'hooks/useCreateDate';
import React, { ChangeEvent, useState } from 'react';
import { IDateInputProps } from 'types/main';

function DayInput({ register }: IDateInputProps) {
  const days = useCreateDate(31);

  const [day, setDay] = useState(days[0]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value as unknown as number);
  };

  return (
    <>
      <label>일</label>
      <NativeSelect defaultValue={day} {...register} onChange={handleChange}>
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
