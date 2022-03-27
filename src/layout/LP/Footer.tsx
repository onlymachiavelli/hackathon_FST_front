const Footer = () =>{

    return (
    <>
        <footer className="bg-gray-800 p-5 grid grid-cols-1 md:grid-cols-12">
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Acme</p>
    <ul className="pt-5 text-gray-400">
      <li>Teardown</li>
      <li>News</li>
      <li>Partners</li>
      <li>About Us</li>
      <li>Contact Ud</li>
      <li>Terms of Use</li>
    </ul>
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Social</p>
    <ul className="pt-5 text-gray-400">
      <li>Facebook</li>
      <li>Twitter</li>
      <li>Youtube</li>
    </ul>
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Service</p>
    <ul className="pt-5 text-gray-400">
      <li>Compare</li>
      <li>Download</li>
      <li>Feedback</li>
      <li>Bug Report</li>
    </ul>
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
      <p className="text-gray-200">Activity</p>
    <ul className="pt-5 text-gray-400">
      <li>Influencers</li>
      <li>Affiliate</li>
      <li>Co-Branding</li>
      <li>Give Away</li>
    </ul>
  </div>
  <div className="md:col-span-4 pb-2 md:mb-0">
    <p className="text-gray-200">Newsletter Subscription</p>
    <div className="pt-5">
      <input type="text" className="rounded-sm p-2 w-full" placeholder="@ Subscribe to our newsletter...."/>
      <button className="bg-green text-white px-3 py-2 rounded-sm mt-2">Subscribe</button>
    </div>
  </div>
  <div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
        &copy; 2022 LANDHIPPO LTD
  </div>
</footer>
    </>
    )
}


export default Footer