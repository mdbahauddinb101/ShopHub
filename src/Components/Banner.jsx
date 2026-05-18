const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="bg-linear-to-r from-[#2563EB] to-[#1E40AF] h-125 flex items-center justify-center"
      >
        <div className="container">
          <div className="banner-container">
            <div className="banner-left">
              <h1 className="font-bold text-[60px] leading-15 text-white mb-4">Summer Sale</h1>
              <p className="font-normal text-[20px] leading-7 mb-8 text-[#DBEAFE]">Up to 70% off on selected items. Limited time offer!</p>
              <button className="border border-[#E5E7EB] rounded-lg text-[#2563EB] bg-[#E5E7EB] px-8 py-3.5">Shop Now</button>
            </div>
            <img src="/public/banner-photo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
