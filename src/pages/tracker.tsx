import TrackerScreen from '@/screens/tracker';
import { type NextPage } from 'next';
import Head from 'next/head';

const TrackerPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Tracker | Daily Posture Routine</title>
            </Head>

            <TrackerScreen />
        </>
    );
};

export default TrackerPage;
