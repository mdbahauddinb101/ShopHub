

const Categories = () => {
  return (
<>
<section id="categories" className="h-79 flex items-center justify-center">
    <div className="container">
        <h2 className="text-center text-[#111827] font-bold text-[30px] leading-9 mb-8">Shop by Category</h2>

        <div className="flex items-center gap-44.25 justify-center">

            <div className="sub-image">
                <img src="/public/div-1.png" alt="" />
                <h3>Electronics</h3>
            </div>

              <div className="sub-image">
                <img src="/public/div-2.png" alt="" />
                <h3>Fashion</h3>
            </div>

              <div className="sub-image">
                <img src="/public/div-3.png" alt="" />
                <h3>Home</h3>
            </div>

                <div className="sub-image">
                <img src="/public/div-4.png" alt="" />
                <h3>Sports</h3>
            </div>

              <div className="sub-image">
                <img src="/public/div-5.png" alt="" />
                <h3>Books</h3>
            </div>

              <div className="sub-image">
                <img src="/public/div-6.png" alt="" />
                <h3>Gaming</h3>
            </div>

        </div>
    </div>

</section>
</>  )
}

export default Categories