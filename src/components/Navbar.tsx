import Logo from "./Logo";
const Navbar = () => {


    const navigation=[
        {title:"Home" ,href:"/"},
        {title:"Features" ,href:"/features"},
        {title:" About me" , href:"/about"},
        {title:"Studio" , href:"/studio"},
    ];
  return (
    <main>
      <div><Logo title="Blog-site"  className="text-black"/></div>
      <div></div>
    </main>
  )
}

export default Navbar
