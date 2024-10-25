import styles from "../../App.module.css";
import content from './content.module.css'
import {useAppSelector} from "../../hooks/redux-hooks/hooks.ts";
import React, {useEffect} from "react";

export const Content = React.memo(() => {
    useEffect(() => {
        console.log("render");
        return () => {
            console.log("deleted");
        }
    }, [])
    const posts = useAppSelector((state) => {
        return state.posts.posts
    });


    return (
        <div className={`${styles.content}  ${content.container}`}>
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>
                                <button>
                                    {post.title}
                                    {post.content}
                                </button>

                            </li>
                        )
                    })

                }
            </ul>
        </div>
    )
})

