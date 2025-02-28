import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import React from 'react';


const AutosizeTextareaDemo = () => {
  return (
    <div className="w-full px-10">
      <AutosizeTextarea placeholder="This textarea with min height 52 and unlimited max height." />
    </div>
  );
};

export default AutosizeTextareaDemo;
