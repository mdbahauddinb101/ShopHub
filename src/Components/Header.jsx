

const Header = () => {
  return (
    <>
    <header id="header">
        <div className="container">
           <div className="flex items-center">
            <img src="/public/logo.png" alt="logo" />
            <ul className="flex ml-8 gap-8">
                <li>Home</li>
                <li>Categories</li>
                <li>Deals</li>
                <li>About</li>
            </ul>
            <div className="relative ml-20">
                <input className="relative w-lg h-10.5 rounded-lg border border-[#D1D5DB] placeholder:p-7" type="text" placeholder="Search products..."/>
                <img className="absolute top-3.25 left-1.5" src="/public/search.png" alt="" />
            </div>
            <div className="flex gap-4 ml-auto">
                <img className="object-contain" src="/public/cart.png" alt="" />
                <img className="object-contain"src="/public/profile.png" alt="" />
            </div>
           </div>
        </div>
    </header>
    </>
  )
}

export default Header