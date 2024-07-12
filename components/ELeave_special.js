import MarqueeTitle from "@/components/MarqueeTitle";
import Link from "next/link";

const ELeave_special = () => {
  return (
      <div className="nicolas_sm_awards">
          <div className="nicolas_sm_extra_title">
              <div className='flex items-center justify-center text-primary-900 font-bold text-5xl py-6'>E Leave Mobile Application</div>
              <div className='flex items-center justify-center text-xl text-secondary-600'>
                  Now you can download SQL E Leave at Google Play Store or App Store
              </div>
          </div>
          <div className="container">
              <div className="extra_container">
                  <div className="awards_in">
                      <div className="image_box">
                          <img src="/img/home/eleave.png" alt={2}/>
                      </div>
                      <div className="awards_box">
                          <div className="list_inner">
                              <div>
                                  <h1 className='text-2xl text-primary-900 py-6 font-bold'>Data Secure</h1>
                                  <div className='text-lg text-secondary-600'>
                                      One-Time Password (OTP) email verification to access SQL E Leave. 🔒
                                  </div>
                              </div>
                          </div>
                          <div className="list_inner">
                              <div>
                                  <h1 className='text-2xl text-primary-900 py-6 font-bold'>Leave Info</h1>
                                  <div className='text-lg text-secondary-600'>
                                      Employee check/apply leave and choose the leave type. ✈️
                                  </div>
                              </div>
                          </div>
                          <div className="list_inner">
                              <div>
                                  <h1 className='text-2xl text-primary-900 py-6 font-bold'>Payroll Info</h1>
                                  <div className='text-lg text-secondary-600'>
                                      Employee are able to view their monthly payroll info with previous record. 😍️
                                  </div>
                              </div>
                          </div>
                          <div className="list_inner">
                              <div>
                                  <h1 className='text-2xl text-primary-900 py-6 font-bold'>Mobile EA Form</h1>
                                  <div className='text-lg text-secondary-600'>
                                      Now you can get all the EA Form info straight from your mobile phone. ❤
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className='flex flex-col items-center justify-center py-2 md:gap-10'>
                  <div className='flex md:flex-row flex-col w-full items-center justify-center gap-10 py-6'>
                      <button className='bg-primary-900 rounded-2xl text-white p-3 md:w-1/5'><Link
                          href='https://docs.google.com/forms/d/e/1FAIpQLSetF6DKhQpZZL2srdDtqkgiMnohGaBwIhWX1Fy-EoMlAqgG9Q/viewform'
                          target='_blank'>LEARN MORE</Link></button>
                      <button className='bg-secondary-600 rounded-2xl text-white p-3 md:w-1/5'><Link
                          href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
                          target='_blank'>ENQUIRY</Link></button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ELeave_special
