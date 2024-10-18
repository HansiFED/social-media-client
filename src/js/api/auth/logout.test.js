import { remove } from '../../storage/remove.js';
import { logout } from './logout.js';

jest.mock('../../storage/remove.js', () => ({
  remove: jest.fn(),
}));

describe('Testing the logout function', () => {
  it('should delete the token and profile from storage', () => {
    logout();

    expect(remove).toHaveBeenCalledWith('token');
    expect(remove).toHaveBeenCalledWith('profile');
  });
});
