const DemoNoticeBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[90] border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-4 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-300 sm:text-xs">
          This website is a demo page created by bizevo.in. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DemoNoticeBar;
