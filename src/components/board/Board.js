import React, { useContext } from 'react';
import Xicon from './../icons/Xicon';
import Oicon from './../icons/Oicon';
import redo from '../../assets/redo-svgrepo-com.svg';
import BoardCard from './BoardCard';
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

const Board = () => {
    const { squares , xnext , ties , winner , winnerLine , playMode , activeUser } = useContext(GameContext);
    const { showModal, setModalMode } = useContext(ModalContext);

    const resetGame = () => {
        showModal()
        setModalMode("start")
    }

    const checkUser = (user) => {
        if(playMode === 'pc') {
            if(user === activeUser) {
                return "(you)"
            } else {
                return "(pc)"
            }
        }
    }

    return (
        <div className='boards'>
            <div className='board__header'>
                <div>
                    <Xicon />
                    <Oicon />
                </div>
                <div className='board__turn'>
                    {!xnext ? (
                        <Xicon color="light" size="sm" /> 
                    ) : (
                        <Oicon color="light" size="sm" />
                    )}
                    turn
                </div>
                <div>
                    <button className='btn btn-sm board__restart' onClick={resetGame}>
                        <img src={redo} alt='' />
                    </button>
                </div>
            </div>
            <div className='board__body'>
                {squares.map((sq,ix) => (
                    <BoardCard key={ix} index={ix} user={sq} active={winner && winnerLine && winnerLine.includes(ix)} />
                ))}
            </div>
            <div className='board__footer'>
                <div className='card bg-blue'>
                    <p className='text-light'> x {checkUser('x')}</p>
                    <strong className='text-2xl'> {ties.x}</strong>
                </div>
                <div className='card bg-light'>
                    <p className='text-light'> ties</p>
                    <strong className='text-2xl'> {ties.x + ties.o}</strong>
                </div>
                <div className='card bg-yellow'>
                    <p className='text-light'> o {checkUser('o')}</p>
                    <strong className='text-2xl'> {ties.o}</strong>
                </div>
            </div>
        </div>
    )
}

export default Board