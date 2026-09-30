
import { useParams } from "react-router-dom";
import data from "../../Data/posts.json";
import { NavLink } from "react-router-dom";


export default function Details() {
  let { slug } = useParams();
  let posts = data.posts;
  let currentPost = posts.find((post) => post.slug === slug);
  let contents = currentPost.content.split("##").slice(1).map((content) => content.split("\n")[0].trim());
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">المقال غير موجود</h2>
        <NavLink to="/blog" className="px-6 py-3 bg-orange-500 rounded-xl text-white font-semibold">
          العودة للمدونة
        </NavLink>
      </div>
    );
  }
  return (
    <>
      <main className="grow pt-20">
        <article className="bg-[#0a0a0a] min-h-screen">
          <div className="relative h-[60vh] min-h-125 overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={currentPost.title}
              src={currentPost.image}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>

            <div className="absolute top-8 right-8 left-8">
              <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
                <NavLink
                  className="text-white/70 hover:text-white transition-colors"
                  to="/"
                >
                  <i className="fa-solid fa-home"></i>
                </NavLink>

                <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>

                <NavLink
                  className="text-white/70 hover:text-white transition-colors"
                  to="/blog"
                >
                  المدونة
                </NavLink>

                <i className="fa-solid fa-chevron-left text-white/30 text-xs"></i>

                <span className="text-orange-400 font-medium truncate max-w-50">
                  {currentPost.category}
                </span>
              </nav>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <NavLink
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                    to="/blog?category=بورتريه"
                  >
                    بورتريه
                  </NavLink>

                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar"></i>
                      {currentPost.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-clock"></i>
                      {currentPost.readTime}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                 {currentPost.title}
                </h1>

                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                  <img
                    alt={currentPost.author.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                    src={currentPost.author.avatar}
                  />

                  <div>
                    <p className="font-bold text-white">{currentPost.author.name}</p>
                    <p className="text-sm text-white/60">{currentPost.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              <div className="order-2 lg:order-1">
                <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                  <p className="text-lg text-neutral-200 leading-relaxed italic">
                    {currentPost.excerpt}
                  </p>
                </div>

                <div className="prose-custom">
                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                   {currentPost.content.split("##")[0]}
                  </p>

                  <h2
                    id="section-0"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>
                   {currentPost.content.split("##")[1].split("\n")[0].trim()}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                   {currentPost.content.split("##")[1].split("\n")[2].trim()}
                  </p>

                  <h2
                    id="section-1"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>
                    {currentPost.content.split("##")[2].split("\n")[0].trim()}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                   {currentPost.content.split("##")[2].split("\n")[2].trim()}
                  </p>

                  <h2
                    id="section-2"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>
                    {currentPost.content.split("##")[3].split("\n")[0].trim()}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                  {currentPost.content.split("##")[3].split("\n")[2].trim()}
                  </p>

                  <h2
                    id="section-3"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>
                   {currentPost.content.split("##")[4].split("\n")[0].trim()}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                   {currentPost.content.split("##")[4].split("\n")[2].trim()}
                  </p>

                  <h2
                    id="section-4"
                    className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                  >
                    <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <i className="fa-solid fa-camera text-orange-500"></i>
                    </span>
                    {currentPost.content.split("##")[5].split("\n")[0].trim()}
                  </h2>

                  <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                     {currentPost.content.split("##")[5].split("\n")[2].trim()}
                  </p>

                </div>

                {/* Tags */}
                <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-tags text-orange-500"></i>
                    </div>
                    <h3 className="font-bold text-white">الوسوم</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #{currentPost.tags[0]}
                    </span>

                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #{currentPost.tags[1]}
                    </span>

                    <span className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer">
                      #{currentPost.tags[2]}
                    </span>
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-share-nodes text-orange-500"></i>
                      </div>
                      <h3 className="font-bold text-white">شارك المقال</h3>
                    </div>

                    <div className="flex gap-2">
                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-x-twitter"></i>
                      </button>

                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </button>

                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-brands fa-whatsapp"></i>
                      </button>

                      <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                        <i className="fa-solid fa-link"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      alt= {currentPost.author.name}
                      className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                      src= {currentPost.author.avatar}
                    />

                    <div className="text-center sm:text-right flex-1">
                      <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                        كاتب المقال
                      </span>

                      <h3 className="text-xl font-bold text-white mt-1">
                       {currentPost.author.name}
                      </h3>

                      <p className="text-neutral-500 text-sm mb-3">
                          {currentPost.author.role}
                      </p>

                      <p className="text-neutral-400 text-sm leading-relaxed">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                        الفوتوغرافي.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="order-1 lg:order-2">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Table of Contents */}
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-list text-orange-500"></i>
                      </div>

                      <h3 className="font-bold text-white">محتويات المقال</h3>
                    </div>

                    <nav className="space-y-2">
                     {contents.map((content, index) => {
                        return (
                        <NavLink
                          key={index}
                          to={`#section-${index}`}
                          className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                         >
                            <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                               {index + 1}
                            </span>

                            <span className="text-sm">
                               {content}
                            </span>
                        </NavLink>
                       );
                     })}                  
                    </nav>
                  </div>

                  {/* Article Info */}
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-clock text-orange-500 text-xl mb-2"></i>
                        <p className="text-white font-bold">{currentPost.readTime}</p>
                        <p className="text-neutral-500 text-xs">وقت القراءة</p>
                      </div>

                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                        <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2"></i>
                        <p className="text-white font-bold text-sm">{currentPost.date.slice(5)}</p>
                        <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
                      </div>

                      <h3 className="font-bold text-white mb-2">
                        لا تفوّت جديدنا
                      </h3>

                      <p className="text-neutral-400 text-sm mb-4">
                        اشترك للحصول على أحدث المقالات
                      </p>

                      <NavLink
                        className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                        to="/blog"
                      >
                        تصفح المزيد
                      </NavLink>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related Articles */}
            <div className="mt-20 pt-12 border-t border-[#262626]">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-images text-orange-500 text-xl"></i>
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      مقالات قد تعجبك
                    </h2>

                    <p className="text-neutral-500 text-sm">
                      استكشف المزيد من المحتوى المميز
                    </p>
                  </div>
                </div>

                <NavLink
                  className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                  to="/blog"
                >
                  عرض الكل
                  <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                </NavLink>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <NavLink
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  to="/blog/street-photography-guide"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="تصوير الشارع: فن التقاط الحياة اليومية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=800&h=400&fit=crop"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>

                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      بورتريه
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      تصوير الشارع: فن التقاط الحياة اليومية
                    </h3>

                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="نادر سعيد"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face"
                        />
                        نادر سعيد
                      </span>

                      <span>7 دقائق للقراءة</span>
                    </div>
                  </div>
                </NavLink>

                {/* Card 2 */}
                <a
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  href="/blog/wedding-photography-guide"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="تصوير حفلات الزفاف: دليل المصور المحترف"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>

                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      بورتريه
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      تصوير حفلات الزفاف: دليل المصور المحترف
                    </h3>

                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="منصور الزهراني"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face"
                        />
                        منصور الزهراني
                      </span>

                      <span>11 دقائق للقراءة</span>
                    </div>
                  </div>
                </a>

                {/* Card 3 */}
                <a
                  className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  href="/blog/sports-action-photography"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="تصوير الرياضة والحركة: تجميد اللحظة الحاسمة"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>

                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      بورتريه
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      تصوير الرياضة والحركة: تجميد اللحظة الحاسمة
                    </h3>

                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt="أحمد الشهري"
                          className="w-6 h-6 rounded-full"
                          src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face"
                        />
                        أحمد الشهري
                      </span>

                      <span>10 دقائق للقراءة</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
