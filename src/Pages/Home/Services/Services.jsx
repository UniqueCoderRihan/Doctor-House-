import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import doctorApo from '../../../assets/Rectangle 20078.png'
import TabOneImg from '../../../assets/Rectangle 10 (1).png';
import TabTwoImg from '../../../assets/Rectangle 10 (2).png'
import TabInfo from './TabInfo';

const Services = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto mt-10'>
            <div className=''>
                <img src={doctorApo} alt="" />
            </div>
            <div>
                <p className='text-4xl font-bold my-3'>Our Services</p>
                <p className='mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <Tabs>
                    <TabList className='grid grid-cols-3'>
                        <Tab className='p-2 border-red-600 font-bold text-2xl'>Cavity Protection</Tab>
                        <Tab className='p-2 border-red-600 font-bold text-2xl'>Dentisty</Tab>
                        <Tab className='p-2 border-red-600 font-bold text-2xl'>Oral Surgery</Tab>
                    </TabList>

                    <TabPanel>
                        <TabInfo img={TabOneImg} title='Gas Therapy '></TabInfo>
                    </TabPanel>
                    <TabPanel>
                        <TabInfo img={TabTwoImg} title='Gastic Betha Resovled'></TabInfo>
                    </TabPanel>
                    <TabPanel>
                        <TabInfo img={TabOneImg} title='Electronic Gas Terapy'></TabInfo>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Services;