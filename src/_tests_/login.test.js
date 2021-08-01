import { render, screen, cleanup } from '@testing-library/react'
import Login from '../Components/Login'

afterEach(() => {
    cleanup()
})

test('should render login component', () => {
    render(<Login />)
    const loginElement = screen.getByTestId('login-test')
    expect(loginElement).toBeInTheDocument()
})
