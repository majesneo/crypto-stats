import { customAlphabet } from 'nanoid/non-secure';
import { useState } from 'react';

const nanoid = customAlphabet('1234567890abcdef', 10);

export const useUniqueId = () => {
  const [id] = useState(nanoid());
  return id;
};
