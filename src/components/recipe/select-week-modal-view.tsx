import { useModal } from '@/store/slices/modal';
import { Dialog, DialogPanel } from '@headlessui/react'
import CustomButton from '@/components/common/custom-button';
import { useState } from 'react';
import { weeksList } from '@/utils/constants';
import { useDispatch } from 'react-redux';
import { addRecipe } from '@/store/slices/recipes'
import toast from 'react-hot-toast';



function SelectWeekModalView() {

    const [open, setOpen] = useState(false)
    const [selectedWeek, setSelectedWeek] = useState<string>('')
    const { closeModal, modalState } = useModal()
    const dispatch = useDispatch();


    setTimeout(() => {
        setOpen(true)
    }, 0)


    const saveRecipe = () => {
        if (!selectedWeek) {
            toast.error("Select week to add recipe", { duration: 4000 })
            return;
        }
        dispatch(addRecipe({ recipe: modalState?.data, week: selectedWeek }))
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => closeModal()}
                className="z-20 fixed inset-0 flex items-center justify-center bg-black/30 p-4 transition duration-100 ease-in data-[closed]:opacity-0"
                transition
            >
                <div className="fixed inset-0 flex items-center justify-center p-4 ">
                    {/* The actual dialog panel  */}
                    <DialogPanel className="bg-white p-8 sm:p-12 rounded-lg">

                        <div className='flex flex-col items-center gap-8'>

                            <p className='text-2xl font-bold'>Select Week</p>

                            <div className='grid grid-cols-12 gap-3'>
                                {weeksList?.map((week) => {
                                    return (
                                        <div
                                            onClick={() => setSelectedWeek(week)}
                                            className={`col-span-6 md:col-span-3 cursor-pointer border rounded-lg px-7 py-2 ${selectedWeek === week ? 'bg-teal-200' : 'bg-gray-100'} font-semibold`}
                                        >
                                            {week}
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex flex-row justify-around w-full">
                                <CustomButton buttonClassName='bg-tertiary hover:bg-red-600 !px-16 text-xs !rounded' onClick={() => saveRecipe()}>Save</CustomButton>
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </Dialog>
        </>

    )
}

export default SelectWeekModalView;