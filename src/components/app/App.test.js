import { render } from '@testing-library/react';
import App from './App';

test('should render as expected', () => {
  const component = render(<App />);
 
  expect(component.container).toMatchSnapshot();
});
