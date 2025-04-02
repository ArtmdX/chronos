import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import styles from './styles.module.css';

import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form action='' className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          labelText='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
