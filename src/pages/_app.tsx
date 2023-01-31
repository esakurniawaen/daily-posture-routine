import { type AppType } from 'next/dist/shared/lib/utils';
import { dailyRoutinesAtom } from '@/screens/home/atom';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Provider } from 'jotai';

// only use default export for React Component (e.g a function that returned JSX.Element and used as follow <ExampleComponent /> in other files), otherwise use named export instead
// use PascalCase name for React Component file or folder containing only one React component (e.g Header folder only exported Header, if for example you have a buttons folder that exported multiple buttons use camelCase instead for the buttons folder), otherwise use camelCase instead
const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class">
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
    );
};

export default MyApp;
