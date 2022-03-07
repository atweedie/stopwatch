import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import TimerToggleButton from './TimerToggleButton';

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
    return render(<TimerToggleButton/>)
};

beforeEach(() => {
    jest.useFakeTimers();
})

afterEach(() => {
    jest.useRealTimers();
});

test('should render as expected when isRunning is set to false', () => {
const component = renderWithContext();
    
    expect(component.container).toMatchSnapshot();
});

test('should render as expected when isRunning is set to true', () => {
    const givenContext = {
        ...defaultContext,
        isRunning: true
    }

    const component = renderWithContext(givenContext);
        
        expect(component.container).toMatchSnapshot();
    });

test('should call setIsRunning with true on button click when isRunning is false', () => {
    renderWithContext();

    const button = screen.getByText('Start');
        
    fireEvent.click(button)

    jest.runAllTimers();

    expect(stubSetIsRunning).toHaveBeenCalledWith(true);
});

test('should call setIsRunning with false on button click when isRunning is true', () => {
    const givenContext = {
        ...defaultContext,
        isRunning: true
    }
    
    renderWithContext(givenContext);

    const button = screen.getByText('Stop');
        
    fireEvent.click(button)

    jest.runAllTimers();

    expect(stubSetIsRunning).toHaveBeenCalledWith(false);
});