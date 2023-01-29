import HomeScreen from '@/screens/home';
import { type NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | Daily Posture Routine</title>
            </Head>

            <HomeScreen />
        </>
    );
};

export default HomePage;
