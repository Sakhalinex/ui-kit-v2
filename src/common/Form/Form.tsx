import React, { useState } from 'react';
import { BaseButton } from '../BaseButton/BaseButton';
import { Input } from '../Input/Input';

export const Form: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
      <BaseButton variant="primary">Submit</BaseButton>
    </form>
  );
};
