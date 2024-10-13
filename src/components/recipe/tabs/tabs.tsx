import CustomButton from '@/components/common/custom-button';
import { useModal } from '@/store/slices/modal';
import { Recipe } from '@/ts-types/generated';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Week1Tab from '@/components/recipe/tabs/week-1-tab';
import Week2Tab from '@/components/recipe/tabs/week-2-tab';
import Week3Tab from '@/components/recipe/tabs/week-3-tab';
import Week4Tab from '@/components/recipe/tabs/week-4-tab';
const AllMealsTab = dynamic(() => import('@/components/recipe/tabs/all-meals-tab'), { ssr: false });


const classes = {
    tabBase: 'font-semibold text-xs sm:text-sm px-2 sm:px-4 md:px-7 xl:px-10 pt-5 mx-1 sm:mx-2 md:mx-3 xl:mx-4 pb-2 data-[selected]:border-b-[5px] border-tertiary focus:outline-none data-[selected]:text-text-tertiary '
}

const Tabs = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const { openModal } = useModal(); useRemoveHeaderBorder();


    const handleSetSelectedRecipe = (recipe: Recipe) => {
        if (selectedRecipe?.id === recipe.id) setSelectedRecipe(null);
        if (selectedRecipe?.id !== recipe.id) setSelectedRecipe(recipe);
    }

    return (
        <div className='bg-primary relative'>
            <TabGroup defaultIndex={0} onChange={(index) => setSelectedTabIndex(index)}>

                <div id="stickyDiv" className='sticky top-0 z-10 flex justify-center items-center w-full border h-[105px] rounded-xl bg-secondary'>

                    <TabList className="flex">
                        <Tab className={`${classes.tabBase}`}>All Meals</Tab>
                        <Tab className={`${classes.tabBase}`}>Week 1</Tab>
                        <Tab className={`${classes.tabBase}`}>Week 2</Tab>
                        <Tab className={`${classes.tabBase}`}>Week 3</Tab>
                        <Tab className={`${classes.tabBase}`}>Week 4</Tab>
                    </TabList>

                    <CustomButton
                        disable={selectedTabIndex !== 0 || !selectedRecipe}
                        onClick={() => openModal({ view: "SELECT_WEEK_MODAL_VIEW", data: selectedRecipe })}
                        buttonClassName='absolute md:relative -top-14 md:top-0 right-0 mr-5 sm:mr-10 md:mr-0 sm:ml-3 md:ml-4 xl:ml-10 !px-2 sm:!px-4 md:!px-5 xl:!px-10'
                    >
                        Add to week
                    </CustomButton>

                </div>

                <TabPanels className="min-h-[500px]">

                    <TabPanel>
                        <AllMealsTab
                            setSelectedRecipe={handleSetSelectedRecipe}
                            selectedRecipe={selectedRecipe}
                        />
                    </TabPanel>

                    <TabPanel><Week1Tab /></TabPanel>
                    <TabPanel><Week2Tab /></TabPanel>
                    <TabPanel><Week3Tab /></TabPanel>
                    <TabPanel><Week4Tab /></TabPanel>
                </TabPanels>

            </TabGroup>
        </div>
    )
}

export default Tabs;


const useRemoveHeaderBorder = () => {
    useEffect(() => {
        const handleScroll = () => {
            const stickyDiv = document.getElementById('stickyDiv');
            if (stickyDiv) {
                if (window.scrollY > 335) {
                    stickyDiv.classList.add('rounded-bl-xl', 'rounded-br-xl');
                    stickyDiv.classList.remove('rounded-xl');
                } else {
                    stickyDiv.classList.remove('rounded-none');
                    stickyDiv.classList.add('rounded-xl');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}