import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.sectionone}>
                <div className={styles.sectiononecontent}>
                    <h2 className={styles.sectiononetitle}>About</h2>
                    <p className={styles.sectiononetext}>
                    Ut mollis urna at scelerisque cursus. Pellentesque eget arcu leo.
                    Sed libero diam, ultrices quis sem eget, fermentum pretium purus.
                    Donec in pretium arcu. Nam a odio id risus hendrerit varius et in dolor. 
                    Duis nec fringilla tellus. Mauris luctus dictum ex, nec cursus dui. 
                    Sed accumsan, sem suscipit pulvinar aliquet, magna nibh vestibulum dui, 
                    nec posuere libero quam at neque.
                    </p>
                </div>
            </section>
        </div>
    )
}