import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import TimerResetButton from './TimerResetButton';

const stubSetElapsedTime = jest.fn();
const stubSetIsRunning = jest.fn();
const stubUseContext = jest.fn();

const defaultContext = {
    isRunning: false,
    setElapsedTime: stubSetElapsedTime,
    setIsRunning: stubSetIsRunning
}

const renderWithContext = (context = defaultContext) => {
    React.useContext = stubUseContext.mockReturnValue(context)
    return render(<TimerResetButton/>)
};

beforeEach(() => {
    jest.useFakeTimers();
})

afterEach(() => {
    jest.useRealTimers();
});

test('should render as expected', () => {
const component = renderWithContext();
    
    expect(component.container).toMatchSnapshot();
});

test('should call setElapsedTime with expected parameters on button click', () => {
    renderWithContext();

    const button = screen.getByText('Reset');
        
    fireEvent.click(button)

    jest.runAllTimers();

    expect(stubSetElapsedTime).toHaveBeenCalledWith(0);
});

test('should call setIsRunning with expected parameters on button click', () => {
    renderWithContext();

    const button = screen.getByText('Reset');
        
    fireEvent.click(button)

    jest.runAllTimers();

    expect(stubSetIsRunning).toHaveBeenCalledWith(false);
});