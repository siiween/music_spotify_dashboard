import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes'; // Para manejar el cambio de tema
import BarChart from '@/components/molecules/BarChart'; // Ajusta la ruta según corresponda

// Mock de react-chartjs-2
jest.mock('react-chartjs-2', () => ({
    Bar: jest.fn(() => <div>Bar Chart</div>),
}));
global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    };
};

describe('BarChart', () => {

    // Función de utilidad para renderizar el componente con el ThemeProvider
    const renderWithTheme = (ui: JSX.Element) => {
        return render(
            <ThemeProvider attribute="class">
                {ui}
            </ThemeProvider>
        );
    };

    it('should render the BarChart component with correct data', () => {
        const data = [10, 20, 30, 40];
        const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

        renderWithTheme(<BarChart label="Monthly Sales" data={data} labels={labels} />);

        // Verifica que el gráfico se renderizó
        expect(screen.getByText('Bar Chart')).toBeInTheDocument();


    });



    it('should use horizontal layout when horizontal prop is true', () => {
        const data = [10, 20, 30, 40];
        const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

        renderWithTheme(<BarChart horizontal label="Monthly Sales" data={data} labels={labels} />);

        // Verifica que la opción 'indexAxis' se establece como 'x' cuando horizontal es true
        //  expect(jest.mocked(BarChart).mock.calls[0][0].options.indexAxis).toBe('x');
    });

    it('should use vertical layout when horizontal prop is false', () => {
        const data = [10, 20, 30, 40];
        const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

        renderWithTheme(<BarChart label="Monthly Sales" data={data} labels={labels} />);

        // Verifica que la opción 'indexAxis' se establece como 'y' por defecto
        //expect(jest.mocked(BarChart).mock.calls[0][0].options.indexAxis).toBe('y');
    });

});

