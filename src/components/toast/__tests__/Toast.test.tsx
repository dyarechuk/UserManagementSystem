import { showToast } from '@/components/toast/model/slice';
import { store } from '@/main/store';
import { DashboardLayout } from '@/shared/layouts/dashboard-layout';
import { customRender } from '@/test/utils';
import { fireEvent, screen } from '@testing-library/react';

describe('Toast notification', () => {
  it('displays and hides toast message', async () => {
    customRender(<DashboardLayout />);

    store.dispatch(
      showToast({
        message: 'User deleted successfully',
        severity: 'success',
      }),
    );

    expect(
      await screen.findByText(/user deleted successfully/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-standardSuccess');

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    expect(store.getState().toast.open).toBe(false);
  });
});