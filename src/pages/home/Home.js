import styles from './Home.module.css'

export default function Home() {
    return (
    <div className={styles.container}>
        <section className={styles.sectionone}>
            <div className={styles.sectiononecontent}>
                <h2 className={styles.sectiononetitle}>Lorem Ipsum</h2>
                <p className={styles.sectiononetext}>Lorem ipsum dolor sit amet, 
                    <br/>consectetur adipiscing elit. </p>
            </div>
        </section>
        <section className={styles.sectiontwo}>
            <div className={styles.sectiontwocontent}>
                <h2 className={styles.sectiontwotitle}>Cras sollicitudin</h2>
                <p className={styles.sectiontwotext}>
                    Praesent efficitur tincidunt quam, ac rutrum ligula sagittis quis. <br/>
                    Integer vel ipsum est. <br/>
                    Nam sed massa lobortis, pretium sapien nec, laoreet magna.
                </p>
            </div>
        </section>
        <section className={styles.sectionthree}>
            <div className={styles.sectionthreecontent}>
                <h2 className={styles.sectionthreetitle}>Donec consectetur</h2>
                <p className={styles.sectionthreetext}>
                Ut laoreet erat auctor odio accumsan accumsan vel ac augue. <br/>
                Praesent libero risus, semper eget vestibulum vel, molestie fermentum felis. <br/>
                In imperdiet hendrerit nibh ac lobortis. <br/>
                Suspendisse lorem magna, efficitur in est sed, placerat sagittis nunc.
                </p>
            </div>
        </section>
    </div>
    )
}