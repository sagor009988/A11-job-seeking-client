import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../hooks/useJobs';
import { useEffect, useState } from 'react';
import Loading from './../loading/Loading';
import './tab.css';
import JobTab from './JobTab';

const JobTabs = () => {
    const { data, isLoading, isFetching, refetch } = useJobs();
    const [tabJobs, setTabJobs] = useState(data?.jobs);
    const [ctgName, setCtgName] = useState('all');
    const [showVal, setShowVal] = useState(3);

    const handleJobsFilter = (ctg) => {
        setCtgName(ctg);
    }




    useEffect(() => {
        if (ctgName === "all") {
            setTabJobs(data?.jobs);
        } else {
            const filterData = data?.jobs.filter((job) => ctgName == job.category);
            console.log(filterData);
            setTabJobs(filterData);
        }
        setShowVal(3);
    }, [ctgName, data]);





    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='py-16 max-w-6xl mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleJobsFilter("all")} key="all">
                            All
                        </Tab>
                        {data?.categories?.map((category) => (
                            <Tab
                                key={category?._id}
                                onClick={() => handleJobsFilter(category?.name)}
                            >
                                {category?.name}
                            </Tab>
                        ))}
                    </TabList>
                    {
                        tabJobs?.length == 0 ? <>
                            <div className="text-center py-4">
                                <p>No data found</p>
                            </div>
                        </> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {tabJobs?.slice(0, showVal)?.map((job) => <JobTab key={job._id} job={job} refetch={refetch} />)}
                        </div>
                    }

                    {
                        tabJobs?.length > showVal ? (
                            <div className='flex items-center justify-center py-8'>
                                <div>
                                    <button onClick={() => setShowVal(showVal + 3)} className='border-[#D2DE32] border py-1 px-4 rounded-sm hover:bg-[#D2DE32] hover:text-white hover-text-white font-medium'>
                                        Load More Jobs
                                    </button>
                                </div>
                            </div>
                        ) : null
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default JobTabs;
