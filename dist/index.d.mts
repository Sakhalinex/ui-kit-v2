import React from 'react';

interface BaseButton {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}
declare const BaseButton: React.FC<BaseButton>;

declare const Form: React.FC;

interface InputProps {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
declare const Input: React.FC<InputProps>;

export { BaseButton, Form, Input, type InputProps };
