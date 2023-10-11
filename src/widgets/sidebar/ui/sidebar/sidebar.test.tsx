import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from './sidebar'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from '../../../../shared/lib/render-with-translation/render-with-translation'

describe('sidebar', () => {
    test('sidebar render', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
  test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        // @ts-ignore

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
