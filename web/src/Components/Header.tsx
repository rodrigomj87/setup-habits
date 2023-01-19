import { Plus } from "phosphor-react";
import logoImage from '../assets/logo.svg';

export function Header() {

    return (
          <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt="Habits" />
          <button
          type='button'
          className='border border-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 focus:border-violet-50 focus:outline-none focus:ring-2'
          >
            <Plus size={20} className="text-violet-500"/>
            NOVO HÁBITO</button>
          </div>
    )
  
  }