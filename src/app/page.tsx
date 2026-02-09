"use client";
import styles from "./page.module.css";
import {reasons} from "@/app/utils/reasons";
import {useEffect, useState} from "react";
import RabbitLoading from './assets/lottie/rabbit_loading.json'
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';

export default function Home() {

    const [reason, setReason] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const randomize = () => {
        if (isLoading) return;
        
        setLoading(true);
        const newReason = reasons[Math.floor(Math.random() * reasons.length)];

        setTimeout(() => {
            setReason(newReason);
            setLoading(false);
        }, 2000)
    };

    if (!mounted) return <div className={styles.page}></div>;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Kocham Cię mocno ponieważ...</h1>
                {isLoading && <Lottie animationData={RabbitLoading} loop={true}/>}
                {!isLoading && reason !== '' && (
                    <div className={styles.typewriter}>
                        <Typewriter
                            options={{
                                strings: [reason],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                )}
                <button className={styles.neonButton} onClick={randomize}>
                    kliknij kochanie
                </button>

            </main>
        </div>
    );
}
