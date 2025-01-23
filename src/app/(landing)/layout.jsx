import HeaderHome from '@/components/headers/header-index'
import styles from './layout.module.css'
import Footer from'./home/footer'
export default function RootLayout({ children }) {
    return (
        <div>
            <div className={styles.contentMain}>
                <HeaderHome />
                {children}
            </div>
            <Footer />
        </div>

    );
}
