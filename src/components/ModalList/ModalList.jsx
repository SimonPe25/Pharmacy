import React from 'react';
import Modal from '../Modal/Index';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoadFirstWindow, getIsOpenWindowCart, vendor } from '../../store/selectors';
import { modalCartClose, modalFirstClose } from '../../store/actions';



const ModalList = (props) => {

    const isOpenFirst = useSelector(getIsLoadFirstWindow)
    const isOpenWindowCart = useSelector(getIsOpenWindowCart)

    const modalContentFrist = " Вы хотитете добавить медикамент в корзину?"
    const isCartDelete = " Вы хотитете удалить медикамент из корзины?"

    const vendorcode = useSelector(vendor)
    const dispatch = useDispatch()

    const modalFirstCloseWindow = () => {
        const isOpenData = false
        dispatch(modalFirstClose(isOpenData))
    }
    const modalCartCloseWindow = () => {
        const isOpenData = false
        dispatch(modalCartClose(isOpenData))
    }
    const { toggleAdded } = props
    return (
        <div>
            {isOpenFirst &&
                <Modal
                    vendorcode={vendorcode}
                    toggleAdded={toggleAdded}
                    name="Добавление товара в корзину"
                    text={modalContentFrist}
                    onClick={modalFirstCloseWindow}
                />
            }
            {isOpenWindowCart &&
                <Modal
                    vendorcode={vendorcode}
                    toggleAdded={toggleAdded}
                    name="Удаление медикамента из корзины"
                    text={isCartDelete}
                    onClick={modalCartCloseWindow}
                />
            }

        </div>
    )
}

export default ModalList

