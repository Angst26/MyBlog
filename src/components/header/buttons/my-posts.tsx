import styles from './my-posts.module.css';
import { NavLink} from "react-router-dom";

export const MyPostsButton = () => {
    return (
            <NavLink to='/myposts'>
                <button className={styles.button}>Мои посты</button>
            </NavLink>

        //
    )
}