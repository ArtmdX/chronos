import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <strong>{state.config.workTime}</strong> min
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <strong>{state.config.shortBreakTime}</strong> min
      </span>
    ),
    longBreakTime: (
      <span>
        Descanse por <strong>{state.config.longBreakTime}</strong> min
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <strong>{state.config.workTime}</strong> min
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanço é de <strong>{state.config.shortBreakTime}</strong> min
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanço é de <strong>{state.config.longBreakTime}</strong> min
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
