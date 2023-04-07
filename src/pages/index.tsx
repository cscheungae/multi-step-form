import styles from './index.module.css';
import MultiStepForm from '@/components/MultiStepForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.expand}>
        <MultiStepForm />
      </div>
      <div className={styles.attribution}>
        Challenge by{' '}
        <a
          className={styles.anchor}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Billy Cheung</a>.
      </div>
    </main>
  );
}
