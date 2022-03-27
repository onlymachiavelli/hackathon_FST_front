const Hero = () => {
  return (
    <>
      <section className="bg-red-200 text-green-900 relative">
        <div
          id="heroimg"
          className="min-h-screen hero-image bg-right-bottom bg-cover flex"
        >
          <div className="relative container mx-auto p-4 flex items-end z-10">
            <div>
              <div className="content float-left py-4 px-5 my-5">
                <div className="heading mb-10 text-6xl">
                  Meet LandHippo, The blah blah blah
                </div>
                <div className="text-2xl mb-10 leading-normal hidden sm:block">
                  Affordable Properties From A Landlord You Trust!
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
