
import { NavLink } from 'react-router-dom';

export default function Footer() {

  function relodedForm(e){
     e.preventDefault();
  }
  return (
    <>
    <footer className='relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]'>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl'></div>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          <div className='lg:col-span-1'>
            <NavLink to="" className='flex items-center gap-3 mb-6 group'>
              <div className='w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300'>
                <span className='text-white font-bold text-xl'>ع</span>
              </div>
              <span className='text-xl font-bold text-white'>عدسة</span>
            </NavLink>
            <p className='text-sm text-neutral-500 mb-6 leading-relaxed'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
            <div className='flex gap-2'>
              <a href="http://twitter.com/adasah" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 
              hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110' aria-label='twitter'>
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </a>
              <a href="http://github.com/adasah" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 
              hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110' aria-label='github'>
               <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href="http://linkedin.com/company/adasah" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 
              hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110' aria-label='linkedin'>
               <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="http://youtube.com/@adasah" target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 
              hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110' aria-label='youtube'>
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
              <span className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></span>
              استكشف  
            </h3>
            <ul className='space-y-4'>
              <li>
                <NavLink to="" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  الرئيسية 
                </NavLink>
              </li>
              <li>
                <NavLink to="blog" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  المدونة 
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  من نحن 
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
              <span className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></span>
              التصنيفات  
            </h3>
            <ul className='space-y-4'>
              <li>
                <a href="" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  إضاءة 
                </a>
              </li>
              <li>
                <a href="" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  بورتريه 
                </a>
              </li>
              <li>
                <a href="" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                  مناظر طبيعية  
                </a>
              </li>
              <li>
                <a href="" className='text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group'>
                  <i className="fa-solid fa-angle-left opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500"></i>  
                   تقنيات  
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-semibold mb-6 flex items-center gap-2'>
              <span className='w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full'></span>
              ابقى على اطلاع  
            </h3>
            <p className='text-sm text-neutral-500 mb-4'>اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form onSubmit={relodedForm} className='space-y-3'>
              <div className='relative'>
                <input type="email" placeholder='أدخل بريدك الإلكتروني' className='w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600' />
              </div>
              <button type='submit' className='w-full bg-linear-to-r from-[#f97316] to-[#ea580c] rounded-full px-8 py-4 font-bold text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1 text-sm'>اشترك</button>
            </form>
          </div>
        </div>
        <div className='relative border-t border-[#262626]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-sm text-neutral-600'>
                © 2026 
                 عدسة. صنع بكل
              <i className='fa-solid fa-heart text-orange-500 me-1 ms-1'></i>
                  جميع الحقوق محفوظة. 
             </p>
             <div className='flex gap-6'>
              <a href="" className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>سياسة الخصوصية</a>
              <a href="" className='text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300'>شروط الخدمة</a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </footer>   
    </>
  )
}
