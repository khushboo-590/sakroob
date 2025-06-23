import React from 'react'
import logo from '../assets/images/svg/logo.svg'

const Footer = () => {
  return (
      <div className="bg-[#0B2341] text-white pt-32 text-center px-4">
                      <div className="flex justify-center mb-4">
                          <img src={logo} alt="Sakroob" className="" />
                      </div>

                      <h3 className="font-semibold text-lg mb-2">Sakroob</h3>
                      <p className="text-sm text-gray-300 mb-4 max-w-md mx-auto">
                          Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
                      </p>

                      <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
                          <a href="#">Shipping</a>
                          <a href="#">Warranty</a>
                          <a href="#">FAQs</a>
                          <a href="#">Blog</a>
                          <a href="#">Contact</a>
                      </div>

                      <div className="flex justify-center gap-4 mb-4">
                          <a href="#" className="hover:text-gray-400">FB</a>
                          <a href="#" className="hover:text-gray-400">IG</a>
                          <a href="#" className="hover:text-gray-400">TW</a>
                      </div>

                      <div className="text-xs text-gray-400">
                          <p className="mb-1">Terms of Service | Privacy Policy</p>
                          <p>© 2025 Sakroob. All rights reserved.</p>
                      </div>
                  </div>
  )
}

export default Footer
