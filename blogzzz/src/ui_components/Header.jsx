import banner from "../images/tech-girl.jpg"

const Header = () => {
  return (
    <section className="max-container padding-x py-4 z-auto relative">
      <div className="w-full h-[500px]  overflow-hidden rounded-lg">
        <img
          src={banner}
          className="w-full h-full  object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default Header