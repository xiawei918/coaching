import styles from './Contact.module.css'


export default function Contact() {
    return (
        <div className={styles.container}>
            <section className={styles.sectionone}>
                <div className={styles.sectiononecontent}>
                    <h2 className={styles.sectiononetitle}>Contact Us</h2>
                    <ul className={styles.info}>
                    <li>Email: john.doe@gmail.com</li>
                    <li>Phone: (555)-645-6699</li>
                    <li>Address: 555 Main St, New York, 29304</li>
                    <li></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}