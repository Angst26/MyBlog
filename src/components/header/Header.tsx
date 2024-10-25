import styles from '../../App.module.css';

import * as React from "react";
import {MyPostsButton} from "./buttons/my-posts.tsx";

export const Header: React.FC = () => {
    return (
        <div>
            <header className={styles.header}>
                <MyPostsButton/>
            </header>

        </div>
    )
}