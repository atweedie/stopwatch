import React from 'react'
import { render } from '@testing-library/react';
import TimerDisplay from './TimerDisplay';
import {TIMER_TICK_DURATION_IN_MS} from "../../constants";

const stubSetElapsedTime = jest.fn();
const stubSetIsRunning = jest.fn();
const stubUseContext = jest.fn();

const defaultContext = {
    elapsedTime: 0,
    isRunning: false,
    setElapsedTime: stubSetElapsedTime,
    setIsRunning: stubSetIsRunning
}

const renderWithContext = (context = defaultContext) => {
    React.useContext = stubUseContext.mockReturnValue(context)
    return render(<TimerDisplay/>)
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

test('should not call setElapsedTime if isRunning is false', () => {
    const givenContext = {
        ...defaultContext,
        isRunning: false,
    };

    renderWithContext(givenContext);
    
    jest.runAllTimers();

    expect(stubSetElapsedTime).not.toHaveBeenCalled();
})

test('should call setElapsedTime with expected parameters if isRunning is true', () => {
    const givenContext = {
        ...defaultContext,
        isRunning: true,
    };

    renderWithContext(givenContext);
    
    jest.runAllTimers();

    expect(stubSetElapsedTime).toHaveBeenCalledWith(TIMER_TICK_DURATION_IN_MS);
})

