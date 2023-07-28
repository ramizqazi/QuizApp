import React from 'react';
import { useController } from 'react-hook-form';
import TextInput from 'react-native-text-input-interactive';

/* =============================================================================
<FormInput />
============================================================================= */
const FormInput = ({ placeholder, name, control }) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <TextInput
      mainColor="#999"
      value={field.value}
      placeholder={placeholder}
      onChangeText={field.onChange}
    />
  );
};

/* Export
============================================================================= */
export default FormInput;
