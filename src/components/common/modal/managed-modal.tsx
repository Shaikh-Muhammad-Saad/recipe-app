
import { useModal } from '@/store/slices/modal';
import dynamic from 'next/dynamic';

const SelectWeekModalView = dynamic(() => import('@/components/recipe/select-week-modal-view'))



const ManagedModal = () => {
    const { modalState: { view } } = useModal();

    return (
        <>
            {view === "SELECT_WEEK_MODAL_VIEW" && <SelectWeekModalView />}

        </>
    );
};

export default ManagedModal;