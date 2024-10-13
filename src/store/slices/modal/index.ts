import { RootState } from '@/store/index'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'


type ModalStatetypes = {
    data?: any
    view:
    "SELECT_WEEK_MODAL_VIEW" |
    "",

}

const initialState: ModalStatetypes = { view: '', data: null }

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setModalState: (state: ModalStatetypes, action: PayloadAction<ModalStatetypes>) => {
            state.view = action.payload.view;
            state.data = action.payload.data;
        },
        removeModalState: (state: ModalStatetypes) => {
            state.view = ""
            state.data = null;
        }
    }
})

export const useModal = () => {
    const modalState: ModalStatetypes = useSelector((state: RootState) => state.modal);
    const dispatch = useDispatch();

    const openModal = ({ view, data }: ModalStatetypes) => {
        dispatch(setModalState({ view, data }));
    }
    const closeModal = () => {
        dispatch(removeModalState());
    }

    return { modalState, openModal, closeModal }
}

export const { removeModalState, setModalState } = modalSlice.actions;
export default modalSlice.reducer;
