import * as Popover from '@radix-ui/react-Popover';
import clsx from 'clsx';
import { CellSignalX } from 'phosphor-react';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
    amount: number
    completed: number
}

export function HabitDay({ amount, completed }: HabitDayProps) {

    const completedPercent = Math.round((completed / amount) * 100);


    return (
        <Popover.Root >
            <Popover.Trigger
                className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                    'bg-zinc-900 border-zinc-800': completedPercent === 0,
                    'bg-violet-900 border-violet-500': completedPercent > 0 && completedPercent < 20,
                    'bg-violet-800 border-violet-500': completedPercent >= 20 && completedPercent < 40,
                    'bg-violet-700 border-violet-500': completedPercent >= 40 && completedPercent < 60,
                    'bg-violet-600 border-violet-500': completedPercent >= 60 && completedPercent < 80,
                    'bg-violet-500 border-violet-400': completedPercent >= 80,
                })}
            />

            <Popover.Portal>
                <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col' >
                    <span className='font-semibold text-zinc-400'>TESTE</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>19/01</span>

                    <ProgressBar progress={completedPercent} />

                    <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}