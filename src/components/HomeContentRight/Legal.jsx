import React from 'react';
import { Button } from '@chakra-ui/react';

export default function Legal() {
  return (
    <Button
      onClick={() => (window.location.href = '/legal')}
      colorScheme="red"
      size="sm"
    >
      Imprint & Legal
    </Button>
  );
}
