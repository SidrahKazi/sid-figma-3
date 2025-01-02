export default function Footer() {
    return (
      <footer className=" body-font py-8">
        <div className="container mx-auto px-5 flex flex-col md:flex-row md:justify-between relative">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font text-xs tracking-widest mb-3 font-semibold">Icons</h2>
          <nav className="list-none space-y-2 text-xs">
            <li> Air Force 1</li>
            <li> Huarache</li>
            <li> Air Max 90</li>
            <li> Air Max 95</li>
          </nav>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0 ">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">Shoes</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordon Shoes</li>
            <li>Running Shoes</li>
          </nav>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">Clothing</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>All Clothing</li>
            <li>Modest Clothing</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </nav>
          
        </div>
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <h2 className="title-font font-medium text-xs tracking-widest mb-3">Kids'</h2>
          <nav className="list-none space-y-2 text-xs">
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids'Jordon Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </nav>
          
        </div>
        </div>
        </footer>
    )
}