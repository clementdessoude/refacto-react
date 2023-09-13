import React, {FC} from 'react';
import {MultipleSelectProps, MultipleSelectPropTypes} from "./MultipleSelect.types";

const MultipleSelect: FC<MultipleSelectProps> = ({ selectValues }) => {
  return <>
    {
      Object.entries(selectValues).map(([key, values]) =>
        <select key={key} name={key} multiple>
          {values.map((element: string) => (
            <option value={element} key={element}>{element}</option>
          ))}
        </select>
      )
    }
  </>
}

MultipleSelect.displayName = 'MultipleSelect';

MultipleSelect.propTypes = MultipleSelectPropTypes;

export default MultipleSelect
