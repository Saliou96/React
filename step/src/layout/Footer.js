import React from 'react'

function Footer() {
  return (
    <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright
        href="#"
        by="Flowbite™"
        year={2022}
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        {/* <Footer.Icon
          href="#"
          icon={BsFacebook}
        />
        <Footer.Icon
          href="#"
          icon={BsInstagram}
        />
        <Footer.Icon
          href="#"
          icon={BsTwitter}
        />
        <Footer.Icon
          href="#"
          icon={BsGithub}
        />
        <Footer.Icon
          href="#"
          icon={BsDribbble}
        /> */}
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default Footer
