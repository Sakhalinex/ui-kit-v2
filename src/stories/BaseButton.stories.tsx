import type { Story } from '@ladle/react';
import { BaseButton } from '../BaseButton/BaseButton';

export const Primary: Story = () => (
  <BaseButton onClick={() => alert('Clicked!')} variant="primary">
    Primary
  </BaseButton>
);
Primary.storyName = 'Primary Button';

export const Secondary: Story = () => (
  <BaseButton onClick={() => alert('Clicked!')} variant="secondary">
    Secondary
  </BaseButton>
);
Secondary.storyName = 'Secondary Button';
