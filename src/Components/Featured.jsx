

const Featured = () => {
  return (
   <>
   <section id="featured">
    <div className="container">
        <h2>Featured</h2>
        <div className="flex gap-6">
             <div className="featured-card">
                <img src="/public/headphone.png" alt="" />
                <h3>Headphones</h3>
                <p>Premium quality sound</p>
                <div className="value-container">
                    <span className="price">$99.99</span>
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