import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar.jsx';

describe('SearchBar', () => {
  it('calls onSearch with the typed username when submitted', async () => {
    const onSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar onSearch={onSearch} loading={false} />);

    const input = screen.getByPlaceholderText(/buscar usuário do github/i);
    await user.type(input, 'octocat');
    await user.click(screen.getByRole('button', { name: /buscar/i }));

    expect(onSearch).toHaveBeenCalledWith('octocat');
  });

  it('disables the submit button while loading', () => {
    render(<SearchBar onSearch={vi.fn()} loading />);
    expect(screen.getByRole('button', { name: /buscando/i })).toBeDisabled();
  });

  it('disables the submit button when the input is empty', () => {
    render(<SearchBar onSearch={vi.fn()} loading={false} />);
    expect(screen.getByRole('button', { name: /buscar/i })).toBeDisabled();
  });
});
