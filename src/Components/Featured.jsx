

const Featured = () => {
  return (
   <>
   <section id="featured">
    <div className="container">
        <div className="featured-header">
        <h2 className="font-bold text-[30px] leading-9">Featured Products</h2>
        <button className="text-[#3B82F6] font-medium text-[16px] leading-6">View All</button>
        </div>
        <div className="flex justify-between items-center gap-6">
             <div className="featured-card">
                <img className="mb-4" src="/public/headphone.png" alt="" />
                <h3 className="font-semibold text-[16px] mb-1.5 ">Headphones</h3>
                <p className="font-normal text-[14px] text-[#4B5563] mb-2.75">Premium quality sound</p>
                <div className="value-container">
                    <span className="font-bold text-[20px] leading-7 text-[#111827]">$99.99</span>
                    <img src="/public/button.png" alt="" />
                </div>
             </div>
             <div className="featured-card">
                <img src="/public/phone.png" alt="" />
                <h3>Smartphone Pro</h3>
                <p>Latest technology</p>
                <div className="value-container">
                    <span className="price">$799.99</span>
                    <img src="/public/button.png" alt="" />
                </div>
             </div>
             <div className="featured-card">
                <img src="/public/shoe.png" alt="" />
                <h3>Headphones</h3>
                <p>Premium quality sound</p>
                <div className="value-container">
                    <span className="price">$99.99</span>
                    <img src="/public/button.png" alt="" />
                </div>
             </div>
             <div className="featured-card">
                <img src="/public/laptop.png" alt="" />
                <h3>Headphones</h3>
                <p>Premium quality sound</p>
                <div className="value-container">
                    <span className="price">$99.99</span>
                    <img src="/public/button.png" alt="" />
                </div>
             </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Featured