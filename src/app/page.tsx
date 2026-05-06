"use client";

import styles from "./home.module.scss";
import Image from 'next/image';
import UploadIcon from "@assets/icons/upload.svg";

export default function Home() {

    return (
        <div className={styles.home}>
            <button className={styles.uploadButton}>
                <Image src={UploadIcon} alt="Upload Icon" width={24} height={24} />
                Upload Excel Files
            </button>
        </div>
    )
}