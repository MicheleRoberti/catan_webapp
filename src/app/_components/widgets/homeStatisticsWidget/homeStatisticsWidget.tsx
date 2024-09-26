import Loader from '@/app/_components/loader/loader';

const HomeStatisticsWidget = () => {
  return (
    <div className="flex h-full w-full items-center justify-center px-24 py-16">
      <div className="flex h-full w-full items-center justify-center border-4 border-secondary bg-slate-400 bg-opacity-90">
        <Loader />
      </div>
    </div>
  );
};

export default HomeStatisticsWidget;
