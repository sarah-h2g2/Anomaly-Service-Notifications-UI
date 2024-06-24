import { render, screen, act } from '@testing-library/react';
import Drawer from './Drawer';

const mockComponent = <div>test</div>

const testProps = {
    children: mockComponent,
    modalAnimation: 'slide-down',
    contentRef: jest.fn(),
    mainRef: jest.fn(),
    handleMarkAllRead: jest.fn(),
    markAllRead: false,
    onClose: jest.fn()
}
test('renders the drawer', () => {
  render(<Drawer {...testProps} />);
  const title = screen.getByText(/All Unread Notifications/i);
  expect(title).toBeInTheDocument();
});

test('shows error message', () => {
    const propsWithError = {
        ...testProps,
        errorMessage: "foo"
    }
    render(<Drawer {...propsWithError} />);
    const error = screen.getByText(/foo/i);
    expect(error).toBeInTheDocument();
});

test('do not show "All Unread Notifications" when marked all read', async() => {
    const propsWithMarkedAllRead = {
        ...testProps,
        markAllRead: true,
    }
    render(<Drawer {...propsWithMarkedAllRead} />);

    const unread = screen.queryByText(/All Unread Notifications/i);
    expect(unread).not.toBeInTheDocument();
});