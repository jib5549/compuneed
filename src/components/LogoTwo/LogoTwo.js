import styles from "./LogoTwo.module.scss";

export default function Logo() {
  return (
    <div>
      <div className={styles.waviy}>
        <a href="http://localhost:3000">
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>P</span>
          <span>U</span>
          <span>N</span>
          <span>E</span>
          <span>E</span>
          <span>D</span>
          <span>.</span>
        </a>
      </div>
    </div>
  );
}
