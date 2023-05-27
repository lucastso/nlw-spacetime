import React from 'react'

const EmptyMemories = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="h-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a href="" className="underline transition-colors hover:text-gray-50">
          criar agora!
        </a>
      </p>
    </div>
  )
}

export default EmptyMemories
