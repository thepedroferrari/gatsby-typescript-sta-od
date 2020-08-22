import { useState } from 'react';

export function useToggle(initial: boolean): any {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle(prevState => !prevState);

  return [isToggled, setToggle, toggle];
}
