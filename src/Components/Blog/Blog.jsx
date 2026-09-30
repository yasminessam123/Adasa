
import data from "../../Data/posts.json";
import { useState ,useEffect } from "react";
import { NavLink ,useSearchParams} from 'react-router-dom';


export default function Blog() {
  const posts = data.posts;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const postsPerPage = 6;
  const startIndex = (currentPage - 1) * postsPerPage;
  const [categorySearch, setCategorySearch] = useState("");
  const filteredPosts = data.posts.filter((post) => {
    const matchesCategorySearch = post.category.toLowerCase().includes(categorySearch.toLowerCase());
    const matchesCategoryButton = selectedCategory === "الكل" || post.category === selectedCategory;
    return matchesCategorySearch && matchesCategoryButton;
  });
  const currentPosts = filteredPosts.slice( startIndex,startIndex + postsPerPage, );
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const [view, setView] = useState("grid");
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");



    useEffect(() => {
      if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
  }
  }, [categoryFromUrl]);



  return (
    <>
      <main className="grow pt-20">
        <div className="min-h-screen bg-[#0a0a0a]">
       
          <div className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="section-label bg-[#f973161a] rounded-full text-[#f97316] px-4 py-2 border border-[#f973164d] inline-flex items-center gap-2 mb-6">
                <i className="fa-regular fa-newspaper"></i>
                مدونتنا
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف
                <span className="bg-linear-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent">
                  {" "}
                  مقالاتنا
                </span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-80 text-white">
                  <input
                    type="text"
                    placeholder="ابحث في المقالات..."
                    value={categorySearch}
                    className="bg-[#161616] border border-[#262626]  rounded-xl w-full px-5 py-3 pr-12"
                    onChange={(e) => {
                    setCategorySearch(e.target.value);
                    setCurrentPage(1);
                    }}

                  />
                  <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"></i>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "الكل" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("الكل");
                      setCurrentPage(1);
                    }}
                  >
                    جميع المقالات
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "إضاءة" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("إضاءة");
                      setCurrentPage(1);
                    }}
                  >
                    إضاءة
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "بورتريه" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("بورتريه");
                      setCurrentPage(1);
                    }}
                  >
                    بورتريه
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "مناظر طبيعية" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("مناظر طبيعية");
                      setCurrentPage(1);
                    }}
                  >
                    مناظر طبيعية
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "تقنيات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("تقنيات");
                      setCurrentPage(1);
                    }}
                  >
                    تقنيات
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === "معدات" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30" }`}
                    onClick={() => {
                      setSelectedCategory("معدات");
                      setCurrentPage(1);
                    }}
                  >
                    معدات
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">
                عرض
                <span className="font-bold text-white">
                  {" "}
                  {filteredPosts.length}{" "}
                </span>
                  مقالات في {""} 
                <span className="font-bold text-orange-500">
                  { selectedCategory === "الكل"?  " جميع المقالات " : selectedCategory }
                </span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                  <button
                    onClick={() => setView("grid")}
                    className={
                      view === "grid"
                        ? "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                        : "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                    }
                    title="عرض شبكي"
                  >
                    <i className="fa-solid fa-qrcode"></i>
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={
                      view === "grid"
                        ? "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                        : "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                    }
                    title="عرض قائمة"
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className={
                view === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "flex flex-col gap-6"
              }>
              {currentPosts.map((post) => {
                return (
                  <article
                    key={post.id}
                    className={
                      view === "grid"
                        ? "group hover:-translate-y-1 bg-[#161616] rounded-3xl border border-[#262626] transition-all overflow-hidden"
                        : "group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
                    }>
                    <NavLink to={`/blog/${post.slug}`} className={view === "grid" ? "block" : "flex flex-col md:flex-row"}>
                      <div
                        className={
                          view === "grid"
                            ? "relative h-52 overflow-hidden"
                            : "relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden"
                        }
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className={
                            view === "grid"
                              ? "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                              : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          }
                        />
                        <div
                          className={
                            view === "grid"
                              ? "absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              : "absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          }
                        ></div>
                        <div
                          className={
                            view === "grid"
                              ? "absolute top-4 right-4"
                              : "hidden"
                          }
                        >
                          <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div
                        className={
                          view === "grid"
                            ? "p-6"
                            : "flex-1 p-6 flex flex-col justify-center"
                        }
                      >
                        <div
                          className={
                            view === "grid"
                              ? "flex items-center gap-3 text-sm text-neutral-500 mb-3"
                              : "flex flex-wrap items-center gap-3 mb-3"
                          }
                        >
                          <span
                            className={
                              view === "list"
                                ? "px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20"
                                : "hidden"
                            }
                          >
                            {selectedCategory}
                          </span>
                          <span
                            className={
                              view === "grid"
                                ? "flex items-center gap-1"
                                : "flex items-center gap-1 text-sm text-neutral-500"
                            }
                          >
                            <i className="fa-regular fa-clock"></i>
                            {post.readTime}
                          </span>
                          <span
                            className={
                              view === "grid"
                                ? "w-1 h-1 bg-neutral-600 rounded-full"
                                : "hidden"
                            }
                          ></span>
                          <span
                            className={
                              view === "grid"
                                ? "hidden"
                                : "flex items-center gap-1 text-sm text-neutral-500"
                            }
                          >
                            <i className="fa-solid fa-calendar"></i>
                            <span>{post.date}</span>
                          </span>
                          <span
                            className={view === "grid" ? "visible" : "hidden"}
                          >
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                            />
                            <div>
                              <p className="text-sm font-medium text-white">
                                {post.author.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {post.author.role}
                              </p>
                            </div>
                          </div>

                          {view === "grid" ? (
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                              <i className="fa-solid fa-angle-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
                            </div>
                          ) : (
                            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                              اقرأ المقال
                              <i className="fa-solid fa-arrow-left-long"></i>
                            </span>
                          )}
                        </div>
                      </div>
                    </NavLink>
                  </article>
                );
              })}
            </div>
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                        currentPage === pageNumber
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
                    : "bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </div>
            <p className="text-center text-neutral-500 mt-4 text-sm">
              صفحة {currentPage} من {totalPages}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
