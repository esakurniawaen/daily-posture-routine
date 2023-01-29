import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en-us">
            <Head />
            <body className="bg-slate-50 font-sans font-medium text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
