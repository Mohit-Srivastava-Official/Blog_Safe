//import axios from "axios";
import AnimationWrapper from "../common/page-animation";
import InPageNavigation from "../components/inpage-navigation.component";
import { useEffect, useState } from "react";
import Loader from "../components/loader.component";
//import BlogPostCard from "../components/blog-post.component";
//import MinimalBlogPost from "../components/nobanner-blog-post.component";
import { activeTabRef } from "../components/inpage-navigation.component";
//import NoDataMessage from "../components/nodata.component";
//import { filterPaginationData } from "../common/filter-pagination-data";
//import LoadMoreDataBtn from "../components/load-more.component";

const HomePage = () => {
    let [blogs, setBlog] = useState(null);
    let [trendingBlogs, setTrendingBlog] = useState(null);
    let [ pageState, setPageState ] = useState("home");

    let categories = [
        "programming",
        "hollywood",
        "film making",
        "social media",
        "cooking",
        "tech",
        "finance",
        "travel",
    ];

    



    const loadBlogByCategory = (e) => {
        
        let category = e.target.innerText.toLowerCase(); 

        setBlog(null);

        if(pageState == category){
            setPageState("home");
            return;
        }

        setPageState(category);

    }

    
    return (
        <AnimationWrapper>
            <section className="h-cover flex justify-center gap-10">
                {/* latest blogs */}
                <div className="w-full">
                    <InPageNavigation
                        routes={[ pageState , "trending blogs"]}
                        defaultHidden={["trending blogs"]}
                    >
                    
                    </InPageNavigation>
                </div>

                {/* filters and trending blogs */}
                <div className="min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                Stories form all interests
                            </h1>

                    
                        </div>

                        <div>
                            <h1 className="font-medium text-xl mb-8">
                                Trending
                                <i className="fi fi-rr-arrow-trend-up"></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </AnimationWrapper>
    );
};

export default HomePage;
