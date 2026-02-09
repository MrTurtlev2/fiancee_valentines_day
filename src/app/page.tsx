"use client";
import styles from "./page.module.css";
import {reasons} from "@/app/utils/reasons";
import {useState} from "react";
import RabbitLoading from './assets/lottie/rabbit_loading.json'
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';

export default function Home() {

    const [reason, setReason] = useState('');
    const [isLoading, setLoading] = useState(false);

    const randomize = () => {
        setLoading(true);
        const newReason = reasons[Math.floor(Math.random() * reasons.length)];

        setTimeout(() => {
            setReason(newReason);
            setLoading(false);
        }, 2000)
    };

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
                    losuj kochanie
                </button>

            </main>
        </div>
    );
}
