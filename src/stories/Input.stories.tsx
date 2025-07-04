import type { Story } from '@ladle/react';
import { useState } from 'react';
import { Input } from '../Input/Input';

export const Default: Story = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Your name"
      placeholder="Enter name"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

Default.storyName = 'Text Input';
